const canvas = document.querySelector('canvas');
const board = canvas.getContext('2d');
const body = document.querySelector('body');

canvas.width = 64 * 16;
canvas.height = 64 * 9;

// Properti pemain
const playerProperty = {
    width: 50,
    height: 50,
    speed: 1,
    image: { src: '/src/assets/logo-spinner.png' },
    position: {
        x: 150,
        y: canvas.height - 130 // Menyesuaikan posisi vertikal
    }
};

// Properti musuh
const enemyProperties = [
    { width: 50, height: 200, speed: 2, color: 'red', position: { x: canvas.width - 50, y: canvas.height - 200 } },
    { width: 50, height: 400, speed: 2, color: 'red', position: { x: canvas.width + 150, y: canvas.height - 500 } },
    { width: 50, height: 500, speed: 2, color: 'red', position: { x: canvas.width + 350, y: canvas.height - 600 } },
    { width: 50, height: 400, speed: 2, color: 'red', position: { x: canvas.width + 550, y: canvas.height - 400 } },
    { width: 50, height: 400, speed: 2, color: 'red', position: { x: canvas.width + 750, y: canvas.height - 550 } },
    { width: 50, height: 200, speed: 2, color: 'red', position: { x: canvas.width - 50, y: canvas.height - 600 } }
];

// Membuat objek Ground, Player, dan Enemy
const ground = new Ground('/src/assets/back-street1.jpeg', canvas.width, canvas.height);
const player = new Player(playerProperty);
const enemies = enemyProperties.map(props => new Enemy(props)); // Menggunakan map untuk membuat array musuh

let gameOver = false;

function detectCollision(player, enemy) {
    return (
        player.position.x < enemy.position.x + enemy.width &&
        player.position.x + player.width > enemy.position.x &&
        player.position.y < enemy.position.y + enemy.height &&
        player.position.y + player.height > enemy.position.y
    );
}

function animate() {
    if (gameOver) {
        console.log("Game Over");
        return; // Hentikan animasi jika game over
    }

    board.clearRect(0, 0, canvas.width, canvas.height);
    ground.create();
    player.create();

    // Menggambar dan memperbarui semua musuh
    enemies.forEach(enemy => {
        enemy.create();
        enemy.update();
        if (detectCollision(player, enemy)) {
            gameOver = true; // Set game over jika terjadi tabrakan
        }
    });

    player.update();
    window.requestAnimationFrame(animate);
}

// Event listener untuk mendeteksi input keyboard
window.addEventListener('keydown', function(callback) {
    switch (callback.key) {
        case ' ':
            player.jump();
            break;
        default:
            break;
    }
});

animate();
