import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm"
import { Agreement } from "./Agreement"

@Entity()
export class Payment extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'payment_id', type: 'integer'})
    paymentId: number

    @Column({type: 'money',})
    amount: number

    @ManyToOne( () => Agreement, agreement => agreement.payments)
    @JoinColumn({name: 'agreement_id'})
    agreement: Agreement

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
