const a = Number (prompt("Digite o salario"))
const b = Number (prompt("Digite o aumento "))

porcentagem = b/100 * a;

resultado = a + porcentagem;

document.write("Valor do Sálario: R$", a);

document.write("<br>");

document.write("Porcentagem do aumento: ", b, "%");

document.write("<br>");

document.write("Salário com reajuste: R$", resultado);