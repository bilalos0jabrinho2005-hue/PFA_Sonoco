import { Materiels } from "src/materiels/materiels.entity";
import { Column,CreateDateColumn,Entity,ManyToOne,PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Pannes{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    description!:string;
    @CreateDateColumn()
    date!:Date;
    @Column({type:'enum',
        enum:['S','M','C'],
        default:'S'
    })
    priorite!:string;
    @Column({type:'enum',
        enum:['en_panne','en_réparation'],
        default:'en_panne'
    })
    statut!:string;
    @ManyToOne(()=>Materiels,(materiel)=>materiel.panne)
    materiel!:Materiels;
    

}