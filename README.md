# TypeScript

## What is TypeScript?

TypeScript is a superset of JavaScript. (It is a language building up on JavaScript)

It adds new features and advantages to JavaScript, but browsers can not execute it. So we need to compile TypeScript to JavaScript.

-   TypeScript adds `types` to JavaScript. For example we can prevent semantic errors like this with TypeScript:

    ```javascript
    function add(num1, num2) {
        return num1 + num2;
    }

    console.log(add("1", "14"));
    ```

    Will result with:

    ```bash
    `114`
    ```

    We can add type checking with JavaScript but it is much harder and complex. For example:

    ```javascript
    function add(num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2;
        } else {
            return +num1 + +num2;
        }
    }
    ```

    But we can do it in a much cleaner & simpler way with TypeScript:

    ```typescript
    function add(num1: number, num2: number) {
        return num1 + num2;
    }
    ```

    IDE's can pick up on these types and give us better auto-completion and built-in errors before we even compile the code.

---

-   We can use modern JavaScript features like ES6 Syntax and still produce and ship code that works in older browsers as well.

---

-   TypeScript adds features like `interfaces` and `generics`. These are features which can't be compiled to JavaScript. But since they are features that only help us during development they don't have to be compiled.

---

-   TypeScript adds Meta-Programming features like `decorators`.

---

-   TypeScript is also highly configurable. We can change compiler settings to make it stricter or looser.

## How to use TypeScript?

### Installing TypeScript

We can install TypeScript with:

```bash
sudo npm install -g typescript
```

### Compiling TypeScript

We can compile TypeScript to JavaScript with:

```bash
tsc app.ts
```

### TypeScript IDE

A frequently used IDE for TypeScript is [Visual Studio Code](https://code.visualstudio.com/)

Popular VSCode extensions for TypeScript development are as follows:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
-   [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Basic TypeScript Project Setup

We can create a TypeScript project with

`npm init`

We can create a development server with `lite-server`. First we have to install it like this:

```bash
npm install --save-dev lite-server
```

And then we can edit the `scripts` part of our `package.json` file like this:

```javascript
{
  "scripts": {
    "dev-start":"lite-server"
  }
}
```

When we run that script, the `lite-server` will server the `index.html` file which is in the same directory with `package.json` and watch for changes in our development directory. So we don't have to reload our browser everytime.

Later on we will use `webpack` for this.

## TypeScript Basics

### Core Types

JavaScript and TypeScript has some common data types. They are `number`, `string` and `boolean`. Here are some TypeScript examples using just these primitive data types.

```typescript
function sum(n1: number, n2: number) {
    return n1 + n2;
}

function concatenate(str1: string, str2: string) {
    return str1 + str2;
}
```

### Type Assignment & Type Inference

We can assign types to constants and variables in TypeScript, here is an example:

```typescript
let Person: {
    name: string;
    age: number;
    hobbies: string[];
};

Person = {
    name: "Yasin",
    age: 19,
    hobbies: ["jogging", "cooking"],
};
```

### TypeScript Data Types

TypeScript adds some data types to the javascript. Some of them are tuples, enums and unions.
For example:

```typescript
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

Person = {
    name: "Yasin",
    age: 19,
    hobbies: ["jogging", "cooking"],
    role: Role.ADMIN,
};

function combine(input1: number | string, input2: number | string) {
    let result;
    if (typeof input1 === number && typeof input2 === number) {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
```

We can also define values for unions or variables. For example the following function will accept only two parameters and they are `foo` and `bar`.

```typescript
function foo(param: "foo" | "bar") {
    return param;
}
```

## TypeScript Compiler & Configuration

## Next Generation JavaScript

## Classes & Interfaces

## Advanced Types & TypeScript Features

## Generics

## Decorators

## Example Project

## Namespaces & Modules

## Webpack & TypeScript

## Third-Party Libraries & TypeScript
