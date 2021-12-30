// objeto global de mi aplicacion
var COLEGIO = COLEGIO || {};
COLEGIO.students=[];
// modelo de negocio
// classes
// class Person
function Person(first, last, age, gender,id) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.id = id;
}
//metodos
Person.prototype.greeting = function () {
    console.log(`Hi I'm ${this.name.first} ${this.name.last}.`);
};
// class Student
// Define the Student constructor
function Student(infoArray,grade,state=false) {
    // Call the parent constructor, making sure (using Function#call)
    // that "this" is set correctly during the call
    Person.call(this, ...infoArray);

    // Initialize our Student-specific properties
    this.subjects = [];
    this.grade = grade;
    this.state = state;
    // console.log(`Hello ${this.name.first} ${this.name.last} you gender is ${this.gender} and id is ${this.id}`);
};
// debido a que el prototipado va a contener las funciones por defecto, el prototipo de presona que contiene
// persona.prototype.greeting estará en el prototype de Student(student.prototype)
Student.prototype = Object.create(Person.prototype);
// Set the "constructor" property to refer to Student
Student.prototype.constructor = Student;
// metodos
function Teacher(infoArray){
    Person.call(this, ...infoArray);
    // grade will contain all the grade the one teacher dictates
    this.grade =[];
}
Teacher.prototype = Object.create(Person.prototype);
// Set the "constructor" property to refer to Student
Teacher.prototype.constructor = Teacher;

function Subject(ns){
    this.nameSubject = ns
    this.teachers = [];
}
//************** */ creando colegio *********************
const student1 = new Student(['Kevin','Portocarrero',14,'M',2221],9);
const student2 = new Student(['Faisury','Mondragon',12,'F',2222],7);
const teJose = new Teacher(['Jose','Sanchez',25,'M',1111]);
const teJulio = new Teacher(['Julio','Riascos',32,'M',1112]);
const teAnderson = new Teacher(['Anderson','Toro',28,'M',1113]);
const subInformatica = new Subject('informática');
const subIngles = new Subject('Ingles');
subInformatica.teachers.push(teJose,teJulio);
subIngles.teachers.push(teAnderson);
// asignar las materias que ven cada estudiante
assignSubject(student1,subInformatica);
assignSubject(student1,subIngles);
assignSubject(student2,subInformatica);
function assignSubject(student, subject) {
    
    if (student.state===true) {
        student.subjects.push([subject.nameSubject, subject.teachers[0]]);
    } else {
        switch (student.grade) {
            case 9:
                student.subjects.push([subject.nameSubject, subject.teachers[0]]);
                break;
            case 7:
                student.subjects.push([subject.nameSubject, subject.teachers[1]]);
                break;
    
        } 
        student.state = true;
        COLEGIO.students.push(student);
    }
   
   
}
// mostrar todos los estudiantes con sus respectivas materias
// console.log(COLEGIO.students[1].name);
COLEGIO.students.forEach(function (el){
    console.log(el);
})



