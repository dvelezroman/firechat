import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from 'angularfire2/firestore';
import { Message } from '../interfaces/chat.interface';

@Injectable()
export class ChatService {
	private collection: AngularFirestoreCollection<Message>;
	constructor(private db: AngularFirestore) {}

	loadMessages() {
		this.collection = this.db.collection<Message>('chats');
		return this.collection.valueChanges();
	}

	addMessage(message: string) {
		// TODO: we need the user UID
		const data: Message = {
			name: 'Demo',
			message,
			date: new Date().getTime(),
			uid: null,
		};
		return this.collection.add(data);
	}
}
