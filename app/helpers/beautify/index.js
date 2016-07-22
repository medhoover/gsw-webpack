// Import required dependencies per each Module
import { toUpper } from 'lodash';

// Only expose what you need
export function beautify(title) {
    return '<strong>' + _.toUpper(title) + '</strong>';
}
