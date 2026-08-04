import { Materiels } from "src/materiels/materiels.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/browser";


@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column({unique:true})
    email!:string;
    @Column({nullable:false})
    password!:string;
    @Column()
    nom!:string;
    @Column({type:'enum',
        enum:['admin','responsanle','opérateur','technicien'],
        default:'opérateur'})
    role!:string;
    @ManyToOne(()=>Materiels,(materiel)=>materiel.user)
    materiel!:Materiels;
}