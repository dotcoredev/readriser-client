import { antdThemeConfig } from "@/shared/config/antd-theme.config";
import { Application } from "pixi.js";
import { Letters } from "./letters";

export class Canvas {
	app: Application;

	constructor() {
		this.app = new Application();
	}

	async init(element: HTMLDivElement) {
		await this.app.init({
			background: antdThemeConfig.token.colorBgBase,
			resizeTo: window,
			//hello: true,
		});
		element.appendChild(this.app.canvas);

		return this;
	}

	run() {
		new Letters(this.app).start();
	}
}
