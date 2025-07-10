const { EmailService } = require("../services")

const { StatusCodes } = require('http-status-codes')

async function create(req, res) {
    try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail,

        })

        return res.status(StatusCodes.OK).json(response)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }

}
module.exports = {
    create
}