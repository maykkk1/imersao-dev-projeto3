let tentativas = 0;
let respostaAoChute;
let precisaResetar = false;

const gerarNumeroAleatorio = () => {
  let numAleatorio = (Math.random() * 11).toFixed(0)
  if (numAleatorio == 11) return 10
  return numAleatorio
};
let numeroAleatorio = gerarNumeroAleatorio();

const validarChute = (chute) => {
  if (chute >= 0 && chute <= 10) {
    return true;
  } else {
    return false;
  }
};

const checarChute = (chute) => {
  if (chute == numeroAleatorio) return true;
  return false;
};

const chuteCerto = () => {
  tentativas++;
  document.getElementById("dica").style.display = "none";
  const resultado = document.getElementById("resultado");
  const tentativa = document.getElementById("tentativa");
  tentativa.innerHTML = `Acertou com ${tentativas} tentativa(s)`;
  tentativa.style.display = "block";
  resultado.style.display = "flex";
  resultado.style.backgroundColor = "#A3EBB1";
  resultado.innerHTML = "acertou";
  document.getElementById("skillLevelUpGif").style.display = "block";
  precisaResetar = true;
  setTimeout(() => {
    document.getElementById("skillLevelUpGif").style.display = "none";
  }, 4000);
  numeroAleatorio = gerarNumeroAleatorio();
};

const MostrarDica = (chute) => {
  let dica = "";
  chute > numeroAleatorio ? (dica = "menor") : (dica = "maior");
  return dica;
};

const chuteErrado = (chute) => {
  tentativas++;
  const resultado = document.getElementById("resultado");
  const dica = document.getElementById("dica");
  dica.style.display = "block";
  dica.innerHTML = `O resultado é ${MostrarDica(chute)}`;
  resultado.style.display = "flex";
  resultado.style.backgroundColor = "#ec2300";
  resultado.innerHTML = "errou!";
};

const resetar = () => {
  tentativas = 0;
  precisaResetar = false;
  const resultado = document.getElementById("resultado");
  const tentativa = document.getElementById("tentativa");
  resultado.style.display = "none";
  tentativa.style.display = "none";
};

const resetarPeloInput = () => {
  precisaResetar ? resetar() : null;
};

const Chutar = () => {
  precisaResetar ? resetar() : null;
  const chuteInput = document.getElementById("valor");
  const chute = parseInt(document.getElementById("valor").value);
  document.getElementById("valor").value = chute;

  if (validarChute(chute)) {
    chuteInput.style.border = "none";

    if (checarChute(chute)) {
      chuteCerto();
    } else {
      chuteErrado(chute);
    }
  } else {
    chuteInput.style.border = "2px solid red";
  }
};
