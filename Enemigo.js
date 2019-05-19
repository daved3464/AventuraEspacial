class Enemigo {
    constructor(imagen, name, posX, posY) {
        this.imagen = imagen;
        this.name = name;
        this.posX = posX;
        this.posY = posY;

    }

    dibujarEnemigo() {
        image(this.imagen, this.posX + 1200, this.posY);
    }

    moverEnemigo() {
        this.posX += -10;
    }
}