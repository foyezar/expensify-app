/*------------------------------------ Object Destructing ------------------------------------------*/

// const person = {
//   age: 24,
//   location: {
//     city: 'Dhaka',
//     temp: 30
//   }
// };
//
// const { name: firstname = 'Foyez', age = 20 } = person;
// console.log(`${firstname} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }
//
// const book = {
//   title: 'Ege is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);
// console.log('------------------------------------');

/*--------------------------------------- Array Destructing -----------------------------------------------------*/
const address = ['1299 S Juniper Street', 'Philadelphis', 'Pemsylvanis', '1947'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const mail = ['Surikara', ['Gunabati', 'Chauddagram'], 'Comilla'];
const [village, [, thana]] = mail;
console.log(thana);