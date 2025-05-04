/**
 * MainScene - The primary scene for our game
 * This class handles all the main game logic, rendering, and interactions
 */
export default class MainScene extends Phaser.Scene {
  constructor() {
    // Scene key - used to start or reference this scene
    super('MainScene');

    // Initialize any properties here
    this.score = 0;
  }

  /**
   * Preload - Called before the scene is created
   * Use this to load assets (images, sounds, etc.)
   */
  preload() {
    // Load the Phaser logo image
    this.load.image('logo', 'assets/images/phaser-logo-200x150.png');

    // Load a sound effect for clicking
    this.load.audio('click', 'assets/sounds/mixkit-sci-fi-click-900.wav');
  }

  /**
   * Create - Called once after preload is complete
   * Use this to create game objects and set up the scene
   */
  create() {
    // Add a title
    this.add.text(400, 100, 'Hello Phaser!', {
      font: '64px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add background details or instructions
    this.add.text(400, 180, 'My First Phaser Game', {
      font: '24px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add the Phaser logo image to the center of the screen
    this.logo = this.add.image(400, 300, 'logo');

    // Make the logo interactive
    this.logo.setInteractive();

    // Add click handler
    this.logo.on('pointerdown', () => {
      console.log('Logo clicked!');

      // Play sound when clicked
      this.sound.play('click');

      // Update score
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`);

      // Update animation speed based on score
      this.updateTweenSpeed();
    });

    // Add hover effects
    this.logo.on('pointerover', () => {
      this.logo.setScale(1.1);  // Make logo slightly bigger on hover
    });

    this.logo.on('pointerout', () => {
      this.logo.setScale(1.0);  // Return to normal size when not hovering
    });

    // Add a score display
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      font: '32px Arial',
      fill: '#ffffff'
    });

    // Add instructions
    this.add.text(400, 500, 'Click the logo to increase your score!', {
      font: '18px Arial',
      fill: '#ffffff'
    }).setOrigin(0.5);

    // Add side to side animation
    this.logoTween = this.tweens.add({
      targets: this.logo,
      x: 600,
      duration: 1500, // Initial speed
      ease: 'Sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }

  /**
   * UpdateTweenSpeed - Updates the animation speed based on the current score

   */
  updateTweenSpeed() {
    // Speed up the animation based on user score
    const newDuration = Math.max(400, 1500 - this.score * 10);
    this.logoTween.timeScale = 1500 / newDuration;
  }

  /**
   * Update - Called every frame
   * Use this for gameplay logic, movement, etc.
   * @param {number} time - Current time
   * @param {number} delta - Time since last frame
   */
  update(time, delta) {
    // The time parameter is the total elapsed time in milliseconds
    // The delta parameter is the time elapsed since the last frame

    // This is where you'd put code that needs to run every frame
    // For example, checking for collisions, movement, etc.

    // For now, we'll leave it empty or add basic debugging
    // console.log('Update called', time, delta);
  }
}
