import { Router } from "express";
import { listAllOffer, createOffer, getOneOffer, deleteOffer, updateOffer } from "../controllers/offer";

const router = Router();

router.get('/', listAllOffer);
router.post('/', createOffer);
router.get('/:offerId', getOneOffer);
router.delete('/:offerId', deleteOffer);
router.put('/:offerId', updateOffer);

export default router;
