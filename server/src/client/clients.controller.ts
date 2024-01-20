import { Controller, Post, Req, Body, Delete, Param, Patch, Get, UseGuards, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import CreateClientDto from './models/create-clients.Dto';
import { Request } from 'express';
import RequestWithUser from "../auth/requestWithUser.interface";
import RoleGuard from "../users/role.guard";
import { UserRole } from "../users/dto/roles.interface";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"
import CreateClientProfileDto from "./models/createProfileDto"

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { };

    @Post('create')
    async createNewClient(@Body() client: CreateClientDto, @Req() request: Request) {
        const newClient = await this.clientsService.createNewClient(client, request);
        return newClient;
    }

    @UseGuards(RoleGuard(UserRole.USER))
    @Patch("update/:id")
    async update(@Param("id") id: number, @Body() client: CreateClientDto) {
        const updatedClient = await this.clientsService.update(id, client);
        return updatedClient;
    }
    @UseGuards(JwtAuthGuard)
    @Get("allclients")
    async getAllClient() {
        const clients = await this.clientsService.findAll();
        return clients;
    }
    @UseGuards(JwtAuthGuard)
    @Get("search")
    async getClientsBySearch(
        @Query() search: any) {
        const clients = await this.clientsService.getClientsBySearch(search);
        return clients;
    }

    @UseGuards(JwtAuthGuard)
    @Delete("delete/:id")
    async delete(@Param("id") id: number) {
        let clientToDelete = await this.clientsService.remove(id)
        return clientToDelete
    }
    
    @UseGuards(JwtAuthGuard)
    @Get("client/:id")
    async getClient(@Param("id") id: number) {
        const client = await this.clientsService.findClientById(id);
        return client;
    }
    @Post('profile/:id')
    async createClientProfile(@Param('id') id: number, 
        @Body() createClientProfileDto: CreateClientProfileDto) {
        const profile = this.clientsService.createClientProfile(id, createClientProfileDto)
        return profile;
    }
   
}
