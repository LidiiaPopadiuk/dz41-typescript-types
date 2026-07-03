"use strict";
//! 1) задайте правильні ts типи для класичних js;
//* let age = 50;
//* let name = 'Max';
//* let toggle = true;
//* let empty = null;
//* let notInitialize = undefined;
//* let callback = (a) => { return 100 + a };
Object.defineProperty(exports, "__esModule", { value: true });
let age = 50;
let nameM = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
//! 2) задайте тип для змінної, в яку можна зберегти будь-яке значення.
//* let anything = -20;
//* anything = 'Text';
//* anything = {};
let anything = -20;
anything = "Text";
anything = {};
//! 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
//* let some:unknown;
//* some = 'Text';
//* let str: string;
//* str = some;
let some;
some = "Text";
let str;
//? let str: string = some as string
if (typeof some === "string") {
    str = some;
}
let person = ["Max", 21];
//? Або
let person2 = ["Max", 21];
//! 5) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
let status2 = Status.LOADING;
//? Або
const status3 = {
    LOADING: "LOADING",
    READY: "READY",
};
const num = 5;
//? Або
let value = 5;
const info = "enable";
//? Або
const info2 = "disable";
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
function showMessage(message) {
    console.log(message); // void = undefined
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error"); //never
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
const page11 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page22 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=index.js.map