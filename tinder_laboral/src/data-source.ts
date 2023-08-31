import "reflect-metadata"
import { DataSource } from "typeorm"
import { Employer } from "./entity/Employer"
import { Applicant } from "./entity/Applicant"
import { Offer } from "./entity/Offer"
import { Agreement } from "./entity/Agreement"
import { Payment } from "./entity/Payment"

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  "localhost",
    port: 5432,
    username: "postgres",
    password: "1111",
    database: "labor_tinder",
    synchronize: true,
    logging: false,
    entities: [Employer, Applicant, Offer, Agreement, Payment],
    migrations: [],
    subscribers: [],
})


