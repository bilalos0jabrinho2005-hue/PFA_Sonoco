import { TypeOrmModule } from "@nestjs/typeorm";
import { Materiels } from "src/materiels/materiels.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Notifications{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    description!:string;
    @Column({type:'enum',
        enum:['panne','résolution'],
    default:'panne'})
    type!:string;
    @CreateDateColumn()
    date!:Date;
    @ManyToOne(()=>Materiels,(materiel)=>materiel.notification)
    materiel!:Materiels;
}