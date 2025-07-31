import { antdThemeConfig } from "@/shared/config/antd-theme.config";
import { Application } from "pixi.js";
import { Letters } from "./letters";

export class Canvas {
	app!: Application;
	element!: HTMLDivElement;

	async init(element: HTMLDivElement) {
		if (this.app) {
			return this;
		}
		this.app = new Application();
		this.element = element;
		await this.app.init({
			background: antdThemeConfig.token.colorBgBase,
			resizeTo: this.element,
			antialias: true,
			resolution: window.devicePixelRatio,
			//hello: true,
		});

		this.element.appendChild(this.app.canvas);
		this.run();
		return this;
	}

	run() {
		if (!this.app) return;
		new Letters(this.app).start();
	}

	resize() {
		if (!this.app) return;
		this.app.renderer.resize(
			this.element.offsetWidth,
			this.element.offsetHeight
		);
	}
}
