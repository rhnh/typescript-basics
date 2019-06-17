let gulp = require("gulp");
let browserify = require("browserify");
let source = require("vinyl-source-stream");
let watchify = require("watchify");
let tsify = require("tsify");
let fancy_log = require("fancy-log");
let cleanCSS = require("gulp-clean-css");
let paths = {
  pages: ["src/*.html"]
};

let watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/index.ts"],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
);

gulp.task("minify-css", () => {
  return gulp
    .src("src/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
});
gulp.task("copy-html", function() {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

function bundle() {
  return watchedBrowserify
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
}

gulp.task(
  "default",
  gulp.series(gulp.parallel("copy-html"), gulp.task("minify-css"), bundle)
);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);
