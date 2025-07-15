import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    responsible: string;

    @Column()
    status: 'pending' | 'in_progress' | 'completed';
}