/**
 * De acordo com o exercício anterior (calcular média da nota), valide e retorne a situação do aluno:
 * - se a média for <= 1, retorne “Aluno reprovado”;
 * - se a média for >= 2 e <= 4, retorne “Aluno em recuperação”;
 * - se a média for >= 5 e <= 7, retorne “Aluno aprovado”;
 * - se a média for > 7, retorne “Aluno aprovado com ótimo aproveitamento”;
 */

function calcularMedia(n1, n2, n3) {
  var media = (n1 + n2 + n3) / 3;
  if (media > 7) {
    return "Aprovado com ótimo aproveitamento";
  } else if (media >= 5 && media <= 5) {
    return "Aprovado";
  } else if (media >= 2 && media <= 4) {
    return "Em recuperação";
  } else if (media <= 1) {
    return "Reprovado";
  }
  return media.toFixed(1);
}
