
// task 1
const multiplyValues = (obj: Record<string, number>, n: number) => {
  for (const key in obj) {
    obj[key] *= n;
  }
  return obj;
}

const obj = { a: 2, b: 3, c: 4 };
const n = 3;

const res = multiplyValues(obj, n);
console.log(res);

// task 2
function countNumbersInString(str: string): number {
  let count = 0;

  for (const char of str) {
    if (!isNaN(Number(char)) && char !== ' ') {
      count++;
    }
  }

  return count;
}

const input = "Hello 123, it's 2024!";
const result = countNumbersInString(input);
console.log(result);

// task 3

const sumToArray = (...nums: number[]): number[] => {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);
  return String(sum).split('').map(Number);
}

const result2 = sumToArray(1, 22, 3); // [2, 6]
console.log(result2);

// task 4
const countWordsWithA = (str: string): number => {
  return str.split(' ').filter(word => word.includes('a') || word.includes('A')).length;
}

const input2 = "This is a sample string with a few words containing A.";
const result3 = countWordsWithA(input2);
console.log(result3);

// task 5
const findPowerOfTwo = (n: number): number => {
  let k = 0;

  while (n > 1) {
    n /= 2;
    k++;
  }

  return k;
}

const input3 = 8;
const k = findPowerOfTwo(input3);
console.log(k);

// task 6

const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O'tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  }
];

const checkBooksReadStatus = (books: { title: string, author: string, read: boolean }[]): void => {
  books.forEach((book, index) => {
    const status = book.read ? "o'qilgan" : "o'qilmagan";
    const message = `${index + 1}. ${book.author} ning "${book.title}" kitobi ${status}`;
    console.log(message);
  });
}

checkBooksReadStatus(books);

// task 7
const stringsToLengths = (arr: string[]): Record<string, number> => {
  const result: Record<string, number> = {};

  arr.forEach(str => {
    result[str] = str.length;
  });

  return result;
}

const input4 = ["text", "world", "laptop"];
const output = stringsToLengths(input4);
console.log(output);

// task 8
const multiplyValues2 = (obj: Record<string, number>, n: number): Record<string, number> => {
  const result: Record<string, number> = {};

  for (const key in obj) {
    result[key] = obj[key] * n;
  }

  return result;
}

const obj2 = { a: 2, b: 3, c: 4 };
const n2 = 3;
const res4 = multiplyValues2(obj2, n2);
console.log(res4);


// task 9 

const getLevel = (n: number): number[] => {
  const result: number[] = [];

  for (let i = 1; i <= n; i++) {
    result.push(2 ** i); // 2 ning i darajasi
  }

  return result;
}

const n1 = 4;
const result1 = getLevel(n1);
console.log(result1);

const n3 = 5;
const result5 = getLevel(n3);
console.log(result5);

// task 10 

const countWords = (arr: string[]): Record<string, number> => {
  const result: Record<string, number> = {};

  arr.forEach(word => {
    result[word] = (result[word] || 0) + 1; 
  });

  return result;
}

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const output5 = countWords(animals);
console.log(output5); 


// task 11

const squareElements = (arr: number[]): number[] => {
  return arr.map(num => num ** 2); 
}

const input6 = [1, 2, 3, 4, 5];
const output6 = squareElements(input6);
console.log(output6); 

// task 12

const sumPositiveNumbers = (arr: number[]): number => {
  return arr.filter(num => num > 0) 
    .reduce((acc, curr) => acc + curr, 0); 
}

const input7 = [1, -4, 12, 0, -3, 29, -150];
const output7 = sumPositiveNumbers(input7);
console.log(output7); 

// task 13
const getInitials = (str: string): string => {
  return str.split(' ') 
    .map(word => word.charAt(0)) 
    .join(''); 
}

const input8 = 'George Raymond Richard Martin';
const output8 = getInitials(input8);
console.log(output8); 

// task 14
interface Person {
  name: string;
  age: number;
}

const ageDifference = (arr: Person[]): number => {
  const sorted = arr.sort((a, b) => a.age - b.age);

  const youngest = sorted[0].age; 
  const oldest = sorted[sorted.length - 1].age; 

  return oldest - youngest; 
}

const input9 = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const output9 = ageDifference(input9);
console.log(output9); // 54

// task 15
const singleNumber = (nums: (number | boolean)[]): number[] => {
  const counts: Record<number, number> = {};

  nums.forEach(num => {
    if (typeof num === 'number') { 
      counts[num] = (counts[num] || 0) + 1;
    }
  });

 
  return Object.keys(counts)
    .filter(key => counts[+key] === 1)
    .map(Number);
}

const result6 = singleNumber([4, 1, 2, 1, 2, 9, true]);
console.log(result6); // [4, 9]








