class Player {
    constructor(props){
        this.width = props.width
        this.height = props.height
        this.image = new Image();  // Buat objek gambar
        this.image.src = props.image.src;  // Atur sumber gambar
        this.color = props.color
        this.speed = props.speed
        this.position = {
            x: props.position.x,
            y: props.position.y
        }    
        this.velocity = {
            x:0,
            y:0
        }
        this.heightJump = 100;
        this.gravity = 0.5;
    }

    jump() {
        this.velocity.y = -Math.sqrt(2 * this.gravity * this.heightJump)
    }

    create() {
        board.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        const ground = canvas.height - this.height
        const rightWall = canvas.width - this.width

        this.velocity.y += this.gravity
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(player.position.y > ground){
            this.position.y = ground
        } 
        if(player.position.y < 0 ){
            this.position.y = 0
        }
        if(this.position.x < 0) {
           this.velocity.x *= -1
        }
        if(this.position.x > rightWall) {
            this.velocity.x *= -1
        }
    }
}