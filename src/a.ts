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

function filteredUsers(users: UserA[]) {
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

// Enums in TS
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
// use type to handle this
type InputType = "up" | "down" | "left" | "right";

function doSomething(keyPressed: InputType) {
	if (keyPressed == "up") {
		// do something.
	}
	//..
}
doSomething("up");
doSomething("down");
// doSomething("random"); // Worng

// use enums - define a set of named constants
// The final value stored at runtime is still a number (0, 1, 2, 3).
enum Direction {
	Up, // 1
	Down, // 2
	Left, // 3
	Right, // 4
}
// enum Direction {
// 	Up = "up", // "up"
// 	Down = "down", // "down"
// 	Left = "left", // "left"
// 	Right = "right", // "right"
// }
// enum Direction {
// 	Up = 1, // 1 -> implicityly assign value
// 	Down, // 2
// 	Left, // 3
// 	Right, // 4
// }
function doSomethingE(keyPressed: Direction) {
	if (keyPressed == Direction.Up) {
		// do something.
	}
	//..
}
doSomethingE(Direction.Up);
doSomethingE(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);

// In Express.js use enums values
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/"", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
// 		res.status(ResponseStatus.Success).json({});
// })
