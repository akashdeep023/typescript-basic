# TypeScript Basic

## Strongly typed vs loosely typed

The terms strongly typed and loosely typed refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.

| Strongly typed languages             | Loosely typed languages                  |
| ------------------------------------ | ---------------------------------------- |
| Examples - Java, C++, C, Rust        | Examples - Python, Javascript, Perl, php |
| Lesser runtime errors                | Easy to write code                       |
| Stricter codebase                    | Fast to bootstrap                        |
| Easy to catch errors at compile time | Low learning curve                       |

### Code doesn’t work ❌

```cpp
#include <iostream>
int main() {
  int number = 10;
  number = "text";
  return 0;
}
```

### Code does work ✅

```ts
function main() {
	let number = 10;
	number = "text";
	return number;
}
```

> People realised that javascript is a very power language, but lacks types. `Typescript` was introduced as a new language to add `types` on top of javascript.

## What is typescript?

TypeScript is a programming language developed and maintained by Microsoft.  
It is a strict `syntactical superset` of JavaScript and adds optional static typing to the language.

```
         _________________________
        |                         |
        |   TypeScript            |
        |           ____________  |
        |          |            | |
        |          | JavaScript | |
        |          |____________| |
        |_________________________|

```

### Where/How does typescript code run?

Typescript code never runs in your browser. Your browser can only understand `javascript`.

1. Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
2. Typescript is something that compiles down to javascript
3. When typescript is compiled down to javascript, you get `type checking `(similar to C++). If there is an error, the conversion to Javascript fails.

```
                                      _________
                                     |         |
  ____________        ____________  /| Browser |
 |            |      |            |/ |_________|
 | JavaScript |-TSC->| JavaScript |   _________
 |____________|      |____________|\ |         |
                                    \| Node.js |
                                     |_________|

```

### Typescript compiler

`tsc` is the official typescript compiler that you can use to convert `Typescript` code into `Javascript`  
There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are -

1. esbuild
2. swc

## Typescript Node.js application locally on our machines

### Step 1 - Install tsc/typescript globally

```bash
npm install -g typescript
```

### Step 2 - Initialize an empty Node.js project with typescript

```bash
mkdir typescript-basic
cd typescript-basic
npm init -y
npx tsc --init
```

> These commands should initialize two files in your project

### Step 3 - Create a a.ts file

```bash
const x: number = 1;
console.log(x);
```

### Step 4 - Compile the ts file to js file

```bash
tsc -b
```

### Step 5 - Run ts file using Node.js

```bash
node a.ts
```

## Basic Types in TypeScript

Typescript provides you some basic types  
`number`, `string`, `boolean`, `null`, `undefined`.

## The tsconfig file

The tsconfig file has a bunch of options that you can change to change the compilation process.

1. target
    - The `target` option in a `tsconfig.json` file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
    - To try it out, try compiling the following code for target being `ES5` and `es2020`

```ts
const greet = (name: string) => `Hello, ${name}!`;
```

```js
// Output for ES5
"use strict";
var greet = function (name) {
	return "Hello, ".concat(name, "!");
};
```

```js
// Output for ES2020
"use strict";
const greet = (name) => `Hello, ${name}!`;
```

2. rootDir

    - Where should the compiler look for `.ts` files. Good practise is for this to be the `src` folder

3. outDir

    - Where should the compiler look for spit out the `.js` files.

4. noImplicitAny
    - Try enabling it and see the compilation errors on the following code -

```js
const greet = (name) => `Hello, ${name}!`;
```

Then try disabling it

5. removeComments
    - Weather or not to include comments in the final `js` file

## What are interfaces

How can you assign types to objects? For example, a user object that looks like this -

```ts
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}
```

> To assign a type to the `user` object, you can use `interfaces`

```ts
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```

## Implementing interfaces

> Interfaces have another special property. You can implement interfaces as a class.
> Let’s say you have an personinterface -

```ts
interface Person {
	name: string;
	age: number;
	greet(phrase: string): void;
}
```

> You can create a class which implements this interface.
> This is useful since now you can create multiple variants of a person (Manager, CEO …)

```ts
class Employee implements Person {
	name: string;
	age: number;

	constructor(n: string, a: number) {
		this.name = n;
		this.age = a;
	}

	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	}
}
```

## What are types?

Very similar to `interfaces` , types let you `aggregate` data together.

```ts
type User = {
	firstName: string;
	lastName: string;
	age: number;
};
```

### Unions

```ts
type StringOrNumber = string | number;
```

> You can not do this using `interfaces`

### Intersection

```ts
type Employee = {
	name: string;
	startDate: Date;
};

interface Manager = {
	name: string;
	department: string;
};

type TeamLead = Employee & Manager;
```

> You can not do this using interfaces

## Arrays in TS

If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type

```ts
type NumberArr = number[];
```

## Enums

Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.

```ts
enum Direction {
	Up,
	Down,
	Left,
	Right,
}
```
