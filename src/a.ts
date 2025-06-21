// Define number type of x
const x: number = 1;
console.log(x);

// Try assigning x to a string
// Type 'string' is not assignable to type 'number'.
// x = "jack";

// How to give types to arguments of a function
function greet(firstName: string) {
	console.log("Hello " + firstName);
}
greet("jack");

// How to assign a return type to a function
function sum(a: number, b: number): number {
	return a + b;
}
console.log(sum(2, 3));

function isLegal(age: number) {
	if (age > 18) {
		return true;
	} else {
		return false;
	}
}
console.log(isLegal(2));

// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
	setTimeout(fn, 1000);
}
delayedCall(function () {
	console.log("hi there");
});

// Interface in Ts
//  Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

// user interface
interface User {
	firstName: string;
	lastName: string;
	email?: string; // optional
	age: number;
}
function isLegalUser(user: User) {
	if (user.age > 18) {
		return true;
	} else {
		return false;
	}
}
function greetUser(user: User) {
	console.log("Hi there " + user.firstName + " " + user.lastName);
}
const user = {
	firstName: "Jack",
	lastName: "Ji",
	email: "jack@demo.com",
	age: 22,
};
const lUser = isLegalUser(user);
console.log("Legal user : " + lUser);
greetUser(user);

// Create a React component that takes todos as an input and renders them

// Todo.tsx
// interface TodoType {
// 	title: string;
// 	description: string;
// 	done: boolean;
// }

// function Todo(props: TodoInput) {
// 	return (
// 		<div>
// 			<h1>{props.title}</h1>
// 			<h2>{props.description}</h2>
// 		</div>
// 	);
// }

// Type in Ts
// type
type User1 = {
	firstName: string;
	lastName: string;
	age: number;
};
// interface
interface User2 {
	firstName: string;
	lastName: string;
	age: number;
}

// Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
	console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202

// What if you want to create a type that has every property of multiple types/ interfaces

type Employee = {
	name: string;
	startDate: Date;
};

interface Manager {
	name: string;
	department: string;
}

// interface TeamLeadI = Employee & Manager; Wrong
type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
	name: "harkirat",
	startDate: new Date(),
	department: "Software developer",
};

// Arrays in Ts
// Given an array of positive integers as input, return the maximum value in the array

type NumberArr = number[];
// arr: number[] or arr: NumberArr
function maxValue(arr: NumberArr) {
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

console.log(maxValue([1, 2, 3]));

// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface UserA {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User[]) {
	return users.filter((x) => x.age >= 18);
}

console.log(
	filteredUsers([
		{
			firstName: "harkirat",
			lastName: "Singh",
			age: 21,
		},
		{
			firstName: "Raman",
			lastName: "Singh",
			age: 16,
		},
	])
);
