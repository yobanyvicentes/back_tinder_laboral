import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm"
import { Offer } from "./Offer"
import { Applicant } from "./Applicant"
import { Payment } from "./Payment"

@Entity()
export class Agreement extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'agreement_id', type: 'integer'})
    agreementId: number

    @Column({type: 'date'})
    startDate: Date

    @Column({name: 'contract_type', type: 'date'})
    endDate: Date

    @ManyToOne( () => Offer, offer => offer.agreements)
    @JoinColumn({name: 'offer_id'})
    offer: Offer

    @ManyToOne( () => Applicant, applicant => applicant.agreements)
    @JoinColumn({name: 'applicant_id'})
    applicant: Applicant

    @OneToMany( () => Payment, payment => payment.agreement)
    payments: Payment[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
