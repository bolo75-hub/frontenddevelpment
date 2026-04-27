const MIM_PARTICLE_SIZE = 0.2;
const MIM_SPEED_X = 1;
const MIM_SPEED_Y = 1;
window.addEventListener('mousemove', (e) => {});
class smoke{
}
class Particle{
    constructor(x, y){
        this.size = Math.random() * 2 +MIM_PARTICLE_SIZE ;
        this.color = 'rgb(161, 170, 238)';
        this.speedX = Math.random() * 2 + MIM_SPEED_X;
        this.speedY = Math.random() * 2 + MIM_SPEED_Y;
        this.x = x;
        this.y = y;
    }
}