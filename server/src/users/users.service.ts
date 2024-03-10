import { Injectable, HttpException, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from "./dto/createUserDto";
import { LoginDto } from "./dto/loginDto";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import CreateProfileDto from "./dto/createProfileDto"
import AddressDTO from "./dto/createAddressDto"
import * as bcrypt from 'bcrypt';
import { LocalFilesService } from "../local-file/local-file.service";
import { Repository, DataSource } from 'typeorm';
import User from './entity/user.entity';
import Address from "./entity/address.entity";
import Profile from "./entity/profile.entity";
import NotificationPreference from './entity/notificationPreference.entity';
import { plainToClassFromExist } from 'class-transformer';


@Injectable()
export class UsersService {
    private readonly saltRounds = 10;
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(NotificationPreference)
        private notificationPreferenceRepository: Repository<NotificationPreference>,
        @InjectRepository(Address)
        private addressRepository: Repository<Address>,
        @InjectRepository(Profile)
        private profileRepository: Repository<Profile>,
        private localFilesService: LocalFilesService,
        private connection: DataSource,

    ) { }

    async findByLogin({ email, password }: LoginDto) {
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find({
            relations: ["notificationPreferences"]
        });
        users.forEach(user =>
            user.password = undefined
            // user.currentHashedRefreshToken = undefined;
        );
        return users;
    };

    async getById(id: number) {
        const user = await this.userRepository.findOneBy({ id })
        if (user) {
            return user;
        }
        throw new HttpException(
            'User with this id does not exist',
            HttpStatus.NOT_FOUND
        );
    }

    async getByEmail(email: string) {
        const user = await this.userRepository.findOneBy({ email });
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
        const newUser = await this.userRepository.create({
            ...userData,
            name: `${firstName} ${lastName}`,

        });

        await this.userRepository.save(newUser);
        const defaultPreferences = await this.notificationPreferenceRepository.create({ user: newUser });
        await this.notificationPreferenceRepository.save(defaultPreferences);
        return newUser;
    }

    //To be implemented in Auth controller 
    async setCurrentRefreshToken(refreshToken: string, userId: number) {
        const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        await this.userRepository.update(userId, {
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
        return this.userRepository.update(userId, {
            currentHashedRefreshToken: null
        });
    };

    async updateNotificationPreferences(userId: number, updates: any) {
        const user = await this.getById(userId);
        if (!user.notificationPreferences) {
            throw new HttpException(`NotificationPreference not found`, HttpStatus.NOT_FOUND);
        }
        const notificationPreference = user.notificationPreferences;

        // Map properties from updates to notificationPreference
        plainToClassFromExist(notificationPreference, updates);

        await this.notificationPreferenceRepository.save(notificationPreference);

        return { message: "User's notification preferences updated successfully", user };
    }


    async markEmailAsConfirmed(email: string) {
        return this.userRepository.update(
            { email },
            {
                isEmailConfirmed: true,
            },
        );
    }
    async setResetLink(email: string, token: string) {
        return this.userRepository.update(
            { email },
            {
                resetLink: token,
            },
        );
    }
    async resetPassword(email: string, newPassword: string) {
        await this.userRepository.update(
            { email },
            {
                password: newPassword,
                resetLink: null
            },
        );
        return { Message: "Password Changed Successfully" };
    }

    markPhoneNumberAsConfirmed(userId: number) {
        return this.userRepository.update({ id: userId }, {
            isPhoneNumberConfirmed: true
        });
    }

    async remove(id: number) {
        const user = await this.userRepository.findOne(
            {
                where: { id }
            });
        if (!user) {
            throw new HttpException(`user with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        await this.userRepository.delete(id);
        return { Message: "user deleted successfully" };
    }


    async createWithGoogle(email: string, name: string) {
        // const stripeCustomer = await this.stripeService.createCustomer(name, email);
        const newUser = await this.userRepository.create({
            email,
            name,
            isRegisteredWithGoogle: true,
            // stripeCustomerId: stripeCustomer.id,
        });

        await this.userRepository.save(newUser);
        return newUser;
    }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.saltRounds);
        return await bcrypt.hash(password, salt);
    }

    async getByResetLink(resetLink: string) {
        const user = await this.userRepository.findOneBy({ resetLink });
        if (user) {
            return user;
        }
        throw new HttpException(
            'User does not exist',
            HttpStatus.NOT_FOUND
        );
    }

    async addAvatar(profileId: number, imageBuffer: Buffer, filename: string) {
        const queryRunner = this.connection.createQueryRunner();

        await queryRunner.connect(); // performs connection
        await queryRunner.startTransaction();

        try {
            const profile = await queryRunner.manager.findOne(Profile, { where: { id: profileId } });
            const currentAvatarId = profile.avatarId;
            const avatar = await this.localFilesService.uploadDatabaseFileWithQueryRunner(imageBuffer, filename, queryRunner);

            await queryRunner.manager.update(Profile, profileId, {
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

    async createUserProfile(userId: number, profileData: CreateProfileDto) {
        const user = await this.getById(userId);
        const newProfile = this.profileRepository.create(profileData);

        user.profile = newProfile;

        await this.userRepository.save(user);

        return newProfile;
    }
    async createUserAddress(userId: number, addressData: AddressDTO) {
        const user = await this.getById(userId);
        const newAddress = this.addressRepository.create(addressData);
        user.address = newAddress;
        await this.userRepository.save(user);

        return newAddress;
    }

}
