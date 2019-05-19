class Personaje {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.cohete = loadImage("anexos/cohete.png");
        this.cohete1 = loadImage("anexos/cohete1.png");
        this.cohete2 = loadImage("anexos/cohete2.png");
    }

    dibujarCohete() {
        image(this.cohete, this.posX + 76, this.posY);
        if (frameCount % 15 == 0) {
            image(this.cohete1, this.posX + 17, this.posY);
        } else {
            image(this.cohete2, this.posX, this.posY);
        }
    }
}