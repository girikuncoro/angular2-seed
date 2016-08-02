import { Component } from 'angular2/core';

@Component({
	selector: 'books',
	template: `
		<input type="text" [(ngModel)]="title">
		{{ title }}
		<button class="btn btn-primary" (click)="onClick($event)">Clear!</button>
	`
})
export class BooksComponent {
	title = "harry potter";
	onClick($event){
		console.log("clicked!");
		this.title = '';
	}
}
