import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail} from 'class-validator';
import { v4 as uuid } from 'uuid';

@Entity({ name: "email" })
export class Email {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @IsEmail()
    @Column()
    email: string;

    constructor() {
        this.id = uuid();
        this.email = "";
    }

}