import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm"
import { Employer } from "./Employer"
import { Agreement } from "./Agreement"

@Entity()
export class Offer extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'offer_id', type: 'integer'})
    offerId: number

    @Column({type: 'varchar', length: 35})
    rol: string

    @Column({name: 'contract_type', type: 'varchar', length: 30})
    contractType: string

    @Column({type: 'varchar', length: 300})
    description: string

    @Column({type: 'money',})
    payment: number

    @ManyToOne( () => Employer, employer => employer.offers)
    @JoinColumn({name: 'employer_id'})
    employer: Employer

    @OneToMany( () => Agreement, agreement => agreement.offer)
    agreements: Agreement[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
