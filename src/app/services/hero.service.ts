import { environment } from "../../environments/environment";
if (environment.isAlertBackTrace) alert("hero.service");
import { Injectable } from "@angular/core";
import { Hero } from "../entities/hero";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class HeroService {
	private userUrl: string = environment.rootApiUrl + environment.userPath;
	heroes: Hero[];

	constructor(
		private messageService: MessageService,
		private httpClient: HttpClient
	) {
		if (environment.isAlertBackTrace) alert("HeroService");
	}

	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}

	getHeroes(resulve: Function) {
		if (this.heroes === undefined) {
			this.messageService.add(`fetched heros from server`);
			this.httpClient.get<Hero[]>(this.userUrl).subscribe(heroes => {
				this.heroes = heroes;
				resulve(heroes);
			});
		} else {
			this.messageService.add(`fetched heros from local`);
			resulve(this.heroes);
		}
	}

	getHero(id: number, resolve: Function) {
		if (this.heroes === undefined) {
			this.messageService.add(`fetched heros from server`);
			this.httpClient.get<Hero[]>(this.userUrl).subscribe(heroes => {
				this.heroes = heroes;
				resolve(this.heroes.find(value => value.id === id));
				this.messageService.add(`fetched hero (${id}) from local`);
			});
		} else {
			resolve(this.heroes.find(value => value.id === id));
			this.messageService.add(`fetched hero (${id}) from local`);
		}
	}
}
