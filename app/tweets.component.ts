import { Component } from 'angular2/core';
import { TweetService } from './tweet.service';

@Component({
	selector: 'tweets',
	template: `
		<h2>Tweets</h2>
		<ul class="media-list">
		  <li class="media" *ngFor="#tweet of tweets">
		    <div class="media-left">
		      <a href="#">
		        <img class="media-object" [src]="tweet.src">
		      </a>
		    </div>
		    <div class="media-body">
		      <h4 class="media-heading">{{ tweet.title }}</h4>
		      <p>{{ tweet.sentence }}</p>
		    </div>
		  </li>
		</ul>
	`,
	providers: [TweetService]
})
export class TweetComponent {
	tweets: {}[];

	constructor(tweetService: TweetService) {
		this.tweets = tweetService.getTweets();
	}
}