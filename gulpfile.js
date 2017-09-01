// 引入 gulp及组件
var gulp = require('gulp'), // gulp基础库
    minifycss = require('gulp-minify-css'), // css压缩
    uglify = require('gulp-uglify'), // js压缩
    imagemin = require('gulp-imagemin'), // image压缩
    jshint = require('gulp-jshint'), // js检查
    changed = require('gulp-changed'), // 只编译改变的部分
    del = require('del'), // 清除
    notify = require('gulp-notify'); // 提示

// css处理
gulp.task('minifycss', function() {
    return gulp.src('templates/rock/static/src/css/**/*.css') // 设置css
        .pipe(minifycss()) // 压缩文件
        .pipe(changed('templates/rock/static/dist/css/')),
        .pipe(gulp.dest('templates/rock/static/dist/css/')) // 设置输出路径
        .pipe(notify({
            message: 'css task ok'
        })); // 提示成功
});

// JS处理
gulp.task('minifyjs', function() {
    return gulp.src('templates/rock/static/src/js/**/*.js')
        .pipe(jshint()) // 检查js
        .pipe(uglify()) // 压缩文件
        .pipe(changed('templates/rock/static/dist/js/')),
        .pipe(gulp.dest('templates/rock/static/dist/js/')) // 设置输出路径
        .pipe(notify({
            message: "js task ok"
        })); // 提示成功
});

// image处理
gulp.task('minifyimage', function() {
    return gulp.src('templates/rock/static/src/images/**/*.*(jpg|png|gif)')
        .pipe(imagemin({
            progressive: true
        })) // 压缩文件
        .pipe(changed('templates/rock/static/dist/images/')),
        .pipe(gulp.dest('templates/rock/static/dist/images/')) // 设置输出路径
        .pipe(notify({
            message: "iamge task ok"
        })); // 提示成功
});

// 清空输出目录
gulp.task('clean', function(cb) {
    del('templates/rock/static/dist', cb)
});

gulp.task('copy', function() {
    return gulp.src('templates/rock/static/src/**/*.*(eot|svg|ttf|woff|woff2)')
        .pipe(changed('templates/rock/static/dist/'))
        .pipe(gulp.dest('templates/rock/static/dist/'))
        .pipe(notify({
            message: "copy task ok"
        })); // 提示成功
});

// 设置默认任务
gulp.task('default', ['clean', 'minifycss', 'minifyjs', 'minifyimage', 'copy']);