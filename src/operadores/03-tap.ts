import { range, tap, map } from "rxjs";

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap({ next: (val) => console.log("Tap 1: ", val) }), //recibe un observer
    map((val) => val * 10),
    tap({
      //Puedo encadenar todos los tap que quiera
      next: (val) => console.log("Tap 2: ", val),
      complete: () => console.log("Completamos todo"), //Me sirve para leer valores intermedio y verificar el complete. Es muy útil para debuguear
    })
  )
  .subscribe({ next: (val) => console.log("Subs: ", val) });
