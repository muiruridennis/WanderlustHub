// import { Profile } from './../profile/Dtos/createProfileDto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository, } from '@nestjs/typeorm';
import { PostgresErrorCode } from '../database/postgresErrorCodes.enum';
import CreateClientDto from './models/create-clients.Dto';
import Client from "./entity/client.entity";
import Address from "./entity/address.entity";
import { Profile } from "./entity/profile.entity";
import { Repository } from 'typeorm';
import CreateClientProfileDto from "./models/createProfileDto"

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Client) private clientRepository: Repository<Client>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
        @InjectRepository(Address) private addressRepository: Repository<Address>,
    ) { }
    async createNewClient(client: CreateClientDto, request) {
        try {
            const requestProfile = request.body.profile
            const newProfile = await this.profileRepository.create({
                points: requestProfile.points,
                balance: requestProfile.balance,
                status: requestProfile.status,
                gender: requestProfile.gender,
                rating: requestProfile.rating,
            });

            const newAddress = await this.addressRepository.create({
                street: request.body.address.street,
                city: request.body.address.city,
                country: request.body.address.country,
            })
        
            const email = request.body.email;
            const emailInLowercase = email.toLowerCase();
            const newClient = await this.clientRepository.create({
                ...client,
                email: emailInLowercase,
                profile: newProfile,
                address: newAddress
            }
            );
            await this.clientRepository.save(newClient);
            return newClient;
        } catch (error) {
            if (error?.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException(
                    'Client with that email already exists',
                    HttpStatus.BAD_REQUEST,
                );
            }
            throw new HttpException(
                'Something went wrong',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }


    };

    // UPDATE single Client by ID
    async update(id: number, client: CreateClientDto) {
        const clientToUpdate = await this.clientRepository.findOne(
            {
                where: { id },
            });
        if (!clientToUpdate) {
            throw new HttpException(`user with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        // const updatedClientDetails = await this.clientRepository.save({ ...clientToUpdate, ...client });
        const updatedClientDetails = await this.clientRepository.update(id, client);
        return { updatedClientDetails, Message: "client updated successfully" };

    };

    async findAll() {
        return this.clientRepository.find({ 
            relations: ['payments', 'bookings'],
            order:{id: "DESC"} 
        });

    };
    async remove(id: number) {
        const client = await this.clientRepository.delete(id);
        return { client, Message: "Client deleted successfully" };
    }

    // READ single Client by ID
    async findClientById(id: number) {
        const client = await this.clientRepository.findOne(
            {
                where: { id }
            });
        if (!client) {
            throw new HttpException(`client with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        return client;
    };
    async getClientsBySearch(search) {
        const clients = await this.clientRepository.find(search);
        if (!clients) {
            throw new HttpException(`nothing exist`, HttpStatus.NOT_FOUND)
        }
        return clients;
    };

    async createClientProfile(
        id: number,
        createClientProfileDetails: CreateClientProfileDto,
    ) {
        const client = await this.clientRepository.findOne(
            {
                where: {
                    id
                }
            });
        if (!client)
            throw new HttpException(
                'client not found. Cannot create Profile',
                HttpStatus.BAD_REQUEST,
            );
        const newProfile = await this.profileRepository.create(createClientProfileDetails);
        const savedProfile = await this.profileRepository.save(newProfile);
        client.profile = savedProfile
        return this.clientRepository.save(client)

    }
}
