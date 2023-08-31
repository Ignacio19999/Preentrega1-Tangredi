let nombre = ''
    while (nombre === '') {
        nombre = prompt("Hola ¿como estás? .\n¿Como es tu nombre?")

        if (nombre === ''){
            alert("*Quizá no me escuchó*, Hola ¿Como estás?")
        }
    } 


// preguntas del juego 
function hablandoUsuario (temas){
    alert ("¿Como ha sido tu día?")

    temas = Number(prompt("1-Muy bueno \n2-Bueno \n3-Malo \n4-Muy malo"))

    switch (temas) {
        case 1:
            alert("Ohh!! Es una excelente noticia " + nombre + ". Me alegro mucho por ti")
            break
        case 2:
            alert ("Es muy lindo tener un buen día, sabemos que pueden haber mejores, pero de a poco lo conseguirás " + nombre + ".")
            break
        case 3:
            alert ("Lamento haber escuchado eso, estoy seguro de que mañana sera un mejor día " + nombre + ".")
            break
        case 4:
            alert ("Ohh!! Lo siento mucho, te prometo que las cosas podrán salir mejor y las buenas ya vendrán a su tiempo " + nombre + ".")
        default:
            alert("Lo siento por haberte molestado, si algún día quieres volver a hablar conmigo regresa, yo aquí estaré " + nombre + ".")
            break
    }
}

function regalo() {
    alert("Quiero hacerte un regalo")

    let productos = Number(prompt("¿Que quieres que te regale " + nombre + "?." +"\n1-Una Coca \n2-Una Remera \n3-Un chocolate \n4-Alfajores"))

    switch (productos) {
        case 1:
            alert ("De nada por la coca-cola que la disfrutes. Ha de ser muy refrescante.")
            break
        case 2:
            alert ("Es una muy linda remera te queda muy bien. marcará el comienzo de un nuevo look")
            break
        case 3:
            alert ("Que rico el chocolate de lo mas rico del mundo, que lo disfrutes.")
            break
        case 4:
            alert ("No a cualquier persona le regalo un alfajor, porque la mayoria de las veces lo como antes jajaja")
        default:
            alert("Uhh lo siento! no se me ocurre que otra cosa pueda gustarte.")
    }
}

function despedida() {
    alert("Espero hayas disfrutado de nuestra hermosa charla y de mi regalo.")

    let saludo = Number(prompt("Dime. ¿haz disfrutado de tu día conmigo? \n1-Sí. Gracias por escucharme y por tu regalo \n2-No,lo siento gracias por el regalo igual."))

    if(saludo == 1) {
        alert ("¡Me alegro! " + nombre + "." + " Espero que volvamos a vernos amigo/a.")
    } else if (saludo == 2) {
        alert ("No me agradezcas por el regalo, las cosas van y vienen " + nombre + " yo solo buscaba tener un lindo recuerdo contigo. Adiós.")
    }

    alert("y así fue como hablamos por primera vez...")
}

document.addEventListener("keydown") , function(event) {
    if (event.key === 'escape' || event.keyCode === 27){
        console.log("El usuario presiono escape")
    }
}

// funciones
hablandoUsuario()
regalo()
despedida()

