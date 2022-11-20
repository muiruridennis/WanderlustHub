import { Repository, EntityRepository } from "typeorm";
import LocalFile from "./entity/localFile.entity"

@EntityRepository(LocalFile)
export class LocalFileRepository extends Repository <LocalFile> {}
