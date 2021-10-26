import { of, take } from "rxjs";

const numeroS$ = of(1, 2, 3, 4, 5).pipe(take(3));
//El take cancela las emisiones restantes del observable y lo completa

numeroS$.subscribe({
  next: (number) => console.log(number),
  complete: () => console.log("Completed"),
});