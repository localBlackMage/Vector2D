window.Vector2D = (function () {
    'use strict';

    function Vector2D(x, y) {
        x = x === undefined ? 0 : x;
        y = y === undefined ? 0 : y;
        if (isNaN(x) || isNaN(y)){
            throw TypeError('Both X and Y values for a Vector2D need to be numbers.');
        }
        else {
            this.x = parseFloat(x);
            this.y = parseFloat(y);
        }
    }

    Vector2D.prototype.compare = function (other) {
        return this.x === other.x && this.y === other.y;
    };

    Vector2D.prototype.length = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };

    Vector2D.prototype.magnitude = function () {
        return this.length();
    };

    Vector2D.prototype.normalize = function (scalar) {
        scalar = scalar || 1;
        var length = this.length();
        if (length === 0) {
            return this;
        }
        else {
            return new Vector2D((this.x / length) * scalar, (this.y / length) * scalar);
        }
    };

    Vector2D.prototype.addNew = function (other) {
        return new Vector2D(this.x + other.x, this.y + other.y);
    };

    Vector2D.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
    };

    Vector2D.prototype.subNew = function (other) {
        return new Vector2D(this.x - other.x, this.y - other.y);
    };

    Vector2D.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
    };

    Vector2D.prototype.mulNew = function (scalar) {
        return new Vector2D(this.x * scalar, this.y * scalar);
    };

    Vector2D.prototype.mul = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
    };

    Vector2D.prototype.divNew = function (scalar) {
        return new Vector2D(this.x / scalar, this.y / scalar);
    };

    Vector2D.prototype.div = function (div) {
        this.x /= div;
        this.y /= div;
    };

    Vector2D.angleToVector2D = function (angle) {
        angle = angle * Math.PI / 180.0;
        return new Vector2D(
            Math.round(parseFloat(Math.cos(angle)) * 100) / 100,
            Math.round(parseFloat(Math.sin(angle)) * 100) / 100
        );
    };

    Vector2D.prototype.vectorToAngleRadians = function () {
        return parseFloat(Math.atan2(this.y, this.x));
    };

    Vector2D.prototype.vectorToAngleDegrees = function () {
        return this.vectorToAngleRadians() * 180 / Math.PI;
    };

    Vector2D.prototype.distance = function (other) {
        return this.subNew(other).length();
    };

    return Vector2D;
})();