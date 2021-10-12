import { interval, Observer, timer } from "rxjs";

const observer: Observer<number> = {
  next: (val) => console.log(val),
  error: (err) => console.log(err),
  complete: () => console.log("Completado"),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(2000);
// const timer$ = timer(2000)
// const timer$ = timer(2000,1000)
const timer$ = timer(hoyEn5, 1000);

console.log("Inicio"); //Asíncrono por naturaleza

// interval$.subscribe(observer)
timer$.subscribe(observer);

console.log("Fin");