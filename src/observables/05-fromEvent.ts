import { fromEvent } from "rxjs";

//Eventos del DOM

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (value) => console.log("Next: ", value),
};

const event1 = src1$.subscribe(({x,y}) => {
  console.log(x, y);
});
const event2 = src2$.subscribe((event) => {
  console.log(event.key);
});