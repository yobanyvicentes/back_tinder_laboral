import { Router } from "express";
import { listAllApplicant, createApplicant, getOneApplicant, deleteApplicant, updateApplicant } from "../controllers/applicant";

const router = Router();

router.get('/', listAllApplicant);
router.post('/', createApplicant);
router.get('/:applicantId', getOneApplicant);
router.delete('/:applicantId', deleteApplicant);
router.put('/:applicantId', updateApplicant);

export default router;
