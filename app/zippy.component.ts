import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	template: `
		<div class="panel panel-default">
		  	<div class="panel-heading" (click)="onClick()">
		  	  <h3 class="panel-title">{{ title }} 
			  	  <span class="pull-right">
			  	  	<i 
			  	  		class="glyphicon" 
			  	  		[ngClass]="{ 'glyphicon-chevron-down': !isOpened,
			  	  					 'glyphicon-chevron-up': isOpened }">
			  	  	</i>
			  	  </span>
			  </h3>
		  	</div>
		  	<div class="panel-wrapper" [hidden]="!isOpened">
		  		<ng-content></ng-content>
		  	</div>
		</div>
	`,
	styles: [`
		.panel-heading h3 {
			cursor: pointer
		}
	`]
})
export class ZippyComponent {
	isOpened = false;
	@Input() title: string;

	onClick() {
		this.isOpened = !this.isOpened;
		console.log("Clicked!", this.isOpened);
	}
}