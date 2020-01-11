import { environment } from "../environments/environment";
if (environment.isAlertBackTrace) alert("app.module");
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HeroService } from "./services/hero.service";
import { MessageService } from "./services/message.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { MessagesComponent } from "./components/messages/messages.component";

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent,
		MessagesComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [MessageService, HeroService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		if (environment.isAlertBackTrace) alert("AppModule");
	}
}
