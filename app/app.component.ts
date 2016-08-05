import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {BooksComponent} from './books.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './likes.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweets.component';
import {ZippyComponent} from './zippy.component';


@Component({
    selector: 'my-app',
    styles: [`
    	.panel-body {
    		border-bottom: 1px solid lightgray;
    	}
    `],
    template: `
    	<!-- <h1>My First Angular 2 App</h1>
    	<courses></courses>
    	<books></books>
    	<stars></stars>
    	<likes [total]="tweet.total" [isLiked]="tweet.isLiked"></likes>
    	<votes [totalVote]="votes.total" [myVote]="votes.myVote" (vote)="onVote($event)"></votes>
    	<tweets></tweets> -->
    	<zippy title="Header1">
    		<div class="panel-body">Testin123</div>
    		<div class="panel-body">3123123</div>
    		<div class="panel-body">asfqoigo</div>
    	</zippy>
    	<zippy title="Header2">
    		<div class="panel-body">Testin123</div>
    		<div class="panel-body">3123123</div>
    	</zippy>
    `,
    directives: [
    	CoursesComponent, AuthorsComponent, BooksComponent, 
    	StarComponent, LikeComponent, VoteComponent, TweetComponent,
    	ZippyComponent
    ]
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
