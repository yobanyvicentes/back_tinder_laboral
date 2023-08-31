import { Router } from "express";
import { listAllPayment, createPayment, getOnePayment, deletePayment, updatePayment } from "../controllers/payment";

const router = Router();

router.get('/', listAllPayment);
router.post('/', createPayment);
router.get('/:paymentId', getOnePayment);
router.delete('/:paymentId', deletePayment);
router.put('/:paymentId', updatePayment);

export default router;
