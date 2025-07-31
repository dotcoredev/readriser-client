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
	private statusRotation: number;
	private elementGravity: HTMLDivElement;

	constructor(app: Application) {
		super();
		this.elementGravity = document.getElementById(
			"avatarUser"
		) as HTMLDivElement;
		this.app = app;
		this.speed = Math.random() * 0.1 + 0.045;
		this.letter = this.getRandomLetter();
		this.center = {
			x: this.elementGravity.getBoundingClientRect().x + 50,
			y: this.elementGravity.getBoundingClientRect().y + 50,
		};
		this.statusRotation = Math.random();
		this.x = Math.random() * this.app.screen.width;
		this.y = Math.random() * this.app.screen.height;
		this.rotation = Math.random() * Math.PI * 2;
		this.randomTextStyle();
	}

	randomTextStyle() {
		this.style.fill = `hsl(${Math.random() * 75}, ${
			Math.random() * 40 + 40
		}%, ${Math.random() * 10 + 70}%)`;
		this.style.fontSize = Math.random() * 30 + 5;
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
		this.statusRotation = Math.random();
		this.randomTextStyle();
	}

	update() {
		this.center = {
			x: this.elementGravity.getBoundingClientRect().x + 50,
			y: this.elementGravity.getBoundingClientRect().y + 50,
		};

		const dx = this.center.x - this.x;
		const dy = this.center.y - this.y;
		const dist = Math.sqrt(dx * dx + dy * dy);

		if (dist < 0.3) {
			this.randonomizePosition();
		} else {
			const norm = this.speed / dist;
			this.x += dx * norm;
			this.y += dy * norm;
			if (this.statusRotation > 0.5) {
				this.rotation += this.speed * 0.01;
			} else {
				this.rotation -= this.speed * 0.01;
			}
		}
	}
}
