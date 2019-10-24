const mix = require('laravel-mix');

var outputPath = 'dist';

if (!mix.inProduction()) {
    var outputPath = 'build';
}

console.error(outputPath);

mix.js('src/app.js', outputPath)
   .sass('src/style.scss', outputPath)
   .copy('src/*.html', outputPath)
   .setPublicPath(outputPath);