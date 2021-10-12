import { asyncScheduler } from "rxjs";

//SET TIME OUT 3 EJEMPLOS
// const saludar = ()=>console.log('Hola Mundo');
// const saludar2 = (nombre)=>console.log(`Hola ${nombre}`);
// const saludar3 = ({nombre, apellido})=>console.log(`Hola ${nombre} ${apellido}` );

// asyncScheduler.schedule(saludar, 2000)
// asyncScheduler.schedule(saludar2, 2000, 'Sebas')
// asyncScheduler.schedule(saludar3, 2000, {nombre: 'Sebas', apellido: 'Pérez'})

//SET INTERVAL EJEMPLOS

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("State", state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
); //no puede ser una función de flecha

//Lo podemos detener con un setTimeOut, pero mejor con otros scheduler
// setTimeout(() => {
//   subs.unsubscribe();
// }, 5000);

//Lo detenemos con el scheduler
asyncScheduler.schedule(() => subs.unsubscribe(), 5000);