import { Applicant } from "../entity/Applicant";

export const listAllApplicant =  async (req, res) => {
    try {
        const applicants = await Applicant.find();
        return res.status(200).json(applicants);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const createApplicant = async (req, res) => {
    try {
        const {applicantId, givenName, surname, email, gender, skills} = req.body;
        const applicant = new Applicant;
        applicant.applicantId = applicantId;
        applicant.givenName = givenName;
        applicant.surname = surname;
        applicant.email = email;
        applicant.gender = gender;
        applicant.skills = skills;
        await applicant.save();
        console.log(applicant)
        return res.status(200).json(applicant);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const getOneApplicant = async (req, res) => {
    try {
        const applicant = await Applicant.findOneBy({
            applicantId: req.params.applicantId,
        })
        return res.status(200).json(applicant);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const deleteApplicant = async (req, res) => {
    try {
        const applicant = await Applicant.delete({
            applicantId: req.params.applicantId,
        })
        return res.status(200).json(applicant);
    } catch (error) {
        res.status(500).send('error');
    }
}


export const updateApplicant = async (req, res) => {
    try {
        const applicant = await Applicant.findOneBy({
            applicantId: req.params.applicantId,
        });

        if (!applicant) {
            return res.status(404).json({message: "applicant doesn't exist"});
        }

        await Applicant.update({applicantId: req.params.applicantId }, req.body)

        return res.status(200).json({message: "actualizado"});
    } catch (error) {
        res.status(500).send(error);
    }
}
