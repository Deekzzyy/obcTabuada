var numero = prompt("Olá, eu sou o Robô da Tabuada!\n" + 
"Você quer a tabuada de qual número: ")

alert("Vamos começar a tabuada do número "+ numero)

var tabuada = " "
for(var i = 0;i<=20;i++){
    var resultado = numero * i      
    tabuada = tabuada + (numero + " x " + i + " = " + resultado + "\n") 
    console.log(tabuada)
}

alert("A tabuada do "+numero+": "+ "\n" + tabuada)