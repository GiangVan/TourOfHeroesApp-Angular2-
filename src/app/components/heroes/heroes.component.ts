import { environment } from "../../../environments/environment";
if (environment.isAlertBackTrace) alert("heroes.component");
import { Component, OnInit } from "@angular/core";
import { Hero } from "../../entities/hero";
import { HeroService } from "../../services/hero.service";
import { Location } from "@angular/common";

@Component({
	selector: "app-heroes",
	templateUrl: "./heroes.component.html"
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];

	constructor(private heroService: HeroService, private location: Location) {
		if (environment.isAlertBackTrace) alert("HeroesComponent");
	}

	getHeroes(): void {
		this.heroService.getHeroes(heroes => (this.heroes = heroes));
	}

	goBack() {
		this.location.back();
	}

	ngOnInit() {
		this.getHeroes();
	}
}
