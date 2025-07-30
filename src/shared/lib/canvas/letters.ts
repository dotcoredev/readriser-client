import { Application, Container, Text } from "pixi.js";
import { englishAlphabet, russianAlphabet } from "./alphabets";

export class Letters {
	private app: Application;
	private letters: Letter[];
	private container: Container = new Container();

	constructor(app: Application) {
		this.app = app;
		this.app.stage.addChild(this.container);
		this.letters = [];
	}

	start() {
		this.generateLetters();
		this.animate();
	}

	animate() {
		this.app.ticker.add(() => {
			this.letters.forEach((letter) => {
				letter.update();
				letter.draw();
			});
		});
	}

	generateLetters() {
		for (let i = 0; i < 150; i++) {
			const letter = new Letter(this.app);
			this.container.addChild(letter);
			this.letters.push(letter);
		}
	}
}

class Letter extends Text {
	private app: Application;
	private speed: number;
	private letter: string;
	private center: { x: number; y: number };

	constructor(app: Application) {
		super();
		this.app = app;
		this.speed = Math.random() * 0.1 + 0.045;
		this.letter = this.getRandomLetter();
		this.center = {
			x: this.app.screen.width / 2,
			y: this.app.screen.height / 2,
		};

		this.x = Math.random() * this.app.screen.width;
		this.y = Math.random() * this.app.screen.height;
		this.rotation = Math.random() * Math.PI * 2;
		this.randomTextStyle();
	}

	randomTextStyle() {
		this.style.fill = `hsl(${Math.random() * 120}, ${
			Math.random() * 10
		}%, ${Math.random() * 50 + 45}%)`;
		this.style.fontSize = Math.random() * 25 + 5;
		this.style.fontFamily =
			Math.random() < 0.5
				? "Arial, sans-serif"
				: "Courier New, monospace";
		this.style.fontWeight = Math.random() < 0.5 ? "bold" : "normal";
	}

	randomOutsidePosition() {
		const side = Math.floor(Math.random() * 4);
		const padding = 100;

		switch (side) {
			case 0: // top
				return {
					x: Math.random() * this.app.screen.width,
					y: -padding,
				};
			case 1: // bottom
				return {
					x: Math.random() * this.app.screen.width,
					y: this.app.screen.height + padding,
				};
			case 2: // left
				return {
					x: -padding,
					y: Math.random() * this.app.screen.height,
				};
			case 3: // right
				return {
					x: this.app.screen.width + padding,
					y: Math.random() * this.app.screen.height,
				};
		}
	}

	getRandomLetter() {
		const letters = russianAlphabet.concat(englishAlphabet);
		return letters[Math.floor(Math.random() * letters.length)];
	}

	draw() {
		this.text = this.letter;
	}

	randonomizePosition() {
		const position = this.randomOutsidePosition();
		this.x = position!.x;
		this.y = position!.y;
		this.speed = Math.random() * 0.1 + 0.1;
		this.letter = this.getRandomLetter();
		this.randomTextStyle();
	}

	update() {
		const dx = this.center.x - this.x;
		const dy = this.center.y - this.y;
		const dist = Math.sqrt(dx * dx + dy * dy);

		if (dist < 170) {
			this.randonomizePosition();
		} else {
			const norm = this.speed / dist;
			this.x += dx * norm;
			this.y += dy * norm;
			this.rotation += this.speed * 0.01;
		}
	}
}
