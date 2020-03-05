'use strict';

const { src, dest, parallel } = require('gulp');
const pug 										= require('gulp-pug');
const sass 										= require('gulp-sass');
// const concat 									= require('gulp-concat');

function html() {
	return src('dev/html/*.pug')
		.pipe(pug())
		.pipe(dest('build/html'))
}

function css() {
	return src('dev/css/*.sass')
		.pipe(sass())
		.pipe(dest('build/css'))
}

function js() {
  return src('dev/js/*.js')
    .pipe(dest('build/js'))
		.pipe(dest('build/js'))
}

exports.js 			= js;
exports.css 		= css;
exports.html 		= html;
exports.default	= parallel(html, css, js);
