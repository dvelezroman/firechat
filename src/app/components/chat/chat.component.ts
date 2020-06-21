import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styles: [],
})
export class ChatComponent {
	public messages: Observable<any[]>;
	message: string = '';

	constructor(public _chatService: ChatService) {
		this.messages = this._chatService.loadMessages();
	}

	printText(event) {
		console.log(event);
	}

	sendMessage() {
		if (this.message.length) {
			this._chatService
				.addMessage(this.message)
				.then(() => {
					console.log('Message sent...');
				})
				.catch(() => {
					console.log('Error in sending message...');
				});
		}
		return;
	}
}
