Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

// Object.beget = function (o) {
//     var F = function () {
//     };
//     F.prototype = o;
//     return new F();
// };

Object.method('beget', function (o) {
    var F = function () {
    };
    F.prototype = o;
    return new F();
});

