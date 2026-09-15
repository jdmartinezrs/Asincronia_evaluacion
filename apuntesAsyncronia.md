const inventory = { sunglasses: 1900, pants: 1088, bags: 1344 };

// Write your code below: const myExecutor = (resolve, reject )=> { if (inventory.sunglasses>0){ resolve('Sunglasses order processed.') } else { reject('That item is sold out.') } }

const myPromise = new Promise (myExecutor);

const orderSunglasses=()=>{ return new Promise (myExecutor); }

let orderPromise = orderSunglasses() console.log(orderPromise);

//////// S E T TIME OUT /////////////

const usingSTO=()=>{ console.log("Hello") }

setTimeout(usingSTO, 2000)

/////////////// LÓGICA PARA CASOS DE EXITO O FALLA CON handle FUNCTIONS /////////////////

let prom = new Promise((resolve, reject) => { let num = Math.random(); if (num < .5 ){ resolve('Yay!'); } else { reject('Ohhh noooo!'); } });

const handleSuccess = (resolvedValue) => { console.log(resolvedValue); };

const handleFailure = (rejectionReason) => { console.log(rejectionReason); };

prom.then(handleSuccess, handleFailure);

/// ejemplo de invocación ///

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below: const handleSuccess = (resolved) =>{ console.log(resolved); };

const handleFailure = (unresolved) =>{ console.log(unresolved) }

checkInventory(order).then(handleSuccess, handleFailure);

///////////// an example using .catch() //////////////////

prom .then((resolvedValue) => { console.log(resolvedValue); }) .catch((rejectionReason) => { console.log(rejectionReason); });

/// otro ejemplo de catch() /////

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => { console.log(resolvedValue); };

const handleFailure = (rejectReason) => { console.log(rejectReason); };

// Write your code below: checkInventory(order).then((handleSuccess)=>{ console.log(handleSuccess); }).catch((handleFailure)=>{ console.log(handleFailure); })

////////////// composition //////////////////

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = { items: [['sunglasses', 1], ['bags', 2]], giftcardBalance: 79.82 };

checkInventory(order) .then((resolvedValueArray) => { // Write the correct return statement here: return processPayment(resolvedValueArray) }) .then((resolvedValueArray) => { // Write the correct return statement here: return shipOrder(resolvedValueArray) }) .then((successMessage) => { console.log(successMessage); }) .catch((errorMessage) => { console.log(errorMessage); });

//// correcto encadenamiento /////

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = { items: [['sunglasses', 1], ['bags', 2]], giftcardBalance: 79.82 };

// Refactor the code below:

checkInventory(order) .then((resolvedValueArray) => { return processPayment(resolvedValueArray) }) .then((resolvedValueArray) => { return shipOrder(resolvedValueArray) }) .then((successMessage) => { console.log(successMessage);
});

///////Ejemplo promise all /////

let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);

myPromises .then((arrayOfValues) => { console.log(arrayOfValues); }) .catch((rejectionReason) => { console.log(rejectionReason); });

///// promise all and chain then /////////////

const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => { console.log(Items checked: ${itemsArray}); console.log(Every item was available from the distributor. Placing order now.); };

const onReject = (rejectionReason) => { console.log(rejectionReason); };

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.')

const checkPants = checkAvailability('pants','Favorite Supply Co.')

const checkBags = checkAvailability ('bags','Favorite Supply Co.')

Promise.all([ checkSunglasses, checkPants, checkBags ]).then(onFulfill) .catch(onReject)

////////////////async await //////////////

async function announceDinner() { // Write your code below: let reolved = await brainstormDinner(); console.log(I'm going to make ${reolved} for dinner.) } announceDinner()