const person = {};
Object.defineProperty(person, "name", {
    configurable: true,
    writable: false,
    value: "Nicholas"
});
person.name = "carl";
console.log(person.name);
delete person.name;
console.log(person.name);