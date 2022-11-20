import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientsRepository } from "./clients-repository";
import { InjectRepository, } from '@nestjs/typeorm';
import { ILike } from "typeorm";

import { CreateClientDto } from './models/create-clients.Dto';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(ClientsRepository)
        private clientsRepository: ClientsRepository
    ) { }
    async createNewClient(clientDetails: CreateClientDto, request) {
        const email = request.body.email;
        const clientExists = await this.clientsRepository.findOne({ where: { email } });
        if (clientExists) {
            throw new HttpException('Error! User Already exists. Please try again', HttpStatus.UNAUTHORIZED);
        }
        const newClient = await this.clientsRepository.create(clientDetails);
        await this.clientsRepository.insert(newClient);
        return newClient;

    };
    async updateClientsDetails(id: number, client: CreateClientDto) {
        const clientToUpdate = await this.clientsRepository.find({
            where: {
                id
            }
        });
        if (!clientToUpdate) {
            throw new HttpException(`user with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        const updatedClientDetails = await this.clientsRepository.save({ ...clientToUpdate, ...client });
        return { updatedClientDetails, Message: "client updated successfully" };

    };

    async getAllClient() {
        const clients = await this.clientsRepository.find({ relations: ["payment"] });
        return clients;
    };
    async deleteClient(id: number) {
        const clientToDelete = await this.clientsRepository.delete(id);
        return { clientToDelete, Message: "Client deleted successfully" };
    }
    async getClient(id: number) {
        const client = await this.clientsRepository.findOne(
            {
                where: {
                    id
                }
            });
        if (!client) {
            throw new HttpException(`client with id ${id} does not exist`, HttpStatus.NOT_FOUND);
        }
        return client;
    };
    async getClientsBySearch(search) {
        const clients = await this.clientsRepository.find(search);
        if (!clients) {
            throw new HttpException(`nothing exist`, HttpStatus.NOT_FOUND)
        }
        return clients;

    };
}
