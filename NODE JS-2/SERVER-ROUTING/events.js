const events = require('events');
const EventEmitter = events.EventEmitter;


const eventEmitter = new EventEmitter();
// publisher of the events

eventEmitter.on('test', () => {
    console.log('this is the first Test event');
})

eventEmitter.on('test', (x, y) => {
    console.log('this is the second Test event');
})

eventEmitter.on('add', (x, y) => {
    console.log('sum a+b =', x + y);
})


// Add event listeners

eventEmitter.emit('test');
eventEmitter.emit('add', 21, 15);


// Event Names

console.log(eventEmitter.eventNames());

const prod = (a, b) => {
    console.log(`the product result ${a} and ${b} is`, (a * b));
}

eventEmitter.on('product', prod);
eventEmitter.emit('product', 12, 10);

// Event mame before removing events
console.log(eventEmitter.eventNames());

eventEmitter.removeListener('product', prod)

// Event mame after removing events
console.log(eventEmitter.eventNames());



console.log(`//=====================================================//`);


const eventEmitter1 = new EventEmitter();
eventEmitter1.on('demo', ()=>{
    console.log('this is first publisher of the demo event');
})

eventEmitter1.on('demo', ()=>{
    console.log('this is second publisher of the demo event');
})

eventEmitter1.emit('demo')
eventEmitter1.emit('demo')


console.log(`//=====================================================//`);
const eventEmitter2 = new EventEmitter();
eventEmitter2.once('devil', ()=>{
    console.log('this is first publisher of the devil event');
})

eventEmitter2.once('devil', ()=>{
    console.log('this is second publisher of the devil event');
})

eventEmitter2.emit('devil')
eventEmitter2.emit('devil')