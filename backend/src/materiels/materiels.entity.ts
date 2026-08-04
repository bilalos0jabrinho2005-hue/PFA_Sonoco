import { Notifications } from "src/notifications/notifications.entity";
import { Pannes } from "src/pannes/pannes.entity";
import { Users } from "src/users/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materiels{
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    nom!:string;
    @Column()
    description!:string;
    @Column({type:'enum',
        enum:['en_fonctionnement','en_panne','en_réparation'],
        default:'en_fonctionnement'
    })
    statut!:string;

    @OneToMany(()=>Pannes,(panne)=>panne.materiel)
    panne!:Pannes[];
    
    @OneToMany(()=>Users,(user)=>user.materiel)
    user!:Users[];

    @OneToMany(()=>Notifications,(notification)=>notification.materiel)
    notification!:Notifications[];
     
}