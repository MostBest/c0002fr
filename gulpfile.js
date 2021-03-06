'use strict';

const { src, dest, watch, parallel }	= require('gulp');

const del															= require('del');
const pug															= require('gulp-pug');
const sass														= require('gulp-sass');
const rename													= require('gulp-rename');
const browserSync											= require('browser-sync').create();

function cleaning() {
	return del('build');
}

function server() {
	browserSync.init({
		browser: 'firefox',
		server: {
			baseDir: './build'
		}
	});
}

function html() {
	return src('dev/html/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.pipe(rename({
			basename: 'index'
		}))
		.pipe(dest('build'))
}

function css() {
	return src('dev/css/*.sass')
		.pipe(sass())
		.pipe(dest('build/css'))
		.pipe(browserSync.stream());
}

function js() {
  return src('dev/js/*.js')
    .pipe(dest('build/js'))
}

function watching() {
	watch(['dev/html/**/*.pug'], parallel(html));
	watch(['dev/css/**/*.sass'], parallel(css));
	watch(['dev/js/**/*.js'], parallel(js));
	
	watch(['build/*.html', 'build/**/*.js']).on('change', browserSync.reload);
}

exports.js 				= js;
exports.css 			= css;
exports.html 			= html;
exports.server 		= server;
exports.watching 	= watching;
exports.cleaning 	= cleaning;
exports.default		= parallel(html, css, js, server, watching);
