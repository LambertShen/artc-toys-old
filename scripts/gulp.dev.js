const gulp = require("gulp");
const gulp_clean = require("gulp-clean");
const path = require("path");
const webpack = require("webpack-stream");

const rootPath = path.join(__dirname, "../");
const reactFolderPath = path.join(rootPath, "./src/react");

const webpackDevConfig = require("./webpack.dev");

const clean = () => {
    const cleanPath = path.join(rootPath, "./dist/*.js");
    return gulp.src(cleanPath).pipe(
        gulp_clean({
            force: true,
        })
    );
};

const build_react = () => {
    const entryPath = path.join(reactFolderPath, "./index.jsx");
    const outputPath = path.join(rootPath, "./dist");
    return gulp
        .src(entryPath)
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest(outputPath));
};

const watch_react = () => {
    return gulp.watch(reactFolderPath, gulp.series(clean, build_react));
};

exports.default = gulp.series(clean, build_react, watch_react);
