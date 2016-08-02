import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
	selector: 'votes',
	template: `
		<h1>{{ title }}</h1>
		<div>
			<i class="glyphicon glyphicon-chevron-up" [class.voted]="myVote == 1" (click)="upVote()"></i>
			<span>{{ totalVote + myVote }}</span>
			<i class="glyphicon glyphicon-chevron-down" [class.voted]="myVote == -1" (click)="downVote()"></i>
		</div>
	`,
	styles: [`
		div {
			width: 20px;
			text-align: center;
			font-size: 30px;
			margin-left: 30px;
		}
		span, i {
			display: block;
		}
		i.glyphicon {
			cursor: pointer;
		}
		.voted {
			color: darkorange;
		}
	`]
})
export class VoteComponent {
	title = "Votes";
	@Input() totalVote = 0;
	@Input() myVote = 0;

	@Output() vote = new EventEmitter();

	upVote() {
		if(this.myVote == 1)
			return;
		this.myVote++;
		this.vote.emit({ myVote: this.myVote + this.totalVote });
	}

	downVote() {
		if(this.myVote == -1)
			return;
		this.myVote--;
		this.vote.emit({ myVote: this.myVote + this.totalVote });
	}
}
