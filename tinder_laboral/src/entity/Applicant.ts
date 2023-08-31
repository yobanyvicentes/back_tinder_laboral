import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Agreement } from "./Agreement"

@Entity()
export class Applicant extends BaseEntity {
    @PrimaryColumn({name: 'applicant_id', type: 'integer', unique: true})
    applicantId: number

    @Column({name: 'given_name', type: 'varchar', length: 35})
    givenName: string

    @Column({type: 'varchar', length: 30})
    surname: string

    @Column({type: 'varchar', length: 40, unique: true})
    email: string

    @Column({type: 'enum', enum: ['male', 'female', 'other']})
    gender: string

    @Column({type: 'simple-array'})
    skills: string[]

    @OneToMany( () => Agreement, agreement => agreement.applicant)
    agreements: Agreement[]

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
}
