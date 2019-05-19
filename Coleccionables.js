class Coleccionables {
    constructor(imagen, name, posX, posY) {
        this.imagen = imagen;
        this.name = name;
        this.posX = posX;
        this.posY = posY;

    }

    dibujarObjeto() {
        image(this.imagen, this.posX /*+ 1200*/, this.posY);
    }

    moverObjeto() {
        this.posX += -10;
    }
}