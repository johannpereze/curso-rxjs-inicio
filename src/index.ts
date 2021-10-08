import { Observable, Observer } from "rxjs";
import { onErrorResumeNext } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.log("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  let cuenta = 0;

  setInterval(() => {
    subs.next(cuenta);
    cuenta++;
    if (cuenta === 5){
        subs.unsubscribe()
    }
  }, 1000);
});

intervalo$.subscribe(observer);
