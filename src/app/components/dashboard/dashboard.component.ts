import { environment } from "../../../environments/environment";
if (environment.isAlertBackTrace) alert("dashboard.component");

import { Component, OnInit } from "@angular/core";
import { Hero } from "../../entities/hero";
import { HeroService } from "../../services/hero.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
	heroes: Hero[];

	getHeroes(): void {
		this.heroService.getHeroes(
			heroes => (this.heroes = heroes.slice(1, 5))
		);
	}

	constructor(private heroService: HeroService) {
		if (environment.isAlertBackTrace) alert("DashboardComponent");
	}

	ngOnInit() {
		this.getHeroes();
	}
}
