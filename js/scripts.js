//Función que cambia la visibilidad
function swapVisibility(boton, parrafo, label) {
    //cambiar visibilidad de texto
    if (parrafo.style.display == "none") {
        parrafo.style.display = "inline";

        if (label.innerHTML != "documentos") label.style.display = "inline";
        boton.value = "Ocultar " + label.innerHTML;

    } else {
        parrafo.style.display = "none";
        label.style.display = "none";
        boton.value = "Mostrar " + label.innerHTML;
    }
}

//Función para añadir los onclick a los botones de contacto
function addOnClick(boton, parrafo, label) {
    boton.onclick = function () {
        swapVisibility(boton, parrafo, label);
    };
}

//to do: cambiar console por ventanita
function addCopyOnClick(botonCopia, spanCopia) {
    botonCopia.onclick = function () {
        let contenido = document.getElementById(spanCopia);
        navigator.clipboard.writeText(contenido.innerHTML).then(() => {
            console.log('Copiado');
        }, (err) => {
            console.log('Error: ', err);
        });
    };
}

function crearAura() {
    /*Aura*/
    let aura = document.getElementById("aura");
    for (let i = 0; i < 360; i++) {
        let rayo = document.createElement("div");
        rayo.className = "rayo";
        let rayoPosicion = Math.random() * (120 - 100) + 200;
        rayo.style.transform = 'rotate(' + (i * 2) + 'deg)' + ' translate(' + rayoPosicion + 'px)';
        aura.appendChild(rayo);
    }
}

function start() {
    if (document.getElementById("index") != null) {
        /*Asigno onclick al boton del index y ocultar al abrir la página*/
        let botonIndex = document.getElementsByClassName("botonBonitoIndex")[0];
        let animacion = document.getElementById("aura");
        let labelIndex = document.getElementsByClassName("labelIndex")[0];
        animacion.style.display = "none";
        labelIndex.style.display = "none";
        botonIndex.onclick = () => {
            if (animacion.style.display == "none") {
                animacion.style.display = "inline";
                crearAura();
                botonIndex.value = "Ocultar " + labelIndex.innerHTML;
            } else {
                while (animacion.firstChild) {
                    animacion.removeChild(animacion.firstChild);
                }
                animacion.style.display = "none";
                botonIndex.value = "Mostrar " + labelIndex.innerHTML;
            }
        };
    }

    if (document.getElementById("CV") != null || document.getElementById("contacto") != null) {


        var botonesContacto = document.getElementsByClassName("botonBonitoContacto");
        var parrafosContacto = document.getElementsByClassName("pContacto");
        var labelsContacto = document.getElementsByClassName("labelContacto");

        /*Asignar las funciones onclick a los botones de mostrar/ocultar*/
        for (let i = 0; i < botonesContacto.length; i++) {
            var boton = botonesContacto[i];
            var parrafo = parrafosContacto[i];
            var label = labelsContacto[i];

            addOnClick(boton, parrafo, label);
            parrafosContacto[i].style.display = "none";
            labelsContacto[i].style.display = "none";
        }

        /*Asignar las funciones onclick a los botones de copiar*/
        var botonesCopiarContacto = document.getElementsByClassName("copiarBoton");
        var spansCopiarContacto = document.getElementsByClassName("spanCopiarContacto");
        for (let i = 0; i < botonesCopiarContacto.length; i++) {
            var botonCopiar = botonesCopiarContacto[i];
            var spanCopiar = spansCopiarContacto[i];
            addCopyOnClick(botonCopiar, spanCopiar.id);
        }

        /*Código de CV y Git */
        var botonCV = document.getElementById("mostrarDocumentos");
        var parrafoCV = document.getElementById("listaDocumentos");
        var lavelCV = document.getElementById("labelCv");
        addOnClick(botonCV, parrafoCV, lavelCV);
        parrafoCV.style.display = "none";
        lavelCV.style.display = "none";
    }
}

start();
