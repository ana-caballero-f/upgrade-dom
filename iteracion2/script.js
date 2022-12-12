// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
var nuevoDiv=document.createElement("div");
document.body.append(nuevoDiv);
console.log(nuevoDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2=document.createElement('div');
const parag= document.createElement('p');
document.body.append(nuevoDiv2);
nuevoDiv2.appendChild(parag);
console.log(nuevoDiv2);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divElem= document.createElement('div'); //creo el div

for (let i=1; i<6; i++){
    const parags = document.createElement('p'); //bucle para crear 6 elem "p"
    parags.innerText = `Párrafo ${i} creado con un bucle for`;
    divElem.append(parags);
}
document.body.append(divElem);


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const paragDinamico = document.createElement('p'); //creo el párrafo
paragDinamico.innerText="Soy dinámico!"     //inserto el texto
document.body.append(paragDinamico);        //se añade al documento


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const elemh2 = document.querySelector('.fn-insert-here'); //selección del elemento h2 
elemh2.innerText = "Wubba lubba dub dub";       //se añade texto en el h2


// 2.6 Basándote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
for(let i=0; i<apps.length; i++){
    const elemLista = document.createElement('li');
    elemLista.innerText = apps[i];
    lista.append(elemLista);
}
document.body.append(lista);



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeNodos = document.querySelectorAll('.fn-remove-me');

for(let i=0; i<removeNodos.length; i++){
    removeNodos[i].remove();
};


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const pEnMedio = document.createElement('p');
pEnMedio.innerText = "Voy en medio!";
const parag1 = document.querySelectorAll('div.fn-insert-here');
document.body.insertBefore(pEnMedio, parag1[1]);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const parrafos = document.querySelectorAll('div.fn-insert-here');

for(let i=0; i<parrafos.length; i++){
    const pDentro = document.createElement('p');
    pDentro.innerText = "Voy dentro!";
    parrafos[i].append(pDentro);
};




