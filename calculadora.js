function calcular(){
   var num1 = document.querySelector(".numero1").value
   var num2 = document.querySelector(".numero2").value

    var resultado = parseInt(num1) + parseInt(num2)
    document.querySelector(".resultado").innerHTML = resultado
}