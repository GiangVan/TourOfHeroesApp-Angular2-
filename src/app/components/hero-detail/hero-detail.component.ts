import { environment } from "../../../environments/environment";
if (environment.isAlertBackTrace) alert("hero-detail.component");

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Hero } from "../../entities/hero";
import { HeroService } from "../../services/hero.service";

@Component({
	selector: "app-hero-detail",
	templateUrl: "./hero-detail.component.html"
})
export class HeroDetailComponent implements OnInit {
	hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService,
		private location: Location
	) {
		if (environment.isAlertBackTrace) alert("HeroDetailComponent");
	}

	ngOnInit(): void {
		this.getHero();
	}

	getHero(): void {
		const id = +this.route.snapshot.paramMap.get("id");
		this.heroService.getHero(id, hero => (this.hero = hero));
	}

	goBack() {
		this.location.back();
	}
}
