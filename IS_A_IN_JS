//Create a Person Function , Having Id, Name, Age, City
//Create a Student Function , Having Marks, Grade, College
//Create a Employee Function. Having Salary, Bonus, CompanyName
//Make a RelationShip b/w Employee , Student and Person
//BY Using proto​​ and prototype
//Hint : Use Call 

//Think about how Chain RelationShip (Inheritance) and One Function Constructor call another Function Constructor like super constructor call.
// Define the Person constructor function
function Person(id, name, age, city) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.city = city;
}

// Define the Student constructor function that inherits from Person
function Student(id, name, age, city, marks, grade, college) {
  // Call the Person constructor using call() to set the Person properties
  Person.call(this, id, name, age, city);
  this.marks = marks;
  this.grade = grade;
  this.college = college;
}

// Set up the prototype chain for inheritance
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Define the Employee constructor function that inherits from Person
function Employee(id, name, age, city, salary, bonus, companyName) {
  // Call the Person constructor using call() to set the Person properties
  Person.call(this, id, name, age, city);
  this.salary = salary;
  this.bonus = bonus;
  this.companyName = companyName;
}

// Set up the prototype chain for inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Now you can create instances of Person, Student, and Employee
const person = new Person(1, "John Doe", 30, "New York");
const student = new Student(2, "Alice Smith", 20, "Los Angeles", 95, "A", "ABC College");
const employee = new Employee(3, "Bob Johnson", 35, "San Francisco", 60000, 5000, "XYZ Inc");

// Test the objects
console.log(person);
console.log(student);
console.log(employee);
