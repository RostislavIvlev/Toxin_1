import '../node_modules/jquery/dist/jquery';
let $ = require('jquery');

import '../node_modules/inputmask/dist/jquery.inputmask.js'

import './components/input/input'



// Autoadd all scss/css/ts files
function importAll (r) {
    r.keys().forEach(r);
}
importAll(require.context('./', true, /\.scss|css|ts$/));