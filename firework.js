function Firework() {

  this.fireworkLaunching = true;
  this.particles = [];
  this.hue = random(255)
  this.firework = new Particle(random(width), height, hue, true);

  this.update = function() {
    if (this.fireworkLaunching) {
      this.firework.applyForce(gravity)
      this.firework.update();

      if (this.firework.vel.y >= 0) {
        this.fireworkLaunching = false;
        this.explode();
      }
    } else {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        if (this.particles[i]?.done()) {
          this.particles.splice(i, 1)
        }
      }
    }
  }

  this.show = function() {
    if (this.fireworkLaunching) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  };

  this.explode = function() {
    for (let i = 0; i < 100; i++) {
      const particle = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue);
      this.particles.push(particle);
    }
  }

  this.done = function() {
    if (!this.fireworkLaunching && this.particles.length === 0) {
      return true;
    }

    return false;
  }
}
