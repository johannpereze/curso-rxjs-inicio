import { fromEvent, map, pluck, range } from "rxjs";

//MAP
// //Transformando un valor y tipeando el map
// range(1, 5)
//   .pipe(map<number, number>((val) => val * 10))
//   .subscribe(console.log);

//Esta es la forma añadiendo el pipe directamente al observer para que afecte todas sus subscripciones
// const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
//   map((event) => event.key) //Lo transformo de una vez en el subscriber para no tener que desestructurar en cada subsripción
// );

// keyup$.subscribe({ next: (val) => console.log(val) });

//Esta es la forma añadiendo el pipe a otro observer derivado del primero para que no afecte todas las subscripciones del observable original
const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupKey$ = keyup$.pipe(map((event) => event.key));

keyupKey$.subscribe({ next: (val) => console.log("map", val) });

//PLUCK
// Para recibir sólo un valor desde un objeto emitido por el observer

const keyupPluck$ = keyup$.pipe(pluck("key"));

keyupPluck$.subscribe({ next: (val) => console.log("pluck", val) });
keyup$.subscribe({ next: (val) =>  console.log(val)
});
