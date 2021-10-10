import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.log("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  let cuenta = 0;

  const interval = setInterval(() => {
    subs.next(cuenta);
    cuenta++;
    console.log("cuenta: ", cuenta);
  }, 1000);

  return () => {
    clearInterval(interval); //En el return debo completar odas las instrucciones dentro del observable
  };
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
  subs1.unsubscribe();
}, 3000);