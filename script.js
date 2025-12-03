document.addEventListener("DOMContentLoaded", () => {
  const btnEmpezar = document.getElementById("btn-empezar");
  const formOverlay = document.getElementById("form-overlay");
  const btnCloseForm = document.getElementById("btn-close-form");
  
  const form = document.getElementById("form-selector-distintivo");
  const resultado = document.getElementById("resultado");
  const imagenDistintivo = document.getElementById("imagen-distintivo");
  const notaDistintivo = document.getElementById("nota-distintivo");
  //abrir modal
  if (btnEmpezar && formOverlay) {
    btnEmpezar.addEventListener("click", (event) => {
      event.preventDefault();
      formOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  //cerrar modal
  if (btnCloseForm && formOverlay) {
    btnCloseForm.addEventListener("click", () => {
      formOverlay.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (formOverlay) {
    formOverlay.addEventListener("click", (event) => {
      if (event.target === formOverlay) {
        formOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
  // todos los posibles distintivos
const DISTINTIVOS = {
  "img1": {
    src: "imgs/img1.png",
    alt: "Distintivo de mando 1",
    nota: "Distintivo de mando de 1 unidad tipo corporación."
  },
  "img2": {
    src: "imgs/img2.png",
    alt: "Distintivo de mando 2",
    nota: "Distintivo de mando de 2 unidades tipo corporación."
  },
  "img3": {
    src: "imgs/img3.png",
    alt: "Distintivo de mando 3",
    nota: "Distintivo de mando de 3 unidades tipo corporación."
  },
  "img4": {
    src: "imgs/img4.png",
    alt: "Distintivo de mando 4",
    nota: "Distintivo de mando de 4 unidades tipo corporación."
  },
  "img5": {
    src: "imgs/img5.png",
    alt: "Distintivo de mando 5",
    nota: "Distintivo de mando de 5 o más unidades tipo corporación."
  },
  "img6": {
    src: "imgs/img6.png",
    alt: "Distintivo de mando 6",
    nota: "Distintivo de mando de 1 Mando Superior."
  },
  "img7": {
    src: "imgs/img7.png",
    alt: "Distintivo de mando 7",
    nota: "Distintivo de mando de 2 Mandos Superiores."
  },
  "img8": {
    src: "imgs/img8.png",
    alt: "Distintivo de mando 8",
    nota: "Distintivo de mando de 3 Mandos Superiores."
  },
  "img9": {
    src: "imgs/img9.png",
    alt: "Distintivo de mando 9",
    nota: "Distintivo de mando de 4 Mandos Superiores."
  },
  "img10": {
    src: "imgs/img10.png",
    alt: "Distintivo de mando 10",
    nota: "Distintivo de mando de 5 o más Mandos Superiores."
  },
  "img11": {
    src: "imgs/img11.png",
    alt: "Distintivo de mando 11",
    nota: "Distintivo de mando con unidad tipo corporación y 1 Mando Superior."
  },
  "img12": {
    src: "imgs/img12.png",
    alt: "Distintivo de mando 12",
    nota: "Distintivo de mando con unidad tipo corporación y 2 Mandos Superiores."
  },
  "img13": {
    src: "imgs/img13.png",
    alt: "Distintivo de mando 13",
    nota: "Distintivo de mando con unidad tipo corporación y 3 Mandos Superiores."
  },
  "img14": {
    src: "imgs/img14.png",
    alt: "Distintivo de mando 14",
    nota: "Distintivo de mando con unidad tipo corporación y 4 Mandos Superiores."
  },
  "img15": {
    src: "imgs/img15.png",
    alt: "Distintivo de mando 15",
    nota: "Distintivo de mando con unidad tipo corporación y 5 o más Mandos Superiores."
  },
  "img16": {
    src: "imgs/img16.png",
    alt: "Distintivo de mando 16",
    nota: "Distintivo de mando 5 o más unidades tipo corporación y 1 Mando Superior."
  },
  "img17": {
    src: "imgs/img17.png",
    alt: "Distintivo de mando 17",
    nota: "Distintivo de mando 5 o más unidades tipo corporación y 2 Mandos Superiores."
  },
  "img18": {
    src: "imgs/img18.png",
    alt: "Distintivo de mando 18",
    nota: "Distintivo de mando 5 o más unidades tipo corporación y 3 Mandos Superiores."
  },
  "img19": {
    src: "imgs/img19.png",
    alt: "Distintivo de mando 19",
    nota: "Distintivo de mando 5 o más unidades tipo corporación y 4 Mandos Superiores."
  },
  "img20": {
    src: "imgs/img20.png",
    alt: "Distintivo de mando 20",
    nota: "Distintivo de mando 5 o más unidad tipo corporación y 5 o más Mandos Superiores."
  },
  "img21": {
    src: "imgs/img21.png",
    alt: "Distintivo de mando 21",
    nota: "Distintivo de mando con unidad tipo corporación y Plana Mayor."
  },
  "img22": {
    src: "imgs/img22.png",
    alt: "Distintivo de mando 22",
    nota: "Distintivo de Mando Superior y Plana Mayor."
  },
  "img23": {
    src: "imgs/img23.png",
    alt: "Distintivo de mando 23",
    nota:"Distintivo de mando con unidad tipo corporación, Mando Superior y Plana Mayor."
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tipocorporacion = document.getElementById("unidades-tipo-corporacion").value;
  const unidadesuperiores = document.getElementById("mandos-superiores").value;
  const planamayor = document.getElementById("plana-mayor").value;

  let claveDistintivo = null;
  let notaExtra = "";

  // ===== Reglas para mostrar el distintivo=====

  // regla1
  if (tipocorporacion === "1" && unidadesuperiores === "0" && planamayor === "no") {
    claveDistintivo = "img1";
  }
  // regla2
  else if (tipocorporacion === "2" && unidadesuperiores === "0" && planamayor === "no") {
    claveDistintivo = "img2";
  }
  // regla3
  else if (tipocorporacion === "3" && unidadesuperiores === "0" && planamayor === "no") {
    claveDistintivo = "img3";
  }
  // regla4
  else if (tipocorporacion === "4" && unidadesuperiores === "0" && planamayor === "no") {
    claveDistintivo = "img4";
  }
  // regla5 (5 o más unidades tipo corporación)
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "0" && planamayor === "no") {
    claveDistintivo = "img5";
  }
  // regla6
  else if (tipocorporacion === "0" && unidadesuperiores === "1" && planamayor === "no") {
    claveDistintivo = "img6";
  }
  // regla7
  else if (tipocorporacion === "0" && unidadesuperiores === "2" && planamayor === "no") {
    claveDistintivo = "img7";
  }
  // regla8
  else if (tipocorporacion === "0" && unidadesuperiores === "3" && planamayor === "no") {
    claveDistintivo = "img8";
  }
  // regla9
  else if (tipocorporacion === "0" && unidadesuperiores === "4" && planamayor === "no") {
    claveDistintivo = "img9";
  }
  // regla10 (5 o más Mandos Superiores)
  else if (tipocorporacion === "0" && unidadesuperiores === "5 o más" && planamayor === "no") {
    claveDistintivo = "img10";
  }
  // regla11 (1 Mando Superior, unidades tipo corporación 1-4)
  else if (tipocorporacion !== "0" && tipocorporacion !== "5 o más" && unidadesuperiores === "1" && planamayor === "no") {
    claveDistintivo = "img11";
  }
  // regla12
  else if (tipocorporacion !== "0" && tipocorporacion !== "5 o más" && unidadesuperiores === "2" && planamayor === "no") {
    claveDistintivo = "img12";
  }
  // regla13
  else if (tipocorporacion !== "0" && tipocorporacion !== "5 o más" && unidadesuperiores === "3" && planamayor === "no") {
    claveDistintivo = "img13";
  }
  // regla14
  else if (tipocorporacion !== "0" && tipocorporacion !== "5 o más" && unidadesuperiores === "4" && planamayor === "no") {
    claveDistintivo = "img14";
  }
  // regla15 (5 o más Mandos Superiores, unidades tipo corporación 1-4)
  else if (tipocorporacion !== "0" && tipocorporacion !== "5 o más" && unidadesuperiores === "5 o más" && planamayor === "no") {
    claveDistintivo = "img15";
  }
  // regla16 (5 o más unidades tipo corporación + 1 Mando Superior)
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "1" && planamayor === "no") {
    claveDistintivo = "img11";
  }
  // regla17
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "2" && planamayor === "no") {
    claveDistintivo = "img12";
  }
  // regla18
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "3" && planamayor === "no") {
    claveDistintivo = "img13";
  }
  // regla19
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "4" && planamayor === "no") {
    claveDistintivo = "img14";
  }
  // regla20 (5 o más y 5 o más)
  else if (tipocorporacion === "5 o más" && unidadesuperiores === "5 o más" && planamayor === "no") {
    claveDistintivo = "img15";
  }
  // regla21 (plana mayor)
  else if (tipocorporacion !== "0" && unidadesuperiores === "0" && planamayor === "si") {
    claveDistintivo = "img23";
  }
  // regla22 (plana mayor 2)
  else if (tipocorporacion === "0" && unidadesuperiores !== "0" && planamayor === "si") {
    claveDistintivo = "img23";
  }
  // regla23 (plana mayor 3)
  else if (tipocorporacion !== "0" && unidadesuperiores !== "0" && planamayor === "si") {
    claveDistintivo = "img23";
  }
  //regla24 (solo ser de la plana mayor)
  else if (tipocorporacion === "0" && unidadesuperiores === "0" && planamayor === "si") {
    claveDistintivo = "img23";
  }

  const config = DISTINTIVOS[claveDistintivo];

  if (config) {
    imagenDistintivo.src = config.src;
    imagenDistintivo.alt = config.alt;

    let notaFinal = config.nota || "";
    if (notaExtra) {
      notaFinal += (notaFinal ? "<br>" : "") + notaExtra;
    }
    notaDistintivo.innerHTML = notaFinal;

    resultado.classList.remove("empty");
  } else {
    imagenDistintivo.src = "";
    imagenDistintivo.alt = "";
    notaDistintivo.textContent = "";
    resultado.classList.add("empty");
  }
});

form.addEventListener("reset", () => {
  imagenDistintivo.src = "";
  imagenDistintivo.alt = "";
  notaDistintivo.textContent = "";
  resultado.classList.add("empty");
});
});
