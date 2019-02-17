import "phaser";
import { GameScene } from "./game-scene";
import { WelcomeScene } from "./welcome-scene";

const config: GameConfig = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [WelcomeScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#18216D"
};
export class StarfallGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new StarfallGame(config);
};