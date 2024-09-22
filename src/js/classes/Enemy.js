class Enemy {
    constructor(props){
        this.width = props.width
        this.height = props.height
        this.speed = props.speed
        this.color = props.color
        this.position = {
            x: props.position.x,
            y: props.position.y
        }
    }

    create(){
        board.fillStyle = this.color
        board.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(){
        this.position.x -= this.speed

        if(this.position.x <= 0){
            this.position.x = canvas.width - 50
        }
    }
}