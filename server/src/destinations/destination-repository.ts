import Destination from "./entity/destination.entity";
import {Repository, EntityRepository} from "typeorm";

@EntityRepository(Destination)
export class DestinationRepository extends Repository <Destination> {}