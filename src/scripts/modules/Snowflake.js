export class Snowflake {
  constructor () {
    this.x = 0
    this.y = 0
    this.radius = 0
    this.dx = 0
    this.dy = 0
    this.alpha = 0

    this.reset()
  }
  reset () {
    this.x = this.randBetween(0, window.innerWidth)
    this.y = this.randBetween(0, -window.innerHeight) - this.randBetween(0, 30)
    this.radius = this.randBetween(2, 5)
    this.dx = this.randBetween(-4, 4)
    this.dy = this.randBetween(2, 6)
    this.alpha = this.randBetween(0.1, 0.8)
    this.speed = this.randBetween(1, 3)
    this.t = new Date()
  }
  randBetween (min, max) {
    return min + Math.random() * (max - min)
  }
  update () {
    // this.x += this.dx
    this.x +=
      Math.sin(
        (new Date().getTime() - this.t.getTime()) / (1000 * this.speed) +
          2 *
            Math.cos(
              0.3 *
                ((new Date().getTime() - this.t.getTime()) /
                  (1000 * this.speed))
            )
      ) * this.dx
    this.y += this.dy
    if (this.y - this.radius * 2 > window.innerHeight) this.reset()
  }
}
