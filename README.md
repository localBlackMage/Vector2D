#Vector2D [![Build Status](https://travis-ci.org/hprofit/Vector2D.svg?branch=master)](https://travis-ci.org/hprofit/Vector2d)

Vector2D is a simple 2D vector library for javascript, fully tested and providing
all the essential needs for a 2D vector!

#Installation
```
bower install vector2d --save
```

#Usage

Simply `new Vector2D()` to get started.
```javascript
var vector = new Vector2D(1, 2);
```

Any given Vector2D has access to the following functionality:

#Addition
##vector.add(otherVector)
Increments `vector` by the `otherVector`'s X and Y

**Throws a TypeError if either `otherVector.x` or `otherVector.y` isNaN**

###Parameters
overVector - Vector2D or { x: Number, y: Number }

###Returns
N/A

```javascript
var vec1 = new Vector2D(0, 0);
var vec2 = new Vector2D(1, 2);

vec1.add(vec2); // vec1.x = 1, vec1.y = 2
vec2.add(vec1); // vec2.x = 2, vec2.y = 4
```

##vector.addNew(otherVector)
Adds `vector` and `otherVector` together and returns the result as a new Vector2

**Throws a TypeError if either `otherVector.x` or `otherVector.y` isNaN**

###Parameters
overVector - Vector2D or { x: Number, y: Number }

###Returns
Vector2

```javascript
var vec1 = new Vector2D(1, 2);
var vec2 = new Vector2D(3, 4);

var vec3 = vec1.addNew(vec2); // vec3.x = 4, vec3.y = 6
var vec4 = vec3.addNew(vec2); // vec4.x = 7, vec4.y = 10
```

#Subtraction
##vector.sub(otherVector)
Decrements `vector` by the `otherVector`'s X and Y

**Throws a TypeError if either `otherVector.x` or `otherVector.y` isNaN**

###Parameters
overVector - Vector2D or { x: Number, y: Number }

###Returns
N/A

```javascript
var vec1 = new Vector2D(2, 2);
var vec2 = new Vector2D(1, 4);

vec1.sub(vec2); // vec1.x = 1, vec1.y = -2
vec2.sub(vec1); // vec2.x = 0, vec2.y = 6
```

##vector.subNew(otherVector)
Subtracts `otherVector` from `vector` together and returns the result as a new Vector2

**Throws a TypeError if either `otherVector.x` or `otherVector.y` isNaN**

###Parameters
overVector - Vector2D or { x: Number, y: Number }

###Returns
Vector2

```javascript
var vec1 = new Vector2D(1, 2);
var vec2 = new Vector2D(3, 4);

var vec3 = vec2.subNew(vec1); // vec3.x = 2, vec3.y = 2
var vec4 = vec3.subNew(vec2); // vec4.x = -1, vec4.y = -2
```

#Multiplication
##vector.mul(scalar)
Multiplies `vector`'s X and Y by the `scalar`

**Throws a TypeError if scalar isNaN**

###Parameters
scalar - Number

###Returns
N/A

```javascript
var vector = new Vector2D(1, 2);
var scalar = 2.5;

vector.mul(scalar); // vector.x = 2.5, vector.y = 5
```

##vector.mulNew(scalar)
Multiplies `vector`'s X and Y by the `scalar` and returns the result as a new Vector2

**Throws a TypeError if scalar isNaN**

###Parameters
scalar - Number

###Returns
Vector2

```javascript
var vec1 = new Vector2D(1, 2);
var scalar = 2.5;

var vec2 = vec1.mulNew(scalar); // vec2.x = 2.5, vec2.y = 5
```

#Division
##vector.div(divisor)
Divides `vector`'s X and Y by the `divisor`

**Throws a TypeError if divisor isNaN or 0**

###Parameters
divisor - Number

###Returns
N/A

```javascript
var vector = new Vector2D(4, 2);
var divisor = 2;

vector.div(divisor); // vector.x = 2, vector.y = 1
```

##vector.divNew(divisor)
Divides `vector`'s X and Y by the `divisor` and returns the result as a new Vector2

**Throws a TypeError if divisor isNaN or 0**

###Parameters
divisor - Number

###Returns
Vector2

```javascript
var vec1 = new Vector2D(1, 2);
var divisor = 2;

var vec2 = vec1.divNew(scalar); // vec2.x = .5, vec2.y = 1
```

#Angle to Vector
##Vector2D.angleToVector2D(angle)
Takes an angle in Degrees and creates a Vector2D from it matching the rotation given

**Throws a TypeError if angle isNaN**

###Parameters
angle - Number (in degrees)

##Returns
Vector2D

