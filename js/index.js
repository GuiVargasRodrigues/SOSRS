function diagnosticar() {
  const sintomas = document.querySelectorAll('input[name="sintoma"]:checked');
  const sintomasArray = Array.from(sintomas).map(cb => cb.value);
  const sintomasSelecionados = sintomasArray.join(', ');

  if (sintomasSelecionados.includes("Febre Alta, dor de cabeça, sangramentos, dor muscular, calafrios, olhos vermelhos e vômito")) {
      window.location.href = "./leptospirose.html";
  } else if (sintomasSelecionados.includes("Contrações musculares dolorosas, dificuldade para respirar, febre, Pressão alta e sudorese")) {
      window.location.href = "./tétano.html";
  } else if (sintomasSelecionados.includes("sangramentos nas fezes, dores abdominais; muco")) {
      window.location.href = "./diarréia_aguda.html";
  } else if (sintomasSelecionados.includes("fadiga, icterícia, urina escura, fezes claras e perda de apetite")) {
      window.location.href = "./hepatite_a.html";
  } else if (sintomasSelecionados.includes("febre alta, dores musculares, erupções cutâneas, dores nas articulações, hemorragia intensa, dificuldade para respirar, edema, rubor, febre, dor de cabeça")) {
      window.location.href = "./dengue.html";
  } else if (sintomasSelecionados.includes("Dor , eritema, hematoma e formação de bolhas, áreas ulceração")) {
      window.location.href = "./animais_peconhentos.html";
  } else {
      alert("Nenhuma doença correspondente aos sintomas selecionados foi encontrada.");
  }
}
