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

###Addition
##vector.add(otherVector)
Increments `vector` by the `otherVector`'s X and Y

#Parameters
overVector - Vector2D or { x: Number, y: Number }

#Returns
N/A

```javascript
var vec1 = new Vector2D(0, 0);
var vec2 = new Vector2D(1, 2);

vec1.add(vec2); // vec1.x = 1, vec1.y = 2
vec2.add(vec1); // vec2.x = 2, vec2.y = 4
```

##vector.addNew(otherVector)
Adds `vector` and `otherVector` together and returns the result as a new Vector2

#Parameters
overVector - Vector2D or { x: Number, y: Number }

#Returns
N/A

```javascript
var vec1 = new Vector2D(1, 2);
var vec2 = new Vector2D(3, 4);

var vec3 = vec1.addNew(vec2); // vec3.x = 4, vec3.y = 6
var vec4 = vec3.addNew(vec2); // vec4.x = 7, vec4.y = 10
```

###Subtraction
##vector.sub(otherVector)
Decrements `vector` by the `otherVector`'s X and Y

#Parameters
overVector - Vector2D or { x: Number, y: Number }

#Returns
N/A

```javascript
var vec1 = new Vector2D(2, 2);
var vec2 = new Vector2D(1, 4);

vec1.sub(vec2); // vec1.x = 1, vec1.y = -2
vec2.sub(vec1); // vec2.x = 0, vec2.y = 6
```

##vector.subNew(otherVector)
Subtracts `otherVector` from `vector` together and returns the result as a new Vector2

#Parameters
overVector - Vector2D or { x: Number, y: Number }

#Returns
N/A

```javascript
var vec1 = new Vector2D(1, 2);
var vec2 = new Vector2D(3, 4);

var vec3 = vec2.subNew(vec1); // vec3.x = 2, vec3.y = 2
var vec4 = vec3.subNew(vec2); // vec4.x = -1, vec4.y = -2
```




###Compare
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