import { environment } from "../../../environments/environment";
if (environment.isAlertBackTrace) alert("test.component");
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-test",
	templateUrl: "./test.component.html"
})
export class TestComponent implements OnInit {
	constructor() {
		if (environment.isAlertBackTrace) alert("TestComponent");
	}

	ngOnInit() {}
}
