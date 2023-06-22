
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Items from "../game/Items";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class game extends Phaser.Scene {

	constructor() {
		super("game");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// items
		new Items(this);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
