This is a gulp plugin for ydui's rem2px.

## Installation

Run `npm install ydcss-rem2px`

## Usage

```js
var rem2px = require('ydcss-rem2px');

gulp.task('css', function () {
    gulp.src(['css/**/*.css'])
        .pipe(rem2px())
        .pipe(gulp.dest('css'));
});
```

## Options

Pass in the base size as Number

```js
var rem2px = require('ydcss-rem2px');

var baseSize = 100;

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(rem2px(baseSize))
        .pipe(gulp.dest('css'));
});
```

This plugin is basically a clone of the inverse counterpart which is gulp-rem2px:
[gulp-rem2px](https://github.com/ppowalowski/gulp-rem2px)
by [Patrik Powalowski](https://github.com/ppowalowski)

# License
MIT © 2016 YDCSS Inc.
