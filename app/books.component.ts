import { Component } from 'angular2/core';

@Component({
	selector: 'books',
	template: `
		<h1>{{ title }}</h1>
		<input type="text" [(ngModel)]="desc">
		{{ desc }}
		<button class="btn btn-primary" (click)="onClick($event)">Clear!</button>
	`
})
export class BooksComponent {
	title = "Books"
	desc = "harry potter";
	onClick($event){
		console.log("clicked!");
		this.desc = '';
	}
}
