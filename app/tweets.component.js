System.register(['angular2/core', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n\t\t<h2>Tweets</h2>\n\t\t<ul class=\"media-list\">\n\t\t  <li class=\"media\" *ngFor=\"#tweet of tweets\">\n\t\t    <div class=\"media-left\">\n\t\t      <a href=\"#\">\n\t\t        <img class=\"media-object\" [src]=\"tweet.src\">\n\t\t      </a>\n\t\t    </div>\n\t\t    <div class=\"media-body\">\n\t\t      <h4 class=\"media-heading\">{{ tweet.title }}</h4>\n\t\t      <p>{{ tweet.sentence }}</p>\n\t\t    </div>\n\t\t  </li>\n\t\t</ul>\n\t",
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map