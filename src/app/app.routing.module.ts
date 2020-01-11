import { environment } from "../environments/environment";
if (environment.isAlertBackTrace) alert("app.routing.module");
import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

const routes: Route[] = [
	{ path: "", redirectTo: "dashborad", pathMatch: "full" },
	{ path: "heroes", component: HeroesComponent },
	{ path: "dashborad", component: DashboardComponent },
	{ path: "hero/:id", component: HeroDetailComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
	constructor() {
		if (environment.isAlertBackTrace) alert("AppRoutingModule");
	}
}
