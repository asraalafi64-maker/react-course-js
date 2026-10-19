const movie="avatar";
const tickets=3;
const ticketPrice=40;
const hours=2;
const minutes=15;

const add = (a,b) => a+b;
const name=hours => hours + minutes/60;


console.log(`the movie is ${movie}`);
console.log(`the total cost of tickets is ${add(tickets,ticketPrice)}`);
console.log(`the total time of the movie is ${  (hours)} hours`);