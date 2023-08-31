import { Agreement } from "../entity/Agreement";

export const listAllAgreement =  async (req, res) => {
    try {
        const agreements = await Agreement.find();
        return res.status(200).json(agreements);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const createAgreement = async (req, res) => {
    try {
        const {agreementId, startDate, endDate, offer, applicant} = req.body;
        const agreement = new Agreement;
        agreement.agreementId = agreementId;
        agreement.startDate = startDate;
        agreement.endDate = endDate;
        agreement.offer = offer;
        agreement.applicant = applicant;
        const agreementSaved = await agreement.save();
        console.log(agreement)
        return res.status(200).json(agreementSaved);
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

export const getOneAgreement = async (req, res) => {
    try {
        const agreement = await Agreement.findOneBy({
            agreementId: req.params.agreementId,
        })
        return res.status(200).json(agreement);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const deleteAgreement = async (req, res) => {
    try {
        const agreement = await Agreement.delete({
            agreementId: req.params.agreementId,
        })
        return res.status(200).json(agreement);
    } catch (error) {
        res.status(500).send('error');
    }
}


export const updateAgreement = async (req, res) => {
    try {
        const agreement = await Agreement.findOneBy({
            agreementId: req.params.agreementId,
        });

        if (!agreement) {
            return res.status(404).json({message: "agreement doesn't exist"});
        }

        await Agreement.update({agreementId: req.params.agreementId }, req.body)

        return res.status(200).json({message: "actualizado"});
    } catch (error) {
        res.status(500).send(error);
    }
}
