// actualizar la fecha actual
const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('fecha-actual').textContent = new Date().toLocaleDateString('es-ES', opciones);

// funcion para el boton de "Te Amo"
document.getElementById('boton-mensaje').addEventListener('click', function(e) {
    // crear corazones animados
    for (let i = 0; i < 5; i++) {
        const corazon = document.createElement('i');
        corazon.classList.add('fas', 'fa-heart', 'efecto-corazon');
        
        // posicion aleatoria cerca del boton
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = -Math.random() * 20;
        
        corazon.style.left = (e.clientX + offsetX) + 'px';
        corazon.style.top = (e.clientY + offsetY) + 'px';
        corazon.style.color = `rgb(255, ${Math.floor(Math.random() * 50) + 50}, ${Math.floor(Math.random() * 100) + 100})`;
        corazon.style.fontSize = (Math.random() * 10 + 15) + 'px';
        corazon.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
        
        document.body.appendChild(corazon);
        
        // eliminar el corazon despues de la animacion
        setTimeout(() => {
            corazon.remove();
        }, 2000);
    }
    
    // mostrar mensaje aleatorio
    const mensajes = [
        "Te amo más que a nada en este mundo ❤️",
        "Sos lo mejor que me ha pasado ✨",
        "Mi corazón es tuyo para siempre ❤️",
        "Cada día te amo más 😘",
        "Sos mi persona favorita 💯",
        "Gracias por llegar a mi vida ❤️🩷",
        "No hay un solo día en el que no piense en vos 💭❤️",
        "Mi amor por vos crece cada día 🌱❤️",
        "Sos mi razón de sonreír 😊❤️",
        "Sos mi sueño hecho realidad 🌟",
        "No sé qué haría sin vos en mi vida ❤️",
        "Cada momento a tu lado es un regalo 🎁❤️",
        "Sos la persona que siempre soñé tener a mi lado 💕",
        "Te amo con toda mi alma y corazón ❤️💖",
        "Sos mi hogar, mi refugio, mi todo 🏡❤️",
        "Sos el mejor capítulo de mi historia 📖❤️",
        "No hay distancia ni tiempo que pueda separarnos 🕰️❤️",
        "Gracias por hacerme tan feliz cada día 😊💖",
        "Sos mi luz en los días más oscuros 🔥❤️",
        "Prometo amarte hoy, mañana y siempre 💍❤️",
        "Con vos, cada instante es mágico ✨💖",
        "Tu amor es lo mejor que me ha pasado ❤️🌎",
        "Mi mundo es más hermoso desde que estás en él 🌸❤️",
        "No hay palabras suficientes para describir lo que siento por vos 💘",
        "Mi corazón late por vos y solo por vos ❤️🔥"
    ];
    
    alert(mensajes[Math.floor(Math.random() * mensajes.length)]);
});

// calcular dias juntos
const fechaInicio = new Date('2025-02-13'); 
const hoy = new Date();
const diferenciaTiempo = hoy.getTime() - fechaInicio.getTime();
const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 3600 * 24));
document.getElementById('dias').textContent = diferenciaDias;

// controlar el reproductor
const cancion = document.getElementById('cancion');
const botonPlay = document.getElementById('play-pause');
const iconoPlay = document.getElementById('icono-play');

botonPlay.addEventListener('click', function() {
    if (cancion.paused) {
        cancion.play();
        iconoPlay.classList.remove('fa-play');
        iconoPlay.classList.add('fa-pause');
    } else {
        cancion.pause();
        iconoPlay.classList.remove('fa-pause');
        iconoPlay.classList.add('fa-play');
    }
});