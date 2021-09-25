console.log("Nombre: Rosalia Condori Condo");

//PREGUNTA 1:
//Supongamos que estamos creando una aplicación de apuestas de fútbol.
//Los datos los obtenemos de un servicio web, los cuales son los siguientes:

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };
//SUS TAREAS:
console.log("pregunta 1");
//1. Cree un array de jugadores para cada equipo (nombre a las variables como
//'players1' y 'players2')  

const players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
];
 const players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
];
 console.log((players1));
 console.log((players2));

 console.log("pregunta 2");
//2. El primer jugador en cualquier conjunto de jugadores es el portero y los demás
//son jugadores de campo. Para el Bayern de Múnich (team 1) cree una variable
//'gk' con el nombre del portero y un array 'fieldPlayers' con los 10 restantes
//jugadores de campo

let portero1 = ["Neuer",];
let gk1 = portero1["Neuer"];
const fieldPlayers1 = ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',
];
portero1.forEach(function(elemento)
{
  console.log(`portero1: Neuer`);
  console.log(fieldPlayers1);
});

let portero2 = ["Burki",];
let gk2 = portero1["Burki"];
const fieldPlayers2= ['Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',
];
portero2.forEach(function(elemento)
{
  console.log(`portero2: Burki`);
  console.log(fieldPlayers2);
});


console.log("pregunta 3");
//3. Cree una matriz 'allPlayers' que contenga a todos los jugadores de ambos
//equipos (22 jugadores)

let allPlayers = [players1,players2];
    console.log(allPlayers);
    console.log(players1.length+players2.length);


console.log("pregunta 4");
//4. Durante el partido, el Bayern de Múnich (team 1) utilizó 3 jugadores suplentes.
//Así que crea un nuevo array ('players1Final') que contiene todos los jugadores
//originales del equipo1 más 'Thiago', 'Coutinho' y 'Perisic'

const players1Final = [players1];
    players1.push('Thiago', 'Coutinho', 'Perisic');
 console.log((players1Final));



 console.log("pregunta 5");
//5. Basado en el objeto game.odds, cree una variable para cada cuota (llamada
//'team1', 'draw' y 'team2')

const team1= [];
const draw = [];
const team2 = [];
const odds = {
  team1: 1.33,
  draw: 3.25,
  team2: 6.5,
};

console.log(odds);


console.log("pregunta 6");
//6. Cree una función ('printGoals') que reciba un número arbitrario de nombres de
//jugadores (no un array) e imprime cada uno de ellos en la consola, junto con el
//número de goles que marco cada uno (pasar como argumento solo nombres de
//jugadores que hayan marcado al menos un gol, revise los datos del objeto ‘game’
//para encontrar la información que le sirva).

const printGoals = [
  {nombre:'Neuer', cantidad: 0},
  {nombre:'Pavard', cantidad: 1},
  {nombre:'Martinez', cantidad: 1},
];
//let printGoals.cantidad = [];
function gol (printGoals) {
  if (printGoals.cantidad === 1)
     return printGoals.nombre, printGoals.cantidad;
};
 console.log(printGoals.find(gol));
//pendiente


console.log("pregunta 7");
//7. En las aplicaciones de apuestas es más probable que gane el equipo con la
//cuota más baja. Imprima en la consola que equipo es más probable que gane,
//sin usar una declaración if/else o el operador ternario.

let equipo1 = [1.33];
let equipo2 = [6.5];
const mayor = (equipo1>equipo2)?equipo1:equipo2;
console.log(mayor);



console.log("pregunta 8");
//8. Use un bucle para poder calcular la cuota (odd) promedio y mostrarlo en la
//consola

let promedio= [1.33,3.25,6.5,];
//const value =[i];
let suma = 0;
//let cantidad = 0;
for(let index in promedio){
   suma += promedio[index]
   //cantidad ++;
};
//const pro = suma/cantidad;
console.log(suma/promedio.length);




console.log("pregunta 9");
//9. Cree una función que devuelva un objeto que contenga los nombres de los
//jugadores que anotaron goles, pero como PROPIEDADES, y el número de goles
//como VALORES. Por ejemplo, con los datos obtenidos arriba el objeto se verá
//como:
//{
//Gnarby: 1,
//Hummels: 1,
//Lewandowski: 2
//}

