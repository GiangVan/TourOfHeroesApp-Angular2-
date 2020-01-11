import { environment } from "../environments/environment";
if (environment.isAlertBackTrace) alert("app.component");
import { Component } from "@angular/core";
import { TestComponent } from "./components/test/test.component";
import { TestService } from "./services/test.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html"
})
export class AppComponent {
	varr: string = "hello world";
	title: string = "Angular Tour Of Heroes";
	test: TestService;
	testt: TestComponent;
	constructor() {
		if (environment.isAlertBackTrace) alert("AppComponent");
		this.test = new TestService();
	}
}
