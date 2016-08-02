import { Component, Input } from 'angular2/core';

@Component({
	selector: 'likes',
	template: `
		<h2>{{ title }}</h2>
		<i 
			class="glyphicon glyphicon-heart" 
			[class.liked]="isLiked" 
			(click)="onClick()">
		</i>
		<span>{{ total }}</span>
	`,
	styles: [`
		.glyphicon-heart {
			font-size: 25px;
			color: #ccc;
			cursor: pointer;
		}
		.liked {
			color: deeppink;
		}
	`] 
})
export class LikeComponent{
	title = "Likes";
	@Input() total = 0;
	@Input() isLiked = false;

	onClick() {
		this.total += !this.isLiked ? 1 : -1;
		this.isLiked = !this.isLiked;
	}
}