```javascript
var vec1 = Vector2D.angleToVector2D(0);     // vec1.x = 1, vec1.y = 0
var vec2 = Vector2D.angleToVector2D(90);    // vec1.x = 0, vec1.y = 1
var vec3 = Vector2D.angleToVector2D(180);   // vec1.x = -1, vec1.y = 0
var vec4 = Vector2D.angleToVector2D(270);   // vec1.x = 0, vec1.y = -1
var vec5 = Vector2D.angleToVector2D(45);    // vec1.x = 0.71, vec1.y = 0.71
```

#Vector to Angle
##vector.vectorToAngleRadians()
Returns the angle in Radians of the calling vector

**Throws a TypeError if `vector.x` or `vector.y` isNaN**

###Parameters
N/A

##Returns
Number - Angle of Vector2D in Radians

```javascript
var vec1 = new Vector2D(1, 0);
var vec2 = new Vector2D(0, 1);
var vec3 = new Vector2D(-1, 0);
var vec4 = new Vector2D(0, -1);
var vec5 = new Vector2D(.71, .71);

var angle1 = vec1.vectorToAngleRadians();   // 0
var angle2 = vec2.vectorToAngleRadians();   // 1.5707963267948966
var angle3 = vec3.vectorToAngleRadians();   // 3.141592653589793
var angle4 = vec4.vectorToAngleRadians();   // -1.5707963267948966
var angle5 = vec5.vectorToAngleRadians();   // 0.7853981633974483
```

##vector.vectorToAngleDegrees()
Returns the angle in Degrees of the calling vector

**Throws a TypeError if `vector.x` or `vector.y` isNaN**

###Parameters
N/A

##Returns
Number - Angle of Vector2D in Degrees

```javascript
var vec1 = new Vector2D(1, 0);
var vec2 = new Vector2D(0, 1);
var vec3 = new Vector2D(-1, 0);
var vec4 = new Vector2D(0, -1);
var vec5 = new Vector2D(.71, .71);

var angle1 = vec1.vectorToAngleDegrees();   // 0
var angle2 = vec2.vectorToAngleDegrees();   // 90
var angle3 = vec3.vectorToAngleDegrees();   // 180
var angle4 = vec4.vectorToAngleDegrees();   // -90
var angle5 = vec5.vectorToAngleDegrees();   // 45
```

#Compare
##vector.compare(otherVector)
Compares the X and Y of both vectors to see if they match

###Parameters
otherVector - Vector2D or { x: Number, y: Number }

##Returns
Boolean - true if both x's and y's are equal

```javascript
var vec1 = new Vector2D(1, 1);
var vec2 = new Vector2D(1, 2);
var vec3 = new Vector2D(1, 1);
var vectorsAreSame;

vectorsAreSame = vec1.compare(vec2); // false
vectorsAreSame = vec1.compare(vec3); // true
vectorsAreSame = vec1.compare(vec1); // true
```

#Length
##vector.length()
Calculates the length of the vector and returns it

###Parameters
N/A

##Returns
Number - Length of the Vector2D

```javascript
var vec1 = new Vector2D(1, 0);
var vec2 = new Vector2D(1, 1);
var vec3 = new Vector2D(10, 0);

vec1.length();  // 1
vec2.length();  // 1.4142135623730951
vec3.length();  // 10
```

##vector.magnitude()
Alias for vector.length

#Distance
##vector.distance(otherVector)
Calculates the length of the distance between `vector` and `otherVector`

###Parameters
otherVector - Vector2D or { x: Number, y: Number }

##Returns
Number - Length of the Vector2D between `vector` and `otherVector`

```javascript
var vec1 = new Vector2D(1, 0);
var vec2 = new Vector2D(1, 1);
var vec3 = new Vector2D(10, 0);

var dist1 = vec1.distance(vec2);    // 1
var dist2 = vec1.distance(vec3);    // 9
var dist3 = vec2.distance(vec3);    // 9.055385138137417
```

#Normalize
##vector.normalize(scalar)
Normalizes `vector` such that it has a length of 1, scales it if a `scalar` was given, and returns a new Vector2D
representing the normalized `vector`

###Parameters
scalar - Number, optional number to scale the resulting normalized Vector2D by

##Returns
Vector2D - If the `vector` has a length greater than 0, a new Vector2D with length equal to 1 in the same direction as `vector`,
otherwise it will return `vector`

```javascript
var vec1 = new Vector2D(2, 0);
var vec2 = new Vector2D(0, 0);
var vec3 = new Vector2D(1, 0);

var vec4 = vec1.normalize();    // vec4.x = 1, vec4.y = 0
var vec5 = vec2.normalize();    // vec5 = vec2
var vec6 = vec3.normalize(2);   // vec6.x = 2, vec6.y = 0
```