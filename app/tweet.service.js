System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            src: "http://lorempixel.com/100/100/sports/",
                            title: "Tweet1",
                            sentence: "Lorem ipsum dolor sit amet, amet mauris ut volutpat tempus posuere, nec sed sem posuere curabitur, et vitae ultrices urna corrupti risus vestibulum, sit est ante in. Pellentesque amet ut. Pede neque nulla, laoreet metus, eget amet pede quis, vitae quam cursus, sem nam inceptos magna dui egestas leo."
                        },
                        {
                            src: "http://lorempixel.com/100/100/animals/",
                            title: "Tweet2",
                            sentence: "Lorem ipsum dolor sit amet, amet mauris ut volutpat tempus posuere, nec sed sem posuere curabitur, et vitae ultrices urna corrupti risus vestibulum, sit est ante in. Pellentesque amet ut. Pede neque nulla, laoreet metus, eget amet pede quis, vitae quam cursus, sem nam inceptos magna dui egestas leo."
                        },
                        {
                            src: "http://lorempixel.com/100/100/fashion/",
                            title: "Tweet3",
                            sentence: "Lorem ipsum dolor sit amet, amet mauris ut volutpat tempus posuere, nec sed sem posuere curabitur, et vitae ultrices urna corrupti risus vestibulum, sit est ante in. Pellentesque amet ut. Pede neque nulla, laoreet metus, eget amet pede quis, vitae quam cursus, sem nam inceptos magna dui egestas leo."
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map