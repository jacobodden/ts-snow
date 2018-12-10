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
    this.y = this.randBetween(0, -window.innerHeight)
    this.radius = this.randBetween(2, 5)
    this.dx = this.randBetween(-2, 2)
    this.dy = this.randBetween(0.5, 3)
    this.alpha = this.randBetween(0.1, 0.8)
  }
  randBetween (min, max) {
    return min + Math.random() * (max - min)
  }
  update () {
    this.x += this.dx
    this.y += this.dy
    if (this.y - this.radius * 2 > window.innerHeight) this.reset()
  }
}
