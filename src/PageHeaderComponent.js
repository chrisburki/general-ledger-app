import React, { Component } from 'react';

class PageHeader extends Component {
    render() {
        return (

            <div class="slds-page-header">
            <div class="slds-media">
                <div class="slds-media__figure">
                <span class="slds-icon_container slds-icon-standard-opportunity" title="Description of icon when needed">
                    <svg class="slds-icon slds-page-header__icon" aria-hidden="true"
                      xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity" />
                </span>
                </div>
                <div class="slds-media__body">
                <h1 class="slds-page-header__title slds-truncate slds-align-middle" title="Rohde Corp - 80,000 Widgets">Rohde Corp - 80,000 Widgets</h1>
                <p class="slds-text-body_small slds-line-height_reset">Mark Jaeckal • Unlimited Customer • 11/13/15</p>
                </div>
            </div>
            </div>

        )
    }
}
 
export default PageHeader;