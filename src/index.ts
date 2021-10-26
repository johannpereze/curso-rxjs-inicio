import { fromEvent } from "rxjs";

const click$ = fromEvent(document, "click");

click$.subscribe({
  next: (number) => console.log(number),
  complete: () => console.log("Completed"),
});
