const MIM_PARTICLE_SIZE = 0.2;
const MIM_SPEED_X = 1;
const MIM_SPEED_Y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
//define the color that we want to use for our drawing
ctx.fillStyle =" rgb(53, 72, 91)";
//prepare to draw a path
ctx.beginPath();
//draw an arc
ctx.arc(2, 3, 10, 0, Math.PI * 2);
//fill the object that we have drawn
ctx.fill();
 
class Smoke{
constructor(){
    this.particles = [];
}

add(particle){
    this.particles.push(particle);
}
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
const smoke = new Smoke();
console.log(Smoke);
window.addEventListener('mousemove', (e) => {
console.log(e);
console.log(e.clientX);
console.log(e.clientY);

//create particles and add them to the smoke particle
for (let index = 0; index < NUM_OF_PARTICLES; index++) {
    const particle = new Particle(e.clientX, e.clientY);
    smoke.add(particle);
    console.log(smoke.particles);
}



});