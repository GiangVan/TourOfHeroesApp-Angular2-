import { environment } from "../../environments/environment";
if (environment.isAlertBackTrace) alert("hero.ts");
export class Hero{
    constructor() { alert("it's not work"); }
    
	id: number;
}