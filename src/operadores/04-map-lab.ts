import { fromEvent, map, pluck } from "rxjs";

const texto = document.createElement("div");
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie augue nec urna cursus, eget vestibulum ante euismod. Quisque malesuada lorem eget quam sollicitudin, nec cursus elit faucibus. Sed eu enim sit amet ligula hendrerit sollicitudin. Sed nec turpis tempor, ornare libero sit amet, ornare diam. In vitae lorem viverra, porta purus a, bibendum diam. Donec non diam ut tortor luctus sollicitudin. Ut non nibh felis. Cras bibendum laoreet eleifend. Nullam quis metus at erat gravida ultricies. Phasellus cursus leo vel placerat sodales. Vivamus sit amet odio lacinia, aliquam lorem non, semper odio.
</br></br>
Donec sodales metus lorem, quis lobortis orci maximus in. Nullam quis massa vitae quam gravida euismod eu ac ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat pretium dui, eget hendrerit dui dictum at. Nunc rutrum lacus ut sollicitudin cursus. Duis dapibus tortor a dolor condimentum fermentum. Curabitur sit amet magna metus. Fusce posuere odio nec sapien vestibulum auctor. Proin posuere mauris eu tortor tristique mollis. Ut vel felis quis dolor feugiat ornare. In hac habitasse platea dictumst. Etiam sit amet malesuada ligula. Nam in nunc aliquam, malesuada leo non, finibus purus. Fusce nec maximus quam. Sed sit amet lobortis sapien. Nullam scelerisque fringilla neque, quis dictum nibh euismod in.
</br></br>
Donec dignissim fermentum justo, ac sagittis enim luctus sit amet. Sed vel sollicitudin elit. Aliquam sit amet condimentum nulla. Nullam imperdiet felis vitae tellus ornare, quis mattis eros convallis. Suspendisse eget nibh tempor, varius sem ut, cursus enim. Aenean ante nunc, aliquam at velit nec, dapibus ornare nisi. Nunc sed sem quis sapien vestibulum imperdiet non vitae turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris cursus eget est eu aliquam. Donec sollicitudin at nulla et aliquam. Nunc non maximus massa.
</br></br>
Maecenas at nisl non lectus tempor tempor. Morbi et enim purus. In eu odio semper, elementum nisi at, auctor est. Vestibulum nibh leo, aliquam in consequat vitae, mattis eu ex. Suspendisse porttitor, odio varius consectetur sagittis, leo velit commodo quam, et fringilla magna lorem vitae metus. Nam id neque id massa eleifend imperdiet quis vel erat. Curabitur sed lectus libero. Sed posuere facilisis ligula sit amet lacinia. Ut et iaculis velit. Cras dui dolor, gravida sit amet mi vel, auctor vulputate metus. Ut ut vulputate massa, ut sodales arcu. Phasellus et laoreet tellus.
</br></br>
Vestibulum at consectetur lectus, vitae posuere odio. Maecenas eleifend nulla vitae risus molestie egestas. Nam est tellus, cursus non risus a, euismod maximus erat. Vestibulum placerat maximus nisl et interdum. Integer et tincidunt odio. Ut eleifend augue at justo blandit, non convallis purus eleifend. Aenean fringilla ipsum at nisl dapibus iaculis. Aenean eu consectetur eros, in consequat erat. Duis rutrum justo ac enim bibendum pharetra.
`;

const body = document.querySelector("body");
body.append(texto);

const progresssBar = document.createElement("div");
progresssBar.setAttribute("class", "progress-bar");
body.append(progresssBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  console.log({ scrollTop, scrollHeight, clientHeight });

  console.log({ scrollTop, scrollHeight, clientHeight });
  return scrollTop / (scrollHeight - clientHeight)*100;
};

//Streams

const scroll$ = fromEvent(document, "scroll");

// scroll$.subscribe({next: console.log})

const progress$ = scroll$.pipe(map((event) => calcularPorcentajeScroll(event)));

progress$.subscribe(
  (porcentaje) => (progresssBar.style.width = `${porcentaje}%`)
);