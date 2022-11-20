import { Repository, EntityRepository } from "typeorm";
import Director from "./entity/director.entity"

@EntityRepository(Director)
export class DirectorsRepository extends Repository <Director> {}