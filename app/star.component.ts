import { Component } from 'angular2/core';

@Component({
	selector: 'stars',
	template: `
		<h1>{{ title }}</h1>
		<i 
			class="glyphicon" 
			style="font-size: 30px;" 
			[class.glyphicon-star-empty]="isEmpty" 
			[class.glyphicon-star]="!isEmpty" 
			(click)="onClick()">
		</i>
	`
})
export class StarComponent{
	title = "Stars";
	isEmpty = false;

	onClick() {
		this.isEmpty = !this.isEmpty;
	}
}
