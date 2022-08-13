---
title: 'Javascript Notes'
date: '2022-08-09'
id: js-notes
---

# Javascript Notes

## JS References For Future Me:
Just keeping some notes for my squirrel brain. Most of these notes so far are from freeCodeAcademy.

---

### Parse Integer

The parseInt() function parses a string and returns an integer. Here's an example:

```javascript
const a = parseInt("007");
```
The above function converts the string 007 to the integer 7. If the first character in the string can't be converted into a number, then it returns NaN.

---

### Conditional (Ternary) Operator
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

The following function uses an if/else statement to check a condition:

```javascript
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

This can be re-written using the conditional operator:

``` javascript
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

Can be applied with multiple conditions:

```javascript
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```
---

### Recusive Functions (uhguhskdjfh)

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```
The value [1, 2, 3, 4, 5] will be displayed in the console.

