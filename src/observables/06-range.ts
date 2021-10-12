import { asyncScheduler, observeOn, range } from "rxjs";

// const range$ = range(1,5, asyncScheduler); //Deprecado

const range$ = range(1,5).pipe(observeOn(asyncScheduler))

console.log('Inicio');
range$.subscribe(console.log)
console.log('fin');
