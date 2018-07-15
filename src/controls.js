module.exports.setupPaddleControls = function setupPaddleControls() {
  const velocity = 500;
  this.input.keyboard.on('keydown_A', () => {
    this.Paddle.setVelocityX(-1 * velocity);
  });

  this.input.keyboard.on('keydown_D', () => {
    this.Paddle.setVelocityX(velocity);
  });

  this.input.keyboard.on('keyup_A', () => {
    this.Paddle.setVelocityX(0);
  });

  this.input.keyboard.on('keyup_D', () => {
    this.Paddle.setVelocityX(0);
  });
}