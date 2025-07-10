const { TicketRepository } = require("../repositories")

const { EMAILER } = require("../config")

const TicketRepo = new TicketRepository();

async function sendEmail(mailFrom, mailTo, subject, text) {
    try {

        const response = await EMAILER.sendEmail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            text: text
        })

        return response;
    } catch (error) {
        console.log(error)
    }

}


async function createTicket(data) {
    try {
        const response = await TicketRepo.createRecoreds(data);
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function getPandingEmail() {
    try {
        const response = await TicketRepo.getPendingTickets();
        return response;
    } catch (error) {

        console.log(error)
        throw error;
    }
}
module.exports = {
    sendEmail,
    createTicket
}