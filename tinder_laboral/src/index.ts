import { AppDataSource } from "./data-source";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import employerRouter from './routes/employer';
import applicantRouter from './routes/applicant';
import offerRouter from './routes/offer';
import agreementRouter from './routes/agreement';
import paymentRouter from './routes/payment';

AppDataSource.initialize().then(() => {
    const app = express();
    const appPort = 8065;
    const dbPort = 5432;
    dotenv.config();
    app.use(cors());
    app.use(express.json());
    app.use('/employer', employerRouter);
    app.use('/applicant', applicantRouter);
    app.use('/offer', offerRouter);
    app.use('/agreement', agreementRouter);
    app.use('/payment', paymentRouter);


    app.listen(appPort, () => {
      console.log(`app listening on port ${appPort}`);
      console.log(`db listening on port ${dbPort}`);
    });
  }
).catch(error => console.log(error))
