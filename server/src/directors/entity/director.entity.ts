import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinTable, JoinColumn } from "typeorm";
import LocalFile from "../../local-file/entity/localFile.entity"

@Entity()
class Directors {
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    fullName?: string;

    @Column({unique:true})
    idNumber: number;

    @Column()
    address: string;

    @Column()
    phoneNumber: string;

    @JoinColumn({ name: 'avatarId' })
    @OneToOne(
      () => LocalFile,
      {
        nullable: true
      }
    )
    public avatar?: LocalFile;
    // Thanks to creating the separate avaterId property, we can get the id of the file even without joining the DatabaseFile table. This neat trick can 
    // increase our performance a bit and avoid fetching the binary data unnecessarily.
 
    @Column({ nullable: true })
    public avatarId?: number;

    @Column()
    statements: string;
    
}
export default Directors;