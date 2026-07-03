//! 1) задайте правильні ts типи для класичних js;
//* let age = 50;
//* let name = 'Max';
//* let toggle = true;
//* let empty = null;
//* let notInitialize = undefined;
//* let callback = (a) => { return 100 + a };

let age: number = 50;
let nameM: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

//! 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
//* let anything = -20;
//* anything = 'Text';
//* anything = {};

let anything: unknown = -20;
anything = "Text";
anything = {};

//! 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
//* let some:unknown;
//* some = 'Text';
//* let str: string;
//* str = some;

let some: unknown;
some = "Text";
let str: string;
//? let str: string = some as string
if (typeof some === "string") {
  str = some;
}

//! 4) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
//* let person = ['Max', 21];

type Person = readonly [string, number];
let person: Person = ["Max", 21];

//? Або

let person2: readonly [string, number] = ["Max", 21];

//! 5) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

enum Status {
  LOADING,
  READY,
}

let status2: Status = Status.LOADING;

//? Або

const status3 = {
  LOADING: "LOADING",
  READY: "READY",
} as const;

//! 6) Зробіть змінну, яка може приймати або рядок, або число.

type Something = string | number;
const num: Something = 5;

//? Або

let value: string | number = 5;

//! 7) Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

type Info = "enable" | "disable";
const info: Info = "enable";

//? Або

const info2: "enable" | "disable" = "disable";

//! 8) Вкажіть типи для наступних функцій
//* function showMessage(message) {
//*  console.log(message);
//* }

//* function calc(num1, num2) {
//*  return num1 + num2;
//* }

//* function customError() {
//*  throw new Error('Error');
//* }

function showMessage(message: string): void {
  console.log(message); // void = undefined
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error"); //never
}

//! 9) Створіть свій тип даних на основі наявних даних.

//* const page1 = {
//*  title: 'The awesome page',
//*  likes: 100,
//*  accounts: ['Max', 'Anton', 'Nikita'],
//*  status: 'open',
//*  details: {
//*    createAt: new Date('2021-01-01'),
//*    updateAt: new Date('2021-05-01'),
//*  }
//* }

//* const page2 = {
//*  title: 'Python or Js',
//*  likes: 5,
//*  accounts: ['Alex'],
//*  status: 'close',
//* }

type StatusPage1 = "open" | "close";
interface DetailsPage1 {
  createAt: Date;
  updateAt: Date;
}
interface Page1 {
  title: string;
  likes: number;
  accounts: string[];
  status: StatusPage1;
  details: DetailsPage1;
}
const page1: Page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

interface Page2 {
  title: string;
  likes: number;
  accounts: string[];
  status: StatusPage1;
}
const page2: Page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

//? Або оптивізовано

interface DetailsPages {
  createAt: Date;
  updateAt: Date;
}
interface Pages {
  title: string;
  likes: number;
  accounts: string[];
  status: StatusPage1;
  details?: DetailsPages;
}

const page11: Pages = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page22: Pages = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
