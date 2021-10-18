import { interval, reduce, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const reducer = (accumulator: number, currentValue: number) =>
  accumulator + currentValue;

const filterJS = numbers.reduce(reducer);
console.log("filterJS: ", filterJS);

interval(1000)
  .pipe(tap(console.log), take(6), reduce(reducer))
  .subscribe({ next: (val) => console.log("filterRx: ", val) });