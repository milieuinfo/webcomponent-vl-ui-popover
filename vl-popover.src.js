import { NativeVlElement, define, awaitScript } from '/node_modules/vl-ui-core/vl-core.js';

export class VlPopover extends NativeVlElement(HTMLDivElement) {
	
    get _stylePath() {
        return '../style.css';
    }

}

Promise.all([
	  awaitScript('util', '/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js'),
	  awaitScript('core', '/node_modules/@govflanders/vl-ui-core/dist/js/core.min.js'),
	  awaitScript('popover', '/node_modules/@govflanders/vl-ui-popover/dist/js/popover.js')
]).then(() => define('vl-popover', VlPopover, {extends: 'div'}));


