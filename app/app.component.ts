import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {BooksComponent} from './books.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './likes.component'

@Component({
    selector: 'my-app',
    template: `
    	<h1>My First Angular 2 App</h1>
    	<courses></courses>
    	<authors></authors>
    	<books></books>
    	<stars></stars>
    	<likes [total]="tweet.total" [isLiked]="tweet.isLiked"></likes>`,
    directives: [CoursesComponent, AuthorsComponent, BooksComponent, StarComponent, LikeComponent]
})
export class AppComponent {
	tweet = {
		total: 14,
		isLiked: false
	}
}
