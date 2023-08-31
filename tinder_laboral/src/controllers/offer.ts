import { Offer } from "../entity/Offer";

export const listAllOffer =  async (req, res) => {
    try {
        const offers = await Offer.find();
        return res.status(200).json(offers);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const createOffer = async (req, res) => {
    try {
        const {offerId, rol, contractType, description, payment, employer} = req.body;
        const offer = new Offer;
        offer.offerId = offerId;
        offer.rol = rol;
        offer.contractType = contractType;
        offer.description = description;
        offer.payment = payment;
        offer.employer = employer;
        const offerSaved = await offer.save();
        console.log(offer)
        return res.status(200).json(offerSaved);
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

export const getOneOffer = async (req, res) => {
    try {
        const offer = await Offer.findOneBy({
            offerId: req.params.offerId,
        })
        return res.status(200).json(offer);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const deleteOffer = async (req, res) => {
    try {
        const offer = await Offer.delete({
            offerId: req.params.offerId,
        })
        return res.status(200).json(offer);
    } catch (error) {
        res.status(500).send('error');
    }
}


export const updateOffer = async (req, res) => {
    try {
        const offer = await Offer.findOneBy({
            offerId: req.params.offerId,
        });

        if (!offer) {
            return res.status(404).json({message: "offer doesn't exist"});
        }

        await Offer.update({offerId: req.params.offerId }, req.body)

        return res.status(200).json({message: "actualizado"});
    } catch (error) {
        res.status(500).send(error);
    }
}
