class Revolver extends Gun {
  constructor(){
    super();
    this.cooldown = 60;
    this.texture = PIXI.loader.resources["res/img/revolver.png"].texture;
    this.ammo = 25;
    this.ammomultiplier = 25;
  }
  shoot(player){
      if(this.time>=this.cooldown && this.ammo > 0){
        // Take 1 off ammo
        this.ammo--;
        // Spawn bullet
        let b = new Bullet(PIXI.loader.resources["res/img/bullet.png"].texture, player.direction, player.x, player.y, true);
        // Reset gun cooldown timer
        this.time = 0;
        // Add bullet to stage
        app.stage.addChild(b);
      }
  }
}
