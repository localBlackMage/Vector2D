window.Vector2D = (function () {
    'use strict';

    /**
     * Vector2D object
     * Will attempt to parse both x and y into floats, if unable, throws a TypeError
     * @param x - Number
     * @param y - Number
     * @constructor
     */
    function Vector2D(x, y) {
        x = x === undefined || x === null ? 0 : x;
        y = y === undefined || y === null ? 0 : y;
        if (isNaN(x) || isNaN(y)) {
            throw new TypeError('Both X and Y values for a Vector2D need to be numbers.');
        }
        else {
            this.x = parseFloat(x);
            this.y = parseFloat(y);
        }
    }

    /**
     * Given another Vector2D, compares the x and y values of each for equality
     * @param otherVector - Vector2D or {x: Number, y: Number}
     * @returns {boolean} - True if both x's and y's are the same
     */
    Vector2D.prototype.compare = function (otherVector) {
        if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
            return this.x === otherVector.x && this.y === otherVector.y;
        }
        else {
            throw new TypeError('otherVector must be a Vector2D or have numerical X and Y properties.')
        }
    };

    /**
     * Returns the total length of this Vector2D
     * @returns {number}
     */
    Vector2D.prototype.length = function () {
        if (!isNaN(this.x) && !isNaN(this.y)) {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        }
        else {
            throw new TypeError('Vector2D X and Y must be Numbers.')
        }
    };

    /**
     * @see length
     */
    Vector2D.prototype.magnitude = Vector2D.prototype.length;

    /**
     * Given a scalar (defaults to 1), returns a new Vector2D with a length equal to scalar
     * @param scalar - Number, optional, defaults to 1
     * @returns {*}
     */
    Vector2D.prototype.normalize = function (scalar) {
        // If scalar is undefined, null, or an empty string, default it to 0
        scalar = scalar || 1;

        // If isNaN(scalar) still evaluates true, scalar was an invalid argument
        if (isNaN(scalar)) {
            throw new TypeError('scalar must be a Number')
        }
        else if (isNaN(this.x) || isNaN(this.y)){
            throw new TypeError('Vector2D X and Y must be Numbers.')
        }
        else {
            var length = this.length();
            if (length === 0) {
                return this;
            }
            else {
                return new Vector2D((this.x / length) * scalar, (this.y / length) * scalar);
            }
        }
    };

    /**
     * Given another Vector2D, returns a new Vector2D with x and y equal to the total of this Vector2D and otherVector
     * @param otherVector - Vector2D or {x:Number, y:Number}
     * @returns {Vector2D}
     */
    Vector2D.prototype.addNew = function (otherVector) {
        if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
            return new Vector2D(this.x + otherVector.x, this.y + otherVector.y);
        }
        else {
            throw new TypeError('otherVector must be a Vector2D or have numerical X and Y properties.')
        }
    };

    /**
     * Given another Vector2D, adds otherVector's x and y from this Vector2D's x and y respectively
     * @param otherVector - Vector2D or {x:Number, y:Number}
     */
    Vector2D.prototype.add = function (otherVector) {
        if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
            this.x += otherVector.x;
            this.y += otherVector.y;
        }
        else {
            throw new TypeError('otherVector must be a Vector2D or have numerical X and Y properties.')
        }
    };

    /**
     * Given another Vector2D, returns a new Vector2D with x and y equal to the difference between this Vector2D and otherVector
     * @param otherVector - Vector2D or {x:Number, y:Number}
     * @returns {Vector2D}
     */
    Vector2D.prototype.subNew = function (otherVector) {
        if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
            return new Vector2D(this.x - otherVector.x, this.y - otherVector.y);
        }
        else {
            throw new TypeError('otherVector must be a Vector2D or have numerical X and Y properties.')
        }
    };

    /**
     * Given another Vector2D, subtracts otherVector's x and y from this Vector2D's x and y respectively
     * @param otherVector - Vector2D or {x:Number, y:Number}
     */
    Vector2D.prototype.sub = function (otherVector) {
        if (!isNaN(otherVector.x) && !isNaN(otherVector.y)) {
            this.x -= otherVector.x;
            this.y -= otherVector.y;
        }
        else {
            throw new TypeError('otherVector must be a Vector2D or have numerical X and Y properties.')
        }
    };

    /**
     * Given a scalar Number, returns a new Vector2D with x and y equal to this Vector2D's x and y multiplied by the scalar
     * @param scalar - Number
     * @returns {Vector2D}
     */
    Vector2D.prototype.mulNew = function (scalar) {
        if (!isNaN(scalar)) {
            return new Vector2D(this.x * scalar, this.y * scalar);
        }
        else {
            throw new TypeError('scalar must be numerical.')
        }
    };

    /**
     * Given a scalar Number, multiplies this Vector2D's x and y by scalar
     * @param scalar - Number
     */
    Vector2D.prototype.mul = function (scalar) {
        if (!isNaN(scalar)) {
            this.x *= scalar;
            this.y *= scalar;
        }
        else {
            throw new TypeError('scalar must be numerical.')
        }
    };

    /**
     * Given a divisor Number, returns a new Vector2D with x and y equal to this Vector2D's x and y divided by the divisor
     * @param divisor - Number, non-zero
     * @returns {Vector2D}
     */
    Vector2D.prototype.divNew = function (divisor) {
        if (!isNaN(divisor) && divisor !== 0) {
            return new Vector2D(this.x / divisor, this.y / divisor);
        }
        else {
            throw new TypeError('divisor must be numerical and non-zero.')
        }
    };

    /**
     * Given a divisor Number, divides this Vector2D's x and y by divisor
     * @param divisor - Number, non-zero
     */
    Vector2D.prototype.div = function (divisor) {
        if (!isNaN(divisor) && divisor !== 0) {
            this.x /= divisor;
            this.y /= divisor;
        }
        else {
            throw new TypeError('divisor must be numerical and non-zero.')
        }
    };

    /**
     * Given an angle in Degrees, returns a Vector2D rotated by that angle
     * @param angle - Number, angle in Degrees
     * @returns {Vector2D}
     */
    Vector2D.angleToVector2D = function (angle) {
        if (!isNaN(angle)) {
            angle = angle * Math.PI / 180.0;
            return new Vector2D(
                Math.round(parseFloat(Math.cos(angle)) * 100) / 100,
                Math.round(parseFloat(Math.sin(angle)) * 100) / 100
            );
        }
        else {
            throw new TypeError('angle must be numerical.')
        }
    };

    /**
     * Returns this Vector2D's angle in Radians
     * @returns {Number}
     */
    Vector2D.prototype.vectorToAngleRadians = function () {
        if (!isNaN(this.x) && !isNaN(this.y)) {
            return parseFloat(Math.atan2(this.y, this.x));
        }
        else {
            throw new TypeError('Vector2D X and Y must be Numbers.')
        }
    };

    /**
     * Returns this Vector2D's angle in Degrees
     * @returns {number}
     */
    Vector2D.prototype.vectorToAngleDegrees = function () {
        return this.vectorToAngleRadians() * 180 / Math.PI;
    };

    /**
     * Given an otherVector, returns the length of the distance Vector2D between them
     * @param otherVector - Vector2D or {x: Number, y: Number}
     * @returns {Vector2D}
     */
    Vector2D.prototype.distance = function (otherVector) {
        return this.subNew(otherVector).length();
    };

    return Vector2D;
})();