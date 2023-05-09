import { FileEntity } from "src/files/entities/files.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity('users')
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    fullName: string;

    @OneToMany(() => FileEntity, file => file.user)
    files: FileEntity[];
}

