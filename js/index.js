// Função para processar o formulário ao diagnosticar os sintomas
document.getElementById('sintomasForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obter todos os sintomas selecionados
  const sintomasSelecionados = [];
  const checkboxes = document.querySelectorAll('input[name="sintomas"]:checked');
  checkboxes.forEach(function(checkbox) {
    sintomasSelecionados.push(checkbox.value);
  });

  // Diagnosticar com base nos sintomas selecionados
  const paginaDoenca = diagnosticarDoenca(sintomasSelecionados);

  // Redirecionar para a página da doença
  if (paginaDoenca) {
    window.location.href = paginaDoenca;
  } else {
    alert('Não foi possível diagnosticar a doença. Por favor, selecione mais sintomas.');
  }
});

// Função para diagnosticar a doença com base nos sintomas selecionados
function diagnosticarDoenca(sintomas) {
  // Mapear os sintomas para as páginas de doenças correspondentes
  const sintomasParaDoenca = {
    'febre alta': './dengue.html',
    'dor de cabeça': './dengue.html',
    'sangramentos': './dengue.html',
    'dor muscular': './dengue.html',
    'calafrios': './dengue.html',
    'olhos vermelhos': './dengue.html',
    'vômitos': './dengue.html',
    'contrações musculares': './tétano.html',
    'dificuldade para respirar': './tétano.html',
    'pressão alta': './tétano.html',
    'sudorese': './tétano.html',
    'sangramentos nas fezes': './diarréia_aguda.html',
    'dores abdominais': './diarréia_aguda.html',
    'muco nas fezes': './diarréia_aguda.html',
    'fadiga': './hepatite_a.html',
    'icterícia': './hepatite_a.html',
    'urina escura': './hepatite_a.html',
    'fezes claras': './hepatite_a.html',
    'perda de apetite': './hepatite_a.html',
    'erupções cutâneas': './dengue.html',
    'dores nas articulações': './dengue.html',
    'hemorragia intensa': './dengue.html',
    'edema': './dengue.html',
    'rubor': './dengue.html',
    'dor após picada': './animais_peconhentos.html',
    'eritema': './animais_peconhentos.html',
    'hematoma': './animais_peconhentos.html',
    'formação de bolhas': './animais_peconhentos.html',
    'áreas de ulceração': './animais_peconhentos.html'
  };

  // Procurar a página de doença correspondente aos sintomas selecionados
  for (const sintoma of sintomas) {
    if (sintomasParaDoenca.hasOwnProperty(sintoma)) {
      return sintomasParaDoenca[sintoma];
    }
  }

  return null;
}