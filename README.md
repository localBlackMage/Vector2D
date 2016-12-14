###Vector2D [![Build Status](https://travis-ci.org/hprofit/Vector2D.svg?branch=master)](https://travis-ci.org/hprofit/Vector2d)

Vector2D is a simple 2D vector library for javascript, fully tested and providing
all the essential needs for a 2D vector!

###Installation
```
bower install vector2d --save
```

###Usage

Simply `new Vector2D()` to get started.
```javascript
var vector = new Vector2D(1, 2);
```

Any given Vector2D has access to the following functionality:

##Compare
#Parameters
otherVector - Vector2D or { x: Number, y: Number }

#Returns
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