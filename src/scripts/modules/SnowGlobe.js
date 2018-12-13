import Snowflake from './Snowflake'

export default class SnowGlobe {
  constructor () {
    this.height = 0
    this.width = 0
    this.canvas = document.createElement('canvas')
    this.canvas.height = window.innerHeight
    this.canvas.width = window.innerWidth
    this.ctx = this.canvas.getContext('2d')
    this.snowflakes = []
    document.body.appendChild(this.canvas)

    window.addEventListener('resize', () => this.onResize())
    this.onResize()

    this.updateBound = this.update.bind(this)

    this.init()
  }
  init () {
    // build out our snowflakes
    for (let x = 0; x < this.width / 4; x++) {
      this.snowflakes.push(new Snowflake())
    }

    window.requestAnimationFrame(this.updateBound)
  }
  onResize () {
    this.height = window.innerHeight
    this.width = window.innerWidth
    this.canvas.height = this.height
    this.canvas.width = this.width
  }
  update () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    // clear the screen
    for (const flake of this.snowflakes) {
      flake.update()

      this.ctx.fillStyle = '#fff'
      this.ctx.beginPath()
      this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
      this.ctx.closePath()
      this.ctx.globalAlpha = flake.alpha
      this.ctx.fill()
    }

    window.requestAnimationFrame(this.updateBound)
  }
}
