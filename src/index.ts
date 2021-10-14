import { from, range } from "rxjs";
import { filter } from "rxjs/operators";

range(20, 10).pipe(
  filter((val, index) => {
    console.log(index);
    return val % 2 === 1;
  })
);
//   .subscribe({ next: (val) => console.log(val) });

const personajes = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "joker",
  },
];

const personajes$ = from(personajes).pipe(
  filter(({ tipo }) => tipo === "heroe")
);

personajes$.subscribe((val) => console.log("Personaje: ", val));
