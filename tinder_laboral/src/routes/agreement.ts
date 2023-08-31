import { Router } from "express";
import { listAllAgreement, createAgreement, getOneAgreement, deleteAgreement, updateAgreement } from "../controllers/agreement";

const router = Router();

router.get('/', listAllAgreement);
router.post('/', createAgreement);
router.get('/:agreementId', getOneAgreement);
router.delete('/:agreementId', deleteAgreement);
router.put('/:agreementId', updateAgreement);

export default router;
