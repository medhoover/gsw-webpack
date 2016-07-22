// This is the entry file

// Import your dependencies with any pattern you prefer : require, import(ES6) or CommonJs
// Required Modules gets important only once, you can still import any module/dependency everywhere you like without worrying about duplication
import * as _ from 'lodash';
import { beautify } from './helpers/beautify';

// CSS Style
import 'milligram';

let div = document.getElementById('content');

div.innerHTML = div.innerHTML + beautify('webpack');

div.style.display = 'none';

let button = document.getElementsByClassName('button')[0];

window.toggleElement = () => {

    if (_.isEqual(button.innerHTML, 'Show')) {
        div.style.display = 'block';
        button.innerHTML = 'Hide';
    } else {
        div.style.display = 'none';
        button.innerHTML = 'Show';
    }
}
// JSCS Warning in the above statement (requireSemicolons: Missing semicolon after statement) Thanks to Webpack preloaders !!
