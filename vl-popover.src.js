import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlPopover
 * @class
 * @classdesc 
 * 
 * @extends VlElement
 * 
 * @property 
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-popover/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-popover/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-popover.html|Demo}
 * 
 */
export class VlPopover extends VlElement(HTMLElement) {}

define('vl-popover', VlPopover);
