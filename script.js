// // Esta deprecada por let
// var nombre = "Ezequiel"
// // let es la nueva forma de definir una variable
// let apellido = "Cherone"
// // const es la manera de definir una variable constante 
// const edad = 34

// console.log(nombre)

// nombre = 5

// console.log(nombre)

// //con let no se puede redeclarar una variable ya creada y es de ambito local
// //con var se puede redeclarar la variable... es no es optimo en rendimiento y es global
// let sueldo = 100
// console.log(sueldo)

// sueldo = "Bastante"
// console.log(sueldo)

// //Son variables que no se pueden modificar el valor, son de alcance global y 
// //se ingresan siempre al principio del codigo
// const IVA = 1.21

// console.log(100* IVA)

// let numuero = parseInt(prompt("por favor ingrese un numero"))
// let numero2 = parseFloat(prompt("ingrese otro numero").replace(',','.'))
// let numero3 = Number(prompt("Ingrese numero 3"))

// // mostrar por pantalla
// // console.log(numuero)
// // console.log(numero2)
// // console.log(numero3)

// //mostrar por pantalla
// alert(numuero)
// alert(numero2)
// alert(numero3)

// == 5 y "5" verdadero
// === valor y tipo (siempre utilizar este) falso

let numero = 5

if(numero === "5"){
console.log("Verdadero")
}

else{
    console.log("falso")
} 