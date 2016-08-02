System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.title = "Likes";
                    this.total = 0;
                    this.isLiked = false;
                }
                LikeComponent.prototype.onClick = function () {
                    this.total += !this.isLiked ? 1 : -1;
                    this.isLiked = !this.isLiked;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "total", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "isLiked", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'likes',
                        template: "\n\t\t<h2>{{ title }}</h2>\n\t\t<i \n\t\t\tclass=\"glyphicon glyphicon-heart\" \n\t\t\t[class.liked]=\"isLiked\" \n\t\t\t(click)=\"onClick()\">\n\t\t</i>\n\t\t<span>{{ total }}</span>\n\t",
                        styles: ["\n\t\t.glyphicon-heart {\n\t\t\tfont-size: 25px;\n\t\t\tcolor: #ccc;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.liked {\n\t\t\tcolor: deeppink;\n\t\t}\n\t"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=likes.component.js.map