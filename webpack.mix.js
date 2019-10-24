const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

var outputPath = 'dist';

if (!mix.inProduction()) {
    var outputPath = 'build';
}

mix.js('src/app.js', outputPath).extract()
   .sass('src/style.scss', outputPath).options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
   })
   .purgeCss({
        folders: ['src'],
        extensions: ['html', 'js', 'vue'],
   })
   .copy('src/*.html', outputPath)
   .setPublicPath(outputPath);