import { asyncScheduler } from "rxjs";


const saludar = ()=>console.log('Hola Mundo');
const saludar2 = (nombre)=>console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000)
asyncScheduler.schedule(saludar2, 2000, 'Sebas')
