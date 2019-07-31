//7) Escreva um programa em Javascript que leia o código de um aluno 
//e suas três notas. Calcule a média ponderada do aluno, considerando 
//que o peso para a maior nota seja 4 e para as duas restantes, 
//3. Mostre o código do aluno, suas três notas, 
//a média calculada e uma mensagem "APROVADO" se a média for maior ou 
//igual a 5 e "REPROVADO" se a média for menor que 5.

var a = parseInt(prompt("Insira seu código de aluno"));
var b = parseInt(prompt("Insira sua primeira nota"));
var c = parseInt(prompt("Insira sua segunda nota"));
var d = parseInt(prompt("Insira sua terceira nota"));
var max = Math.max (b,c,d);
var e = 4;
var f = 3;
var g = (max * e) + (((b + c + d) - max)*f);
var average = " ";
var message1 = "aprovado";
var message2 = "reprovado";
//document.body.append (max);

var p1 = document.createElement ("p");//Código do aluno
var p2 = document.createElement ("p");//Primeira nota
var p3 = document.createElement ("p");//Segunda nota
var p4 = document.createElement ("p");//Terceira nota
var p5 = document.createElement ("p");//Média final
var p6 = document.createElement ("p");//Mensagem de aprovação.

if (average < 5) {
    var x1 = a;
    p1.append ("O código de aluno informado é = " + x1);
    var x2 = b;
    p2.append ("A primeira nota da prova é = " + x2);
    var x3 = c;
    p3.append ("A segunda nota da prova é = " + x3);
    var x4 = d;
    p4.append ("A terceira nota da prova é = " + x4);
    var average = g / (e + f + f);
    p5.append ("Sua média final foi = " + average);
    var x6 = message2;
    p6.append ("Infelizmente voce foi " + x6);
    
    document.body.appendChild (p1);
    document.body.appendChild (p2);
    document.body.appendChild (p3);
    document.body.appendChild (p4);
    document.body.appendChild (p5);
    document.body.appendChild (p6);
} else {
    if (average >= 5) {
    var x1 = a;
    p1.append ("O código de aluno informado é = " + x1);
    var x2 = b;
    p2.append ("A primeira nota da prova é = " + x2);
    var x3 = c;
    p3.append ("A segunda nota da prova é = " + x3);
    var x4 = d;
    p4.append ("A terceira nota da prova é = " + x4);
    var average = g / (e + f + f);
    p5.append ("Sua média final foi = " + average);
    var x6 = message1;
    p6.append ("Parabéns você foi " + x6);

    document.body.appendChild (p1);
    document.body.appendChild (p2);
    document.body.appendChild (p3);
    document.body.appendChild (p4);
    document.body.appendChild (p5);
    document.body.appendChild (p6);
    }
}