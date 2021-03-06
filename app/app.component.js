System.register(['angular2/core', './courses.component', './authors.component', './books.component', './star.component', './likes.component', './vote.component', './tweets.component', './zippy.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, books_component_1, star_component_1, likes_component_1, vote_component_1, tweets_component_1, zippy_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (books_component_1_1) {
                books_component_1 = books_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (likes_component_1_1) {
                likes_component_1 = likes_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweets_component_1_1) {
                tweets_component_1 = tweets_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tweet = {
                        total: 14,
                        isLiked: false
                    };
                    this.votes = {
                        total: 21,
                        myVote: 0
                    };
                }
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n    \t.panel-body {\n    \t\tborder-bottom: 1px solid lightgray;\n    \t}\n    "],
                        template: "\n    \t<!-- <h1>My First Angular 2 App</h1>\n    \t<courses></courses>\n    \t<books></books>\n    \t<stars></stars>\n    \t<likes [total]=\"tweet.total\" [isLiked]=\"tweet.isLiked\"></likes>\n    \t<votes [totalVote]=\"votes.total\" [myVote]=\"votes.myVote\" (vote)=\"onVote($event)\"></votes>\n    \t<tweets></tweets> -->\n    \t<zippy title=\"Header1\">\n    \t\t<div class=\"panel-body\">Testin123</div>\n    \t\t<div class=\"panel-body\">3123123</div>\n    \t\t<div class=\"panel-body\">asfqoigo</div>\n    \t</zippy>\n    \t<zippy title=\"Header2\">\n    \t\t<div class=\"panel-body\">Testin123</div>\n    \t\t<div class=\"panel-body\">3123123</div>\n    \t</zippy>\n    ",
                        directives: [
                            courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, books_component_1.BooksComponent,
                            star_component_1.StarComponent, likes_component_1.LikeComponent, vote_component_1.VoteComponent, tweets_component_1.TweetComponent,
                            zippy_component_1.ZippyComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map