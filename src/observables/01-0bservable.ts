import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(value),
  error: (error) => console.error("Mi error es: ", error),
  complete: () => console.log("terminado"),
};

const obs$ = new Observable((subs) => {
  subs.next("hola");
  subs.next("mundo");
  subs.next("hola");
  subs.next("mundo");

  //forzar error
//   const a = undefined;
//   a.b = "hola";


  subs.next("hola");
  subs.next("mundo");
  subs.complete();

  subs.next("hola");
  subs.next("mundo");
});

// obs$.subscribe({
//   next: (value) => console.log(value),
//   error: (error) => console.error("Mi error es: ", error),
//   complete: () => console.log("terminado"),
// });

obs$.subscribe(observer);