import { Repository, EntityRepository } from "typeorm";
import Client from "./entity/client.entity"

@EntityRepository(Client)
export class ClientsRepository extends Repository <Client> {
    
}
