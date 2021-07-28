function Particle(x, y, hue, isExploding = false) {
  this.pos = createVector(x, y);
  this.isExploding = isExploding;
  this.lifespan = 255;
  this.hue = hue;

  if (this.isExploding) {
    this.vel = createVector(0, random(-10, -8));

  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 10));
  }

  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force)
  }

  this.update = function() {

    if (!this.isExploding) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    };

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.isExploding) {
      strokeWeight(2);
      stroke(hue, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hue, 255, 255);
    }

    point(this.pos.x, this.pos.y)
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    }

    return false;
  }
}