var jugadores1 = [
  {nombre: 'Pavard', cantidad: 2},
  {nombre: 'Martinez', cantidad: 0},
  {nombre: 'Alaba', cantidad: 2},
  {nombre: 'Davies', cantidad: 3},
  {nombre: 'Kimmich', cantidad: 1},
  {nombre: 'Goretzka', cantidad: 2},
  {nombre: 'Coman', cantidad: 1},
  {nombre: 'Muller', cantidad: 5},
  {nombre: 'Gnarby', cantidad: 7},
  {nombre: 'Lewandowski', cantidad: 7},
  
]

function ljugadores1(jugadores1, nombre) {
  var i = 0;
  // Mientras queden elementos por comprobar en el array y el nombre del elemento actual no sea el nombre que buscamos, pasamos al elemento siguiente
  while (i < jugadores1.length && jugadores1[i].nombre != nombre) {
    i++;
  }
  // Si el motivo por el que se ha salido del array es porque no quedan elementos por comprobar devolver null (no se ha encontrado). En caso contrario devolver el elemento en la posición i (posición en la que se ha encontrado ele lemento)
  if (i < jugadores1.length) {
    return jugadores1[i];
  }
  else {
    return null;
  }
}

console.log(ljugadores1(jugadores1, 'Pavard'));       
console.log(ljugadores1(jugadores1, 'Martinez'));
console.log(ljugadores1(jugadores1, 'Alaba'));  
console.log(ljugadores1(jugadores1, 'Davies'));  
console.log(ljugadores1(jugadores1, 'Kimmich'));  
console.log(ljugadores1(jugadores1, 'Goretzka'));  
console.log(ljugadores1(jugadores1, 'Coman'));  
console.log(ljugadores1(jugadores1, 'Muller'));  
console.log(ljugadores1(jugadores1, 'Gnarby'));  
console.log(ljugadores1(jugadores1, 'Lewandowski')); 
console.log(ljugadores1(jugadores1, 'ADRIAN'));




console.log("pregunta 10");
//10. Cree una funcion que analice los datos y muestre en la consola un mensaje como
//este: “Un evento ocurrió, en promedio, cada 9 minutos”
//Recorra la variable “gameEvents” y muestre cada elemento en la consola
//señalando si fue el primer o el segundo tiempo, algo como esto:
//“[PRIMER TIEMPO] 17: GOAL”
//Tome en cuenta los siguientes datos:
const gameEvents = new Map([
[17, 'GOAL'],
[36, 'Substitution'],
[47, 'GOAL'],
[61, 'Substitution'],
[64, 'Yellow card'],
[69, 'Red card'],
[70, 'Substitution'],
[72, 'Substitution'],
[76, 'GOAL'],
[80, 'GOAL'],
[92, 'Yellow card'],
]);


//let [i];
const cant = [17, 36, 47, 61, 64, 69, 70, 72, 76, 80, 92];
const cantidades =['GOAL', 'Substitution', 'GOAL', 'Substitution', 'Yellow crad', 'Red card', 'Substitution', 'Substitution', 'GOAL', 'GOAL', 'Yellow card'];
const  sum= 0;

function muestreo (gameEvents) {
  for(const i=0; i<=9; i++) {
    for(let index in cant)
        sum += cant[index]
 };
 console.log("Un evento ocurrio");
    
};

console.log(suma/cant.length);
console.log((muestreo));



console.log("pregunta 11");
//PREGUNTA 2:
//Escriba un programa que reciba una lista de nombres de variables escritos en
//underscore_case y convertirlos en camelCase.
//underscore_case
//first_name
//Some_Variable
//calculate_AGE
//delayed_departure
//IMPORTANTE: La entrada de arriba es UNA sola cadena, NO es un objeto, NO son
//varias cadenas, y TAMPOCO son varias variables.
//Debe producir la siguiente salida:
//underscoreCase

//firstName 
//someVariable 
//calculateAge 
//delayedDeparture

function camelize(str) {
  // Split the string at all space characters
  return str.split(' ')
  // get rid of any extra spaces using trim
  .map(a => a.trim())
  // Convert first char to upper case for each word
  .map(a => a[0].toUpperCase() + a.substring(1))
  // Join all the strings back together
  .join("")
  }
  console.log(camelize("underscore case"))
  console.log(camelize("first name"))
  console.log(camelize("Some Variable"))
  console.log(camelize("calculate age"))
  console.log(camelize("delayed Departure")) 