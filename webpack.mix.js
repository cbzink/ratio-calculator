const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

var outputPath = 'dist';

if (!mix.inProduction()) {
    var outputPath = 'build';
}

console.error(outputPath);

mix.js('src/app.js', outputPath)
   .sass('src/style.scss', outputPath).options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
   }).purgeCss()
   .copy('src/*.html', outputPath)
   .setPublicPath(outputPath);