import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.log("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log("Intervalo Destruido");
  };
});

//Dee sta forma se crean 2 instancias del observable y me van a estar enviado informacion diferente a cada subscripción
// const subs1 = intervalo$.subscribe((rndm) => console.log("subs1 :", rndm));
// const subs2 = intervalo$.subscribe((rndm) => console.log("subs2 :", rndm));

//SUBJECT
//Características:
//Casteo Múltiple
//También e sun observer
//También se le puede mandar next, error y complete
//Nos permite transformar un cold observable en un hot observaable(Que produce data fuera del observable)

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe()
}, 3500);
