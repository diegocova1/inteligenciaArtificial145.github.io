// Definición de objetos que representan diferentes tipos de inteligencia artificial
let inteligenciasArtificiales = [
    {
        nombre: "Redes Artificiales",
        descripcion: "Modelo matemático inspirado en el funcionamiento del cerebro humano, utilizado para aprender y reconocer patrones. Consiste en redes de neuronas artificiales interconectadas que procesan información.",
        nivelAvance: "Avanzado",
        aplicaciones: [
            "Reconocimiento de voz",
            "Reconocimiento de imágenes",
            "Procesamiento de lenguaje natural"
        ],
        empresasDestacadas: [
            "Google DeepMind",
            "OpenAI",
            "Facebook AI Research"
        ]
    },
    {
        nombre: "Aprendizaje Automatico",
        descripcion: "Campo de la inteligencia artificial que se enfoca en el desarrollo de algoritmos que permiten a las máquinas aprender a partir de datos y tomar decisiones. Es fundamental para el análisis predictivo y la toma de decisiones automatizada.",
        nivelAvance: "Intermedio",
        aplicaciones: [
            "Sistemas de recomendación",
            "Detección de fraudes",
            "Automatización de procesos"
        ],
        empresasDestacadas: [
            "Amazon Web Services",
            "Microsoft Research",
            "Netflix"
        ]
    },
    {
        nombre: "Procesamiento del Lenguaje Natural",
        descripcion: "Área de la inteligencia artificial que se ocupa de la interacción entre las computadoras y los humanos a través del lenguaje natural. Permite a las máquinas entender, interpretar y generar lenguaje humano.",
        nivelAvance: "Avanzado",
        aplicaciones: [
            "Chatbots",
            "Traducción automática",
            "Análisis de sentimientos"
        ],
        empresasDestacadas: [
            "IBM Watson",
            "Amazon Alexa",
            "Google Cloud Natural Language"
        ]
    },
    {
        nombre: "Visión por Computadora",
        descripcion: "Disciplina que se ocupa de cómo las máquinas pueden interpretar y entender la información visual del mundo real. Utiliza técnicas de reconocimiento de patrones para analizar y entender imágenes y videos.",
        nivelAvance: "Intermedio",
        aplicaciones: [
            "Reconocimiento facial",
            "Automatización industrial",
            "Conducción autónoma"
        ],
        empresasDestacadas: [
            "Tesla",
            "Intel",
            "NVIDIA"
        ]
    }
];

// Función para crear elementos HTML y mostrar la información detallada de cada tipo de inteligencia artificial
function mostrarIA() {
    const iaListContainer = document.getElementById("ia-list");

    inteligenciasArtificiales.forEach(function(ia) {
        let iaCard = document.createElement("div");
        iaCard.classList.add("card");

        let iaTitle = document.createElement("h2");
        iaTitle.textContent = ia.nombre;

        let iaDescription = document.createElement("p");
        iaDescription.textContent = ia.descripcion;

        let iaAvance = document.createElement("p");
        iaAvance.textContent = `Nivel de Avance: ${ia.nivelAvance}`;

        let iaAplicacionesTitle = document.createElement("h3");
        iaAplicacionesTitle.textContent = "Aplicaciones destacadas:";

        let iaAplicacionesList = document.createElement("ul");
        ia.aplicaciones.forEach(function(aplicacion) {
            let aplicacionItem = document.createElement("li");
            aplicacionItem.textContent = aplicacion;
            iaAplicacionesList.appendChild(aplicacionItem);
        });

        let iaEmpresasTitle = document.createElement("h3");
        iaEmpresasTitle.textContent = "Empresas destacadas en el campo:";

        let iaEmpresasList = document.createElement("ul");
        ia.empresasDestacadas.forEach(function(empresa) {
            let empresaItem = document.createElement("li");
            empresaItem.textContent = empresa;
            iaEmpresasList.appendChild(empresaItem);
        });

        iaCard.appendChild(iaTitle);
        iaCard.appendChild(iaDescription);
        iaCard.appendChild(iaAvance);
        iaCard.appendChild(iaAplicacionesTitle);
        iaCard.appendChild(iaAplicacionesList);
        iaCard.appendChild(iaEmpresasTitle);
        iaCard.appendChild(iaEmpresasList);

        iaListContainer.appendChild(iaCard);
    });
}

// Llamamos a la función para mostrar la información al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarIA();
});