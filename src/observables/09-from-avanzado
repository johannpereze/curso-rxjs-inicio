import { of, from } from "rxjs";

//of: toma argumentos y genera unas ecuencia de valores
// from = array, promise, iterable, observable

const observer = {
  next: (val) => console.log("Next: ", val),
  complete: () => console.log("Completed"),
};

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = of(...[1, 2, 3, 4, 5]); //Hace lo mismo que el de arriba
// const source$ = from('Sebas') //Devuelve S, e, b, a, s

// const source$ = from(fetch("https://api.github.com/users/johannpereze"));

// source$.subscribe(async (resp) => {
//   console.log(resp);
//   const data = await resp.json();
//   console.log(data);
// }); // en vez de pasar el observer podemos una async function para obetener la data

//GENERADORES: Generan un iterable con una secuencia de algo

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// //Imprimimos las iteraciones con un ciclo for
// for (const id of miIterable) {
//   console.log(id);
// }

//Imprimimos las iteraciones con un from
const source$ = from(miIterable).subscribe(observer)