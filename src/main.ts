import { k } from "./kaboomCtx";

async function gameSetup() {
  k.loadSprite("assets", "./kirby-like.png", {
    sliceX: 9,
    sliceY: 10,
    anims: {
      kirbIdle: 0,
      kirbInhaling: 1,
      kirbFull: 2,
      kirbInhaleEffect: { from: 3, to: 8, speed: 15, loop: true },
      shootingStar: 9,
      flame: { from: 36, to: 37, speed: 4, loop: true },
      guyIdle: 18,
      guyWalk: { from: 18, to: 19, speed: 4, loop: true },
      bird: { from: 27, to: 28, speed: 4, loop: true },
    },
  });

  //load map
  k.loadSprite("level-1", "./level-1.png");

  //contains logic when executed when at current scene
  // game object eg sprite, player, enemy, etc. Uses certain components that will be provided by Kaboom.js
  //rectangle passing width and height. Gets w & h to get the width and height of the sprite
  // color to set the color of the sprite, fixed to set the sprite to be static

  k.add([k.rect(k.width(), k.height()), k.color(0, 0, 0), k.fixed()]);

  k.go("level-1");
}

gameSetup();
