import { environment } from "../../environments/environment";
if (environment.isAlertBackTrace) alert("message.service");
import { Injectable } from "@angular/core";
import { DateService } from "./date.service";

@Injectable({
	providedIn: "root"
})
export class MessageService {
	messages: string[] = [];

	constructor(private dateService: DateService) {
		if (environment.isAlertBackTrace) alert("MessageService");
	}

	add(message: string) {
    let timeNow = this.dateService.now();
		this.messages = [
			`${timeNow} - ${message}`,
			...this.messages
		];
	}

	clear() {
		this.messages = [];
	}
}
