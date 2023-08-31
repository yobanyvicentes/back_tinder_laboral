import { Router } from "express";
import { listAllEmployer, createEmployer, getOneEmployer, deleteEmployer, updateEmployer } from "../controllers/employer";

const router = Router();

router.get('/', listAllEmployer);
router.post('/', createEmployer);
router.get('/:employerId', getOneEmployer);
router.delete('/:employerId', deleteEmployer);
router.put('/:employerId', updateEmployer);

export default router;
