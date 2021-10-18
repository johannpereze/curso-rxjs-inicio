import { interval, reduce, scan, take, tap } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const reducer = (accumulator: number, currentValue: number) =>
  accumulator + currentValue;

const reduceJS = numbers.reduce(reducer);
console.log("reduceJS: ", reduceJS);

//reduce: emite el valor final
interval(1000)
  .pipe(
    tap((val) => console.log("tap de reduce: ", val)),
    take(6),
    reduce(reducer)
  )
  .subscribe({ next: (val) => console.log("reduceRx: ", val) });

//scan: emite todos los valores (el anterior se imprimia con tap pero no se emitian)
interval(1000)
  .pipe(
    tap((val) => console.log("tap de scan: ", val)),
    take(6),
    scan(reducer)
  )
  .subscribe({ next: (val) => console.log("scanRx: ", val) });