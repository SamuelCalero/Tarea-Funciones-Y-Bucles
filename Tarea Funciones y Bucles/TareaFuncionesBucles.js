function ContadorMates() {
    mates=1;
    while (mates>=1 && mates <=4) {
        if(mates==1 || mates==2 || mates==3){
            console.log("Mate "+mates);
            mates++;
        }else{
            console.log("Para que queres tantos mates?");
            mates++;
        }
    }
    
}

function Mates() {
    let contador = 1;
    while (contador>=1 && contador<=50) {
        if (contador==3 || contador==13 || contador==23 || contador==33 || contador==43) {
            console.log(contador+" Quieres un mate?");
            contador++;
        }else if (contador==7 || contador==17 || contador==27 || contador==37 ||contador==47){
            console.log(contador+" No se toma con azucar");
            
            contador++;
        }else{
            console.log(contador);
            contador++;
        }
    }
}
function NumSecreto() {
    let secreto= 14;
    let num=1;
    while(num>=1 && num<=30) {
        if (num==secreto) {
            console.log(secreto+" Este es tu numero: ");
            num++;
        }
        console.log(num);
        num++;
        
    }
}

function DatosAuto(modelo, marca, valor) {
    console.log("Tu auto es de la marca "+marca+", su modelo es "+modelo+" y tiene un costo de "+valor);
}

function ElevarAlCuadrado(numero) {
    console.log("Su numero "+numero+" elevado al cuadrado es: "+Math.pow(numero,2));
}
function MultiplicadorNumeros(num1,num2,num3,num4,num5) {
    numero1=num1*5;
    numero2=num2*5;
    numero3=num3*5;
    numero4=num4*5;
    numero5=num5*5;

    return "1)"+num1+"*5="+numero1+" 2)"+num2+"*5="+numero2+" 3)"+num3+"*5="+numero3+" 4)"+num4+"*5="+numero4+" 5)"+num5+"*5="+numero5;
}

console.log("----------------Ejercicio 1----------------");
ContadorMates();
console.log("----------------Ejercicio 2----------------");
Mates();
console.log("----------------Ejercicio 3----------------");
NumSecreto();
console.log("----------------Ejercicio 4----------------");
DatosAuto("Sentra","Nissan",5660);
console.log("----------------Ejercicio 5----------------");
ElevarAlCuadrado(5);
console.log("----------------Ejercicio 6----------------");
console.log(MultiplicadorNumeros(5,10,15,20,25));