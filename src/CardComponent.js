import React, { Component } from 'react';
 
class CardComponent extends Component {
    render() {
        return (
            <article class="slds-card">
            <div class="slds-card__header slds-grid">
                <header class="slds-media slds-media_center slds-has-flexi-truncate">
                <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">
                    <svg class="slds-icon slds-icon_small" aria-hidden="true"
                        xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#contact" />
                    </span>
                </div>
                <div class="slds-media__body">
                    <h2>
                    <a href="javascript:void(0);" class="slds-card__header-link slds-truncate" title="[object Object]">
                        <span class="slds-text-heading_small">Card Header</span>
                    </a>
                    </h2>
                </div>
                </header>
                <div class="slds-no-flex">
                <button class="slds-button slds-button_neutral">New</button>
                </div>
            </div>
            <div class="slds-card__body slds-card__body_inner">Card Body (custom goes in here)</div>
            <footer class="slds-card__footer">Card Footer</footer>
            </article>
        )
    }
}
 
export default CardComponent;