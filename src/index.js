import '../node_modules/jquery/dist/jquery';
let $ = require('jquery');
import 'air-datepicker'


import '../node_modules/inputmask/dist/jquery.inputmask.js'
import '../node_modules/jquery-bar-rating/dist/jquery.barrating.min.js'
import '../node_modules/jquery-bar-rating/dist/themes/css-stars.css'
import '../node_modules/air-datepicker/dist/js/datepicker'
import '../node_modules/air-datepicker/dist/css/datepicker.css'


import './components/datepicker/datepicker'
import './components/dropdown/dropdown'
import './components/expand/expand'
import './components/input/input'
import './components/like/like'
import './components/rating/rating'





// Autoadd all scss/css/ts files
function importAll (r) {
    r.keys().forEach(r);
}
importAll(require.context('./', true, /\.scss|css|ts$/));