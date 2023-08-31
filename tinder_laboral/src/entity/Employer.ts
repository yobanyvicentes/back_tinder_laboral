import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Offer } from "./Offer"
import { type } from "os"

@Entity({name: 'employer'})
export class Employer extends BaseEntity {
    @PrimaryColumn({name: 'employer_id', type: 'integer', unique: true})
    employerId: number

    @Column({name: 'full_name', type: 'varchar', length: 45})
    fullName: string

    @Column({name: 'web_site', type: 'varchar', length: 40})
    webSite: string

    @Column({type: 'varchar', length: 40, unique: true})
    email: string

    @OneToMany((type) => Offer, offer => offer.employer)
    offers: Offer[]

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date
}
