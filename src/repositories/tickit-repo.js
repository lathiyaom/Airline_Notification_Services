const CrudRepository = require("./crud-repo")

const { Ticket } = require("../models")

class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket)
    }

    async getPendingTickets() {
        const response = await Ticket.findAll({
            where: {
                status: "PANDING"
            }
        })

        return response;
    }
}

module.exports = {
    TicketRepository
}