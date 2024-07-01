document.getElementById('sintomasForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const checkboxes = document.querySelectorAll('input[name="sintomas"]:checked');
  const sintomas = Array.from(checkboxes).map(cb => cb.value);
  let paginaDoenca = 'indefinido.html'; // Página padrão para doença indefinida

  if (sintomas.includes('febre alta') && sintomas.includes('dor de cabeça') && sintomas.includes('sangramentos') && sintomas.includes('dor muscular') && sintomas.includes('calafrios') && sintomas.includes('olhos vermelhos') && sintomas.includes('vômitos')) {
    paginaDoenca = 'leptospirose.html';
  } else if (sintomas.includes('contrações musculares dolorosas') && sintomas.includes('dificuldade para respirar') && sintomas.includes('febre') && sintomas.includes('pressão alta') && sintomas.includes('sudorese')) {
    paginaDoenca = 'tetano.html';
  } else if (sintomas.includes('sangramentos nas fezes') && sintomas.includes('dores abdominais') && sintomas.includes('muco nas fezes')) {
    paginaDoenca = 'diarreia_aguda.html';
  } else if (sintomas.includes('fadiga') && sintomas.includes('icterícia') && sintomas.includes('urina escura') && sintomas.includes('fezes claras') && sintomas.includes('perda de apetite')) {
    paginaDoenca = 'hepatite_a.html';
  } else if (sintomas.includes('febre alta') && sintomas.includes('dores musculares') && sintomas.includes('erupções cutâneas') && sintomas.includes('dores nas articulações') && sintomas.includes('hemorragia intensa') && sintomas.includes('dificuldade para respirar') && sintomas.includes('edema') && sintomas.includes('rubor') && sintomas.includes('dor de cabeça')) {
    paginaDoenca = 'dengue.html';
  } else if (sintomas.includes('dor intensa no local da picada') && sintomas.includes('inchaço') && sintomas.includes('vermelhidão') && sintomas.includes('dificuldade para respirar')) {
    paginaDoenca = 'animais_peconhentos.html';
  }

  // Redirecionamento para a página identificada
  window.location.href = paginaDoenca;
});
