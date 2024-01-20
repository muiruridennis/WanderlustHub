import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, OneToOne, ManyToMany, OneToMany } from "typeorm"
import Tour from "../../tour/entity/tour.entity";
import LocalFile from "../../local-file/entity/localFile.entity"

@Entity()
class Destination {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'decimal', precision: 3, scale: 1, nullable: true })
    rating: number;

    @Column()
    contact: string;


    @OneToMany(() => Tour, (tour) => tour.destination)
    tours: Tour[];

   
    @JoinColumn({ name: 'imageId' })
    @OneToOne(
        () => LocalFile,
        {
            nullable: true
        }
    )
    public image?: LocalFile;

    @Column({ nullable: true })
    public imageId?: number;
}
export default Destination;