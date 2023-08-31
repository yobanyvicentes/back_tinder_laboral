import { Employer } from "../entity/Employer";

export const listAllEmployer =  async (req, res) => {
    try {
        const employers = await Employer.find();
        return res.status(200).json(employers);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const createEmployer = async (req, res) => {
    try {
        const {employerId, fullName, webSite, email} = req.body;
        const employer = new Employer;
        employer.employerId = employerId;
        employer.fullName = fullName;
        employer.email = email;
        employer.webSite = webSite;
        await employer.save();
        console.log(employer)
        return res.status(200).json(employer);
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

export const getOneEmployer = async (req, res) => {
    try {
        const employer = await Employer.findOneBy({
            employerId: req.params.employerId,
        })
        return res.status(200).json(employer);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const deleteEmployer = async (req, res) => {
    try {
        const employer = await Employer.delete({
            employerId: req.params.employerId,
        })
        return res.status(200).json(employer);
    } catch (error) {
        res.status(500).send('error');
    }
}


export const updateEmployer = async (req, res) => {
    try {
        const employer = await Employer.findOneBy({
            employerId: req.params.employerId,
        });

        if (!employer) {
            return res.status(404).json({message: "employer doesn't exist"});
        }

        await Employer.update({employerId: req.params.employerId }, req.body)

        return res.status(200).json({message: "actualizado"});
    } catch (error) {
        res.status(500).send(error);
    }
}
