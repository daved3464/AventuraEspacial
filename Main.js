//VARIABLES
//PARA EL CAMBIO DE PANTALLAS
let screen;
//PARA LAS PANTALLAS
let inicio, instrucciones, resumen;
//PARA EL ESCENARIO
let escenario, escenario2;
//PARA EL MOVIMIENTO DEL ESCENARIO
let xE, xE2, yE, vel;
//PARA LAS VIDAS
let vidas, cont;
//PARA EL PUNTAJE
let puntos, contp;
//PARA EL TIEMPO
let tiempo, contt;
//PARA EL PERSONAJE
let personaje;
//PARA LOS ENEMIGOS
let arregloE, tipoE;
let meteorito, meteorito2, meteorito3, ovni;
let carril;
let yc;
//PARA LOS COLECCIONABLES
let arregloO, tipoO;
let estrella, estrella2, escudo, vida;
/*let carril2;
let yc2;*/

function setup() {
    //TAMAÑO DEL LIENZO
    createCanvas(1200, 700);
    //INICIALIZACIÓN VARIABLES PANTALLAS
    screen = 1;
    //INICIALIZACIÓN VARIABLES ESCENARIO
    xE = 0;
    yE = 0;
    xE2 = 2218;
    vel = 10;
    //INICIALIZACIÓN VARIABLES ESCENARIO
    cont = 3;
    contt = 0;
    contp = 0;
    //INICIALIZACIÓN VARIABLES PERSONAJE
    personaje = new Personaje(100, 450);
    //INICIALIZACIÓN VARIABLES ENEMIGO
    arregloE = [];
    tipoE = Math.floor(random(0, 4));
    let enemigo;
    switch (tipoE) {
        case 0:
            enemigo = new Enemigo(meteorito, "meteorito", 500, 500);
            break;
        case 1:
            enemigo = new Enemigo(meteorito2, "meteorito2", 400, 500);
            break;
        case 2:
            enemigo = new Enemigo(meteorito3, "meteorito3", 300, 500);
            break;
        case 3:
            enemigo = new Enemigo(ovni, "ovni", 200, 500);
            break;
    }
    arregloE.push(enemigo);

    carril = Math.floor(random(0, 3));
    switch (carril) {
        case 0:
            yc = 50;
            break;
        case 1:
            yc = 250;
            break;
        case 2:
            yc = 450;
            break;
        default:
            break;
    }

    //INICIALIZACIÓN VARIABLES COLECCIONABLES
    arregloO = [];
    tipoO = Math.floor(random(0, 2));
    let objeto;
    switch (tipoO) {
        case 0:
            objeto = new Coleccionables(estrella, "estrella", 1000, 500);
            break;
        /*case 1:
            objeto = new Coleccionables(estrella2, "estrella2", 1100, 500);
            break;
        case 2:
            objeto = new Coleccionables(escudo, "escudo", 300, 500);
            break;
        case 3:
            objeto = new Coleccionables(vida, "vida", 200, 500);
    break;*/}
    arregloO.push(objeto);

    /*  carril2 = Math.floor(random(0, 3));
      switch (carril2) {
          case 0:
              yc2 = 50;
              break;
          case 1:
              yc2 = 250;
              break;
          case 2:
              yc2 = 450;
              break;
          default:
              break;
      }*/
}

function preload() {
    //CARGA DE IMAGENES PARA EL ESCENARIO
    escenario = loadImage("anexos/escenario.jpg");
    escenario2 = loadImage("anexos/escenario2.jpg");
    vidas = loadImage("anexos/vidas.png");
    puntos = loadImage("anexos/puntaje.png");
    tiempo = loadImage("anexos/tiempo.png");
    //CARGA DE IMAGENES PARA LAS PANTALLAS
    inicio = loadImage("anexos/inicio.jpg");
    instrucciones = loadImage("anexos/instrucciones.jpg");
    resumen = loadImage("anexos/resumen.png");
    //CARGA DE IMAGENES PARA LOS ENEMIGOS
    meteorito = loadImage("anexos/meteorito.png");
    meteorito2 = loadImage("anexos/meteorito2.png");
    meteorito3 = loadImage("anexos/meteorito3.png");
    ovni = loadImage("anexos/ovni.png");
    //CARGA DE IMAGENES PARA LOS COLECCIONABLES
    estrella = loadImage("anexos/estrella.png");
    estrella2 = loadImage("anexos/estrella2.png");
    escudo = loadImage("anexos/escudo.png");
    vida = loadImage("anexos/vidas.png");
}


