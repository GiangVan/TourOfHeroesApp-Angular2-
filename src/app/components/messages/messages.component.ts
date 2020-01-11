import { environment } from "../../../environments/environment";
if (environment.isAlertBackTrace) alert("messages.component");
import { Component } from "@angular/core";
import { MessageService } from "../../services/message.service";

@Component({
	selector: "app-messages",
	templateUrl: "./messages.component.html"
})
export class MessagesComponent {
	messages: string[] = [];

	constructor(public messageService: MessageService) {
		this.messages = messageService.messages;
		if (environment.isAlertBackTrace) alert("MessagesComponent");
	}
}
