import { Injectable, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from './user-repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from "./models/createUserDto";
import { LoginDto } from "./models/loginDto";
import * as bcrypt from 'bcrypt';
import { LocalFilesService } from "../local-file/local-file.service";
import { Connection } from 'typeorm';
import User from './entity/user.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private UserRepository: UserRepository,
        private localFilesService: LocalFilesService,
        private connection: Connection,
    ) { }

    async findByLogin({ email, password }: LoginDto) {
        const user = await this.UserRepository.findOne({ where: { email } });

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        // compare passwords    
        const isMatch = await bcrypt.compare(password, user.password);
        // const isMatch = await argon2.verify(password, user.password);

        if (!isMatch) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    async getAllUsers() {
        const users = await this.UserRepository.find();
        return users;
    };
    async getById(id: number) {
        const user = await this.UserRepository.findOne({ id });
        if (user) {
            return user;
        }
        throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
    }

    async getByEmail(email: string) {
        const user = await this.UserRepository.findOne({ email });
        if (user) {
            return user;
        }
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }


    async createNewUser(userData: CreateUserDto) {
        const newUser = await this.UserRepository.create(userData);
        await this.UserRepository.save(newUser);
        return newUser;
    }
    //To be implemented in Auth controller 
    async setCurrentRefreshToken(refreshToken: string, userId: number) {
        const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.UserRepository.update(userId, {
            currentHashedRefreshToken
        });
    };

    //To be used in refresh-token-strategy to check if refresh token matches the user.currentHashedRefreshToken
    async getUserIfRefreshTokenMatches(refreshToken: string, userId: number) {
        const user = await this.getById(userId);

        const refreshTokenIsMatching = await bcrypt.compare(
            refreshToken,
            user.currentHashedRefreshToken
        );

        if (refreshTokenIsMatching) {
            return user;
        }
    };

    //   removing the refresh token from the database
    async removeRefreshToken(userId: number) {
        return this.UserRepository.update(userId, {
            currentHashedRefreshToken: null
        });
    };

    // async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
    //     const avatar = await this.localFilesService.uploadDatabaseFile(imageBuffer, filename);
    //     await this.UserRepository.update(userId, {
    //         avatarId: avatar.id
    //     });
    //     return avatar;
    // }
    async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect(); // performs connection
        await queryRunner.startTransaction();

        try {
            const user = await queryRunner.manager.findOne(User, userId);
            const currentAvatarId = user.avatarId;
            const avatar = await this.localFilesService.uploadDatabaseFileWithQueryRunner(imageBuffer, filename, queryRunner);

            await queryRunner.manager.update(User, userId, {
                avatarId: avatar.id
            });

            if (currentAvatarId) {
                await this.localFilesService.deleteFileWithQueryRunner(currentAvatarId, queryRunner);
            }

            await queryRunner.commitTransaction();

            return avatar;
        } catch {
            await queryRunner.rollbackTransaction();
            throw new InternalServerErrorException();
        } finally {
            await queryRunner.release();  // release connection
        }
    }

}
