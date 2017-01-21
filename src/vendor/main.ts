/**
 * This is an entry point for additional assets,
 * require your assets under this file.
 * 
 * Example:
 * require('./bootstrap/css/bootstrap.min.css');
 */
const w = window as any;
w.jQuery = w.$ = require('jquery/dist/jquery');
require('materialize-css/dist/css/materialize.css');
require('materialize-css/dist/js/materialize');
