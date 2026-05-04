const MIM_PARTICLE_SIZE = 0.2;
const MIM_SPEED_X = 1;
const MIM_SPEED_Y = 1;
const NUM_OF_PARTICLES = 10;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");


class Smoke {
    constructor() {
        this.particles = [];
    }

    add(particle) {
        this.particles.push(particle);
    }

    animate() {
        for (let index = 0; index < this.particles.length; index++) {
            //update the states of the particles and draw it to the screen
            this.particles[index].update();
        }
        requestAnimationFrame(animate);
    }
}
class Particle {
    constructor(x, y) {
        this.size = Math.random() * 2 + MIM_PARTICLE_SIZE;
        this.color = 'rgb(161, 170, 238)';
        this.speedX = Math.random() * 2 + MIM_SPEED_X;
        this.speedY = Math.random() * 2 + MIM_SPEED_Y;
        this.x = Math.random() * 2 + x;
        this.y = Math.random() * 2 + y;
    }

    //update the current states of a particle
    update() {
        this.size -= -1;
        //this.size = this.size -1;

        this.draw();
    }

    draw() {
        //define the color that we want to use for our drawing
        ctx.fillStyle = this.color;
        //prepare to draw a path
        ctx.beginPath();
        //draw an arc
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        //fill the object that we have drawn
        ctx.fill();
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

smoke.animate();