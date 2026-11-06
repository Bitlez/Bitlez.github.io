//Sonido de experiencia antes de abrir Just One Opportunity

function abrirJustOne(){

    const sonido = document.getElementById("sonido-xp");
    const enlace = "https://bitlez.itch.io/just-one-opportunity-demo";

    //Reiniciar el sonido
    sonido.currentTime = 0;

    //Redirigir cuando termine de reproducirse
    sonido.onended = function(){
        window.location.href = enlace;
    };

    //Si el sonido falla, redirigir igualmente
    sonido.onerror = function(){
        window.location.href = enlace;
    };

    sonido.play().catch(function(){
        window.location.href = enlace;
    });
}

//Sonido antes de abrir el worms
function abrirWorms2(){
    const sonido = document.getElementById("sonido-worms");
    const enlaceWorms = 'worms.html';

    //Reiniciar el sonido
    sonido.currentTime = 0;

    //Redirigir cuando termine de reproducirse
    sonido.onended = function(){
        window.location.href= enlaceWorms;
    };

    //Si el sonido falla, redirigir igualmente
    sonido.onerror = function(){
        window.location.href= enlaceWorms;
    };

    sonido.play().catch(function(){
        window.location.href= enlaceWorms;
    });
}