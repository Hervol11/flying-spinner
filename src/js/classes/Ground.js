class Ground{
    constructor (image, width, height) {
        this.image = new Image()
        this.image.src = image
        this.width = width
        this.height =  height
        this.position = {
            x:0,
            y:0
        }
    }

    center(canvas) {
        this.position.x = (canvas.width - this.width) / 2
        this.position.y = (canvas.height - this.height) / 2
    }

    create(){
        board.drawImage(this.image, this.position.x, this.position.y)
    }

}

