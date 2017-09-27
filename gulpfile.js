"use strict";
//加载模块

var gulp = require("gulp");
var less=require("gulp-less");
var cssnano = require('gulp-cssnano');
var concat=require("gulp-concat");
var uglify=require("gulp-uglify");
var imagemin=require("gulp-imagemin");
var clean=require("gulp-clean");
// var browserSync=require("browser-sync").create();

//定义一个简单的任务
gulp.task("hello", function() {
    console.log("hello World");
});

//html复制文件的任务
gulp.task("html", function() {
    gulp.src("src/**/*.html") //读取文件
        .pipe(gulp.dest("dist/")); //通过管道再次操作，写入到目标位置
});

gulp.task("lessSS", function() {
    gulp.src("src/less/*.less")
    	.pipe(less())
    	.pipe(cssnano())
    	.pipe(gulp.dest("dist/css"));
});
gulp.task("js",function(){
	gulp.src("src/js/*.js")
	.pipe(concat("concat.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
});
// gulp.task("clean",function(){
//     gulp.src("dist")
//     .pipe(clean());
// });
gulp.task("dist",["html","lessSS","js"]);
gulp.task("watch",function(){
    gulp.watch("src/**/*.html",["html"]);
    gulp.watch("src/less/*.less",["lessSS"]);
    gulp.watch("src/js/*.js",["js"]);
   
});