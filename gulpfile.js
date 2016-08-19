/**
 * Created by Logan Harber on August 16, 2016
 */

var elixir = require('laravel-elixir');

elixir.config.assetsPath = '_dev';
elixir.config.publicPath = 'assets';

elixir(function(mix) {
    mix.sass('styles.scss').browserify('main.js');
});