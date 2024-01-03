
// You can write more code here

/* START OF COMPILED CODE */

class Ground extends Phaser.Scene {

	constructor() {
		super("Ground");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// stadium
		const stadium = this.add.image(960, 540, "stadium");
		stadium.scaleX = 1.55;
		stadium.scaleY = 1.55;

		// yudiz_logo
		const yudiz_logo = this.add.image(1673, 89, "yudiz-logo");
		yudiz_logo.scaleX = 0.5;
		yudiz_logo.scaleY = 0.5;
		yudiz_logo.tintFill = true;

		// box
		this.add.image(961, 503, "box");

		// btn_start
		const btn_start = this.add.image(960, 707, "btnPlayAgain");
		btn_start.scaleX = 0.4;
		btn_start.scaleY = 0.4;

		// btnStartText
		const btnStartText = this.add.text(960, 707, "", {});
		btnStartText.setOrigin(0.5, 0.5);
		btnStartText.text = "START";
		btnStartText.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "30px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness": 4, "shadow.offsetX": 7, "shadow.offsetY": 7, "shadow.color": "#234c91ff", "shadow.blur": 7, "shadow.stroke": true });

		// btnPlayAganText_2
		const btnPlayAganText_2 = this.add.text(960, 199, "", {});
		btnPlayAganText_2.setOrigin(0.5, 0.5);
		btnPlayAganText_2.text = "YUDIZ CRICKET";
		btnPlayAganText_2.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Verdana", "fontSize": "50px", "fontStyle": "bold", "stroke": "#1741a4ff", "strokeThickness": 4, "shadow.offsetX": 7, "shadow.offsetY": 7, "shadow.color": "#234c91ff", "shadow.blur": 7, "shadow.stroke": true });

		this.btn_start = btn_start;
		this.btnStartText = btnStartText;
		this.btnPlayAganText_2 = btnPlayAganText_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_start;
	/** @type {Phaser.GameObjects.Text} */
	btnStartText;
	/** @type {Phaser.GameObjects.Text} */
	btnPlayAganText_2;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.load.html('overForm', 'assets/doms/start.html');
	}

	create() {

		this.editorCreate();
		this.oversDom = this.add.dom(961, 500).createFromCache('overForm');
		this.oversDom.setScale(2);

		const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		enterKey.on('down', () => this.startGame());
		this.btn_start.setInteractive().on('pointerup', () => this.startGame())
	}

	startGame() {
		const sOvers = this.oversDom.getChildByID('overs').value;
		var nSelectedOvers = Math.round(parseFloat(sOvers));;
		nTotalOvers = nSelectedOvers || 5.0;
		nCurrentOvers = 0;
		nTotalBallsLeft = nTotalOvers * 6;
		nTarget = (() => {
			let x = Math.ceil(
				Math.random() * (nTotalOvers * 10 + 10 - nTotalOvers * 10)
			);
			return x + nTotalOvers * 10;
		})();
		nRunsLeft = nTarget;
		this.scene.stop("Ground");
		this.scene.start("Level");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
