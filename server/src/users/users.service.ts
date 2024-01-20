import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from "./dto/createUserDto";
import { LoginDto } from "./dto/loginDto";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import * as bcrypt from 'bcrypt';
import { LocalFilesService } from "../local-file/local-file.service";
import {  Repository } from 'typeorm';
import User from './entity/user.entity';


@Injectable()
export class UsersService {
    private readonly saltRounds = 10;
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        // private localFilesService: LocalFilesService,
    ) { }

    async findByLogin({ email, password }: LoginDto) {
        const user = await this.usersRepository.findOne({ where: { email } });

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
        const users = await this.usersRepository.find();
        users.forEach(user =>
            user.password = undefined
            // user.currentHashedRefreshToken = undefined;
        );
        return users;
    };

    async getById(id: number) {
        const user = await this.usersRepository.findOneBy({ id })
        if (user) {
            user.password = undefined;
            return user;
        }
        throw new HttpException(
            'User with this id does not exist',
            HttpStatus.NOT_FOUND
        );
    }

    async getByEmail(email: string) {
        const user = await this.usersRepository.findOneBy({ email });
        if (user) {
            return user;
        }
        throw new HttpException(
            'User with this email does not exist',
            HttpStatus.NOT_FOUND
        );
    }


    async createNewUser(userData: CreateUserDto) {
        const { firstName, lastName } = userData
        const newUser = await this.usersRepository.create({
            ...userData,
            name: `${firstName} ${lastName}`
        });
        await this.usersRepository.save(newUser);
        return newUser;
    }
    //To be implemented in Auth controller 
    async setCurrentRefreshToken(refreshToken: string, userId: number) {
        const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.usersRepository.update(userId, {
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
        return this.usersRepository.update(userId, {
            currentHashedRefreshToken: null
        });
    };

    async markEmailAsConfirmed(email: string) {
        return this.usersRepository.update(
            { email },
            {
                isEmailConfirmed: true,
            },
        );
    }
    async setResetLink(email: string, token: string) {
        return this.usersRepository.update(
            { email },
            {
                resetLink: token,
            },
        );
    }
    async resetPassword(email: string, newPassword: string) {
        await this.usersRepository.update(
            { email },
            {
                password: newPassword,
                resetLink: null
            },
        );
        return { Message: "Password Changed Successfully" };
    }

    markPhoneNumberAsConfirmed(userId: number) {
        return this.usersRepository.update({ id: userId }, {
            isPhoneNumberConfirmed: true
        });
    }

    async remove(id: number) {
        const user = await this.usersRepository.findOne(
            {
                where: { id }
            });
        if (!user) {
            throw new HttpException(`user with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        await this.usersRepository.delete(id);
        return { Message: "user deleted successfully" };
    }


    async createWithGoogle(email: string, name: string) {
        // const stripeCustomer = await this.stripeService.createCustomer(name, email);
        const newUser = await this.usersRepository.create({
            email,
            name,
            isRegisteredWithGoogle: true,
            // stripeCustomerId: stripeCustomer.id,
        });

        await this.usersRepository.save(newUser);
        return newUser;
    }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return await bcrypt.hash(password, salt);
    }

async getByResetLink(resetLink: string){
    const user = await this.usersRepository.findOneBy({ resetLink });
    if (user) {
        return user;
    }
    throw new HttpException(
        'User does not exist',
        HttpStatus.NOT_FOUND
    );
}

    // async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
    //     const avatar = await this.localFilesService.uploadDatabaseFile(imageBuffer, filename);
    //     await this.usersRepository.update(userId, {
    //         avatarId: avatar.id
    //     });
    //     return avatar;
    // }
    // async addAvatar(userId: number, imageBuffer: Buffer, filename: string) {
    //     const queryRunner = this.dataSource.createQueryRunner();

    //     await queryRunner.connect(); // performs connection
    //     await queryRunner.startTransaction();

    //     try {
    //         const user = await queryRunner.manager.findOneBy(User,{where: {id: userId}});
    //         const currentAvatarId = user.avatarId;
    //         const avatar = await this.localFilesService.uploadDatabaseFileWithQueryRunner(imageBuffer, filename, queryRunner);

    //         await queryRunner.manager.update(User, userId, {
    //             avatarId: avatar.id
    //         });

    //         if (currentAvatarId) {
    //             await this.localFilesService.deleteFileWithQueryRunner(currentAvatarId, queryRunner);
    //         }

    //         await queryRunner.commitTransaction();

    //         return avatar;
    //     } catch {
    //         await queryRunner.rollbackTransaction();
    //         throw new InternalServerErrorException();
    //     } finally {
    //         await queryRunner.release();  // release connection
    //     }
    // }

}
