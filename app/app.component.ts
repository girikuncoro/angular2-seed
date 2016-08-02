import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {BooksComponent} from './books.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './likes.component';
import {VoteComponent} from './vote.component';


@Component({
    selector: 'my-app',
    template: `
    	<h1>My First Angular 2 App</h1>
    	<courses></courses>
    	<books></books>
    	<stars></stars>
    	<likes [total]="tweet.total" [isLiked]="tweet.isLiked"></likes>
    	<votes [totalVote]="votes.total" [myVote]="votes.myVote" (vote)="onVote($event)"></votes>`,
    directives: [CoursesComponent, AuthorsComponent, BooksComponent, StarComponent, LikeComponent, VoteComponent]
})
export class AppComponent {
	tweet = {
		total: 14,
		isLiked: false
	}
	votes = {
		total: 21,
		myVote: 0
	}
	onVote($event) {
		console.log($event);
	}
}