function draw() {
    //CAMBIO DE PANTALLA
    switch (screen) {
        case 1:
            image(inicio, 0, 0);
            break;

        case 2:
            image(instrucciones, 0, 0);
            break;

        case 3:
            //MOVIMIENTO ESCENARIO 
            image(escenario, xE, 0);
            image(escenario2, xE2, 0);

            if (xE == -(2220 - 1200)) {
                xE2 = 1200;
            }

            xE2 -= vel;
            xE -= vel;

            if (xE2 == -(2220 - 1200)) {
                xE = 1200;
            }

            //APARICIÓN DEL PERSONAJE
            personaje.dibujarCohete();

            //APARICIÓN DE LOS ENEMIGOS
            for (let i = 0; i < arregloE.length; i++) {

                let e = arregloE[i];
                e.dibujarEnemigo();
                e.moverEnemigo();

                if (arregloE[i].posX < -1400) {
                    arregloE.splice(i, 1);
                }
            }

            if (frameCount % 35 == 0) {
                let crearEnemigo = Math.floor(random(1, 10)) % 2 == 0;

                if (crearEnemigo) {
                    carril = Math.floor(random(0, 3));
                    switch (carril) {
                        case 0:
                            yc = 50;
                            break;
                        case 1:
                            yc = 250;
                            break;
                        case 2:
                            yc = 450;
                            break;
                        default:
                            break;
                    }


                    let tipo = Math.floor(random(0, 4));

                    switch (tipo) {
                        case 0:
                            let e1 = new Enemigo(meteorito, "meteorito", 1200, yc);
                            arregloE.push(e1);
                            e1.dibujarEnemigo();
                            e1.moverEnemigo();
                            break;
                        case 1:
                            let e2 = new Enemigo(meteorito2, "meteorito2", 1200, yc);
                            arregloE.push(e2);
                            e2.dibujarEnemigo();
                            e2.moverEnemigo();
                            break;
                        case 2:
                            let e3 = new Enemigo(meteorito3, "meteorito3", 1200, yc);
                            arregloE.push(e3);
                            e3.dibujarEnemigo();
                            e3.moverEnemigo();
                            break;
                        case 3:
                            let e4 = new Enemigo(ovni, "ovni", 1200, yc);
                            arregloE.push(e4);
                            e4.dibujarEnemigo();
                            e4.moverEnemigo();
                            break;
                        default:
                            break;
                    }
                }
            }

            //APARICIÓN DE LOS COLECCIONABLES
            for (let i = 0; i < arregloO.length; i++) {

                let o = arregloO[i];
                o.dibujarObjeto();
                o.moverObjeto();

                if (dist(personaje.posX + 200, personaje.posY, o.posX, o.posY) < 2000) {
                    if (o.name == "estrella") {
                        contp += 25;
                    }

                    if (o.name == "estrella2") {
                        contp += 50;
                    }
                    if (o.name == "vida") {
                        cont += 1;
                    }

                    arregloO.splice(i, 1);
                }

                if (arregloO[i].posX < -1800) {
                    arregloO.splice(i, 1);
                }
            }

            if (frameCount % 60 == 0) {
                let crearObjeto = Math.floor(random(1, 10)) % 2 == 0;

                if (crearObjeto) {

                    let tipoO = Math.floor(random(0, 2));
                    if (tipoO == 0) {
                        let o1 = new Coleccionables(estrella, "estrella", 1200, yc);
                        arregloO.push(o1);
                        o1.dibujarObjeto();
                        o1.moverObjeto();
                        console.log(o1.posX);
                        console.log("y", o1.posY);

                    }
                    /*  switch (tipoO) {
                          case 0:
                              let o1 = new Coleccionables(estrella, "estrella", 1200, yc);
                              arregloO.push(o1);
                              o1.dibujarObjeto();
                              o1.moverObjeto();
                              break;
                          case 1:
                              let o2 = new Coleccionables(estrella2, "estrella2", 1200, yc);
                              arregloO.push(o2);
                              o2.dibujarObjeto();
                              o2.moverObjeto();
                              break;
                              case 2:
                                  let o3 = new Coleccionables(escudo, "escudo", 1200, yc2);
                                  arregloO.push(o3);
                                  o3.dibujarObjeto();
                                  o3.moverObjeto();
                                  break;
                              case 3:
                                  let o4 = new Coleccionables(vida, "vida", 1200, yc2);
                                  arregloO.push(o4);
                                  o4.dibujarObjeto();
                                  o4.moverObjeto();
                                  break;
                          default:
              break;
                  }*/


                }
            }


            //CONTENIDO DEL ESCENARIO 
            image(vidas, 15, 15);
            fill(255);
            textSize(50);
            text("x", 126, 60);
            text(cont, 160, 60);
            image(puntos, 950, 30);
            textSize(25);
            text(contp, 1060, 55);
            image(tiempo, 15, 116);
            textSize(25);
            text(contt, 130, 142);
            //PARA EL TIEMPO
            if (frameCount % 60 == 0) {
                contt++;
            }
            break;

        case 4:
            background(18, 37, 97);
            imageMode(CENTER);
            image(resumen, 600, 350);
            textSize(25);
            text(contt, 575, 318);
            break;

        default:
            break;
    }
}

//MOVIMIENTO PERSONAJE 12 casillas  x100  x250 x450
function keyPressed() {
    //MOVIMIENTO DE LA NAVE
    if (keyCode == UP_ARROW && personaje.posY > 50) {
        personaje.posY -= 200;
    } else if (keyCode == DOWN_ARROW && personaje.posY < 450) {
        personaje.posY += 200;
    }
}

function mousePressed() {
    //CONDICIONES PARA EL CAMBIO DE PANTALLA
    if (screen == 1 && mouseX > 739 && mouseX < 1015 && mouseY > 281 && mouseY < 478) {
        screen = 3;
    }

    if (screen == 1 && mouseX > 744 && mouseX < 1004 && mouseY > 523 && mouseY < 621) {
        screen = 2;
    }

    if (screen == 2 && mouseX > 1048 && mouseX < 1141 && mouseY > 46 && mouseY < 115) {
        screen = 3;
    }

    if (screen == 4 && mouseX > 525 && mouseX < 660 && mouseY > 360 && mouseY < 510) {
        imageMode(CORNER);
        screen = 1;
        contt = 0;
        contp = 0;
        cont = 3;
        arregloE = [];
        arregloO = [];
    }

    if (screen == 3 && mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY < 50) {
        screen = 4;
    }
}