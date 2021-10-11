import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6); //6 argumentos
// const obs$ = of([1, 2, 3, 4, 5, 6]); //1 argumento
// const obs$ = of(...[1, 2, 3, 4, 5, 6]); //6 argumentos
// const obs$ = of(...[1, 2, 3, 4, 5, 6], 7); //7 argumentos
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
); //7 argumentos

console.log("Inicio del obs$");

obs$.subscribe({
  next: (value) => console.log("Next: ", value),
  complete: () => console.log("Terminamos la secuencia"),
});

console.log("Fin del obs$"); //El observable se ejecutó de forma síncrona
