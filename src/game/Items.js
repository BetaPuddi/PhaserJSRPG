// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Items extends ScriptNode {
  constructor(parent, name, description, value) {
    super(parent);

    /* START-USER-CTR-CODE */
    // Write your code here.
    this.name = name;
    this.description = description;
    this.value = value;
    this.pickedUp = false;
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
class Gold extends Items {
  constructor(name, description, amt) {
    super("Gold", "Gold currency used for trade.", amt);
    this.amt = amt;
  }
}

class Weapon extends Items {
  constructor(name, description, value, damage) {
    super(name, description, value);
    this.damage = damage;
  }
}

class Rock extends Weapon {
  constructor(name, description, value, damage) {
    super("Rock", "A decent rock for smashing things.", 0, 5);
  }
}

class Dagger extends Weapon {
  constructor(name, description, value, damage) {
    super("Dagger", "A sharp dagger.", 3, 8);
  }
}
