function solve(tickets, criteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        };
    };

    let ticketsDB = [];

    for(let ticket of tickets) {
        let info = ticket.split('|');
        let newTicket = new Ticket(info[0], +info[1], info[2]);
        ticketsDB.push(newTicket);
    };

    switch (criteria) {
        case 'destination':
            return ticketsDB.sort((a, b) => a.destination.localeCompare(b.destination));

        case 'price':
            return ticketsDB.sort((a, b) => a.price - b.price);

        case 'status':
            return ticketsDB.sort((a, b) => a.status.localeCompare(b.status));
    }
    return ticketsDB;
};

solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);