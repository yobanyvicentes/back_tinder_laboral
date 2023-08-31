import { Payment } from "../entity/Payment";

export const listAllPayment =  async (req, res) => {
    try {
        const payments = await Payment.find();
        return res.status(200).json(payments);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const createPayment = async (req, res) => {
    try {
        const {paymentId, amount, agreement} = req.body;
        const payment = new Payment;
        payment.paymentId = paymentId;
        payment.amount = amount;
        payment.agreement = agreement;
        const paymentSaved = await payment.save();
        console.log(payment)
        return res.status(200).json(paymentSaved);
    } catch (error) {
        console.log(error)
        res.status(500).send('error');
    }
}

export const getOnePayment = async (req, res) => {
    try {
        const payment = await Payment.findOneBy({
            paymentId: req.params.paymentId,
        })
        return res.status(200).json(payment);
    } catch (error) {
        res.status(500).send('error');
    }
}

export const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.delete({
            paymentId: req.params.paymentId,
        })
        return res.status(200).json(payment);
    } catch (error) {
        res.status(500).send('error');
    }
}


export const updatePayment = async (req, res) => {
    try {
        const payment = await Payment.findOneBy({
            paymentId: req.params.paymentId,
        });

        if (!payment) {
            return res.status(404).json({message: "payment doesn't exist"});
        }

        await Payment.update({paymentId: req.params.paymentId }, req.body)

        return res.status(200).json({message: "actualizado"});
    } catch (error) {
        res.status(500).send(error);
    }
}
