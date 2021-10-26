import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    takeWhile(({ clientY }) => clientY < 200, true)
  )
  .subscribe({
    next: (event) => console.log(event),
    complete: () => console.log("Completed"),
  });