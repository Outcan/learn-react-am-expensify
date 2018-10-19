// Object destructuring

/*const person = {
  name: "Krimper",
  age: 55,
  location: {
    city: "Reading",
    temp: 17
  }
};

const { name: firstname = "Rigidio", age } = person;
console.log(`${firstname} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature}deg in ${city}.`);
}

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: { name: "Penguin" }
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName); */

// Array destructuring

const address = ["171 Cranbury Road", "Reading", "Berkshire", "RG30 2XB"];

const [, city = "London", county] = address;

console.log(`You are in ${city} in ${county}.`);

const item = ["coffee (iced)", "$2.00", "$2.50", "$2.75"];

const [product, , , price = "$3.00"] = item;

console.log(`A medium ${product} costs ${price}.`);
