import React, { Component } from 'react';
import SymbolSvg from './assets/icons/utility/search.svg'

//see https://github.com/facebook/create-react-app/issues/1388

//const MySvg = require('./assets/icons/utility-sprite/svg/symbols.svg')

//const SymbolIcons = () =>
//  <div>
//     <SymbolIcons />
//  </div>

class RMWorkbenchHeader extends Component {
    render() {
        return (

<div class="demo-only" style={{height: 28.571 + 'rem'}}>
  <header class="slds-global-header_container"><a href="javascript:void(0);" class="slds-assistive-text slds-assistive-text_focus">Skip to Navigation</a><a href="javascript:void(0);" class="slds-assistive-text slds-assistive-text_focus">Skip to Main Content</a>
    <div class="slds-global-header slds-grid slds-grid_align-spread">
      <div class="slds-global-header__item">
        <div class="slds-global-header__logo"></div>
      </div>
      <div class="slds-global-header__item slds-global-header__item_search">
        <div aria-expanded="false" aria-haspopup="listbox" class="slds-form-element slds-lookup" role="combobox">
          <label class="slds-assistive-text" for="global-search-01">Search Salesforce</label>
          <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right">
            <svg class="slds-input__icon slds-input__icon_left" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="./assets/icons/utility-sprite/svg/symbols.svg#search" />
            <input type="text" aria-autocomplete="list" aria-controls="global-search-list-01" autocomplete="off" class="slds-input slds-lookup__search-input" id="global-search-01" placeholder="Search Salesforce" role="textbox" />
          </div>
          <div class="slds-lookup__menu" role="listbox" id="global-search-list-01">
            <ul class="slds-lookup__list" role="group" aria-label="Recent Items">
              <li role="presentation">
                <h3 role="presentation" class="slds-lookup__item_label slds-text-body_small">Recent Items</h3>
              </li>
              <li role="presentation">
                "Hugo"
              </li>
              <li role="presentation">
                <span class="slds-lookup__item-action slds-media" id="option-01" role="option">
                  <svg class="slds-icon slds-icon-standard-opportunity slds-icon_small slds-media__figure" aria-hidden="true"
                    xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#opportunity" />
                  <span class="slds-media__body">
                    <span class="slds-lookup__result-text">Salesforce - 1,000 Licenses</span>
                    <span class="slds-lookup__result-meta slds-text-body_small">Opportunity • Prospecting</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span class="slds-lookup__item-action slds-media" id="option-02" role="option">
                  <svg class="slds-icon slds-icon-standard-contact slds-icon_small slds-media__figure" aria-hidden="true"
                    xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#contact" />
                  <span class="slds-media__body">
                    <span class="slds-lookup__result-text">Art Vandelay</span>
                    <span class="slds-lookup__result-meta slds-text-body_small">Contact • avandelay@vandelay.com</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span class="slds-lookup__item-action slds-media" id="option-03" role="option">
                  <svg class="slds-icon slds-icon-standard-account slds-icon_small slds-media__figure" aria-hidden="true"
                    xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#account" />
                  <span class="slds-media__body">
                    <span class="slds-lookup__result-text">Vandelary Industries</span>
                    <span class="slds-lookup__result-meta slds-text-body_small">Account • San Francisco</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span class="slds-lookup__item-action slds-media" id="option-04" role="option">
                  <svg class="slds-icon slds-icon-custom-8 slds-icon_small slds-media__figure" aria-hidden="true"
                    xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/custom-sprite/svg/symbols.svg#custom8" />
                  <span class="slds-media__body">
                    <span class="slds-lookup__result-text">Salesforce UK 2016 Events</span>
                    <span class="slds-lookup__result-meta slds-text-body_small">General Ledger • $20,000</span>
                  </span>
                </span>
              </li>
              <li role="presentation">
                <span class="slds-lookup__item-action slds-media" id="option-05" role="option">
                  <svg class="slds-icon slds-icon-standard-lead slds-icon_small slds-media__figure" aria-hidden="true"
                    xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/standard-sprite/svg/symbols.svg#lead" />
                  <span class="slds-media__body">
                    <span class="slds-lookup__result-text">H.E. Pennypacker</span>
                    <span class="slds-lookup__result-meta slds-text-body_small">Lead • Nursing</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul class="slds-global-header__item slds-grid slds-grid_vertical-align-center">
        <li class="slds-grid">
          <button class="slds-button slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon-favorites" aria-pressed="false" title="Toggle Favorites">
            <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#favorite" />
            <span class="slds-assistive-text">Toggle Favorite</span>
          </button>
          <span class="slds-dropdown-trigger slds-dropdown-trigger_click">
            <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon slds-m-left_none" title="View Favorites">
              <svg class="slds-button__icon" aria-hidden="true"
                xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown" />
              <span class="slds-assistive-text">View Favorites</span>
            </button>
          </span>
        </li>
        <li class="slds-dropdown-trigger slds-dropdown-trigger_click slds-p-horizontal_xxx-small">
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-small slds-button_icon-container slds-button_icon-x-small slds-global-header__button_icon-actions slds-m-horizontal_xx-small" title="Global Actions">
            <svg class="slds-button__icon" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#add" />
            <span class="slds-assistive-text">Global Actions</span>
          </button>
        </li>
        <li class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon" title="Help and Training">
            <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#question" />
            <span class="slds-assistive-text">Help and Training</span>
          </button>
        </li>
        <li class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon" title="Setup">
            <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#setup" />
            <span class="slds-assistive-text">Setup</span>
          </button>
        </li>
        <li class="slds-dropdown-trigger slds-dropdown-trigger_click">
          <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-header__button_icon" title="Notifications">
            <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true"
              xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#notification" />
            <span class="slds-assistive-text">Notifications</span>
          </button>
        </li>
        <li class="slds-dropdown-trigger slds-dropdown-trigger_click slds-m-left_x-small">
          <button class="slds-button" title="person name" aria-haspopup="true">
            <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
              <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
            </span>
          </button>
        </li>
      </ul>
    </div>
    <section class="slds-popover slds-popover_large slds-nubbin_top-right" role="dialog" aria-label="Notifications" aria-describedby="notifications-container" style={{position: 'absolute' ,right: 3.125 + 'rem'}}>
      <div id="notifications-container" class="slds-popover__body slds-p-around_none">
        <ul>
          <li class="slds-global-header__notification slds-p-around_xx-small slds-global-header__notification_unread">
            <div class="slds-media slds-has-flexi-truncate slds-p-around_x-small">
              <div class="slds-media__figure">
                <span class="slds-avatar slds-avatar_small slds-avatar_circle">
                  <img alt="Kelly Chan" src="/assets/images/avatar3.jpg" title="Kelly Chan avatar" />
                </span>
              </div>
              <div class="slds-media__body">
                <div class="slds-grid slds-grid_align-spread">
                  <a href="javascript:void(0);" class="slds-text-link_reset slds-has-flexi-truncate">
                    <h3 class="slds-truncate" title="Kelly Chan mentioned you in a comment:">
                      <strong>Kelly Chan mentioned you in a comment:</strong>
                    </h3>
                    <p class="slds-truncate" title="I need you to review this for me @Paulina">I need you to review this for me @Paulina</p>
                    <p class="slds-m-top_x-small slds-text-color_weak">10m ago</p>
                  </a>
                  <div class="slds-no-flex slds-grid slds-grid_vertical">
                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                      <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
                        <svg class="slds-button__icon" aria-hidden="true"
                          xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                        <span class="slds-assistive-text">Show More</span>
                      </button>
                    </div>
                    <div class="slds-align-middle">
                      <abbr class="slds-required slds-text-link" title="unread">●</abbr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slds-global-header__notification slds-p-around_xx-small">
            <div class="slds-media slds-has-flexi-truncate slds-p-around_x-small">
              <div class="slds-media__figure">
                <span class="slds-avatar slds-avatar_small slds-avatar_circle">
                  <img alt="Kelly Chan" src="/assets/images/avatar3.jpg" title="Kelly Chan avatar" />
                </span>
              </div>
              <div class="slds-media__body">
                <div class="slds-grid slds-grid_align-spread">
                  <a href="javascript:void(0);" class="slds-text-link_reset slds-has-flexi-truncate">
                    <h3 class="slds-truncate" title="Kelly Chan mentioned you in a comment:">
                      <strong>Kelly Chan mentioned you in a comment:</strong>
                    </h3>
                    <p class="slds-truncate" title="I need you to review this for me @Paulina">I need you to review this for me @Paulina</p>
                    <p class="slds-m-top_x-small slds-text-color_weak">10m ago</p>
                  </a>
                  <div class="slds-no-flex slds-grid slds-grid_vertical">
                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                      <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
                        <svg class="slds-button__icon" aria-hidden="true"
                          xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                        <span class="slds-assistive-text">Show More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slds-global-header__notification slds-p-around_xx-small">
            <div class="slds-media slds-has-flexi-truncate slds-p-around_x-small">
              <div class="slds-media__figure">
                <span class="slds-avatar slds-avatar_small slds-avatar_circle">
                  <img alt="Kelly Chan" src="/assets/images/avatar3.jpg" title="Kelly Chan avatar" />
                </span>
              </div>
              <div class="slds-media__body">
                <div class="slds-grid slds-grid_align-spread">
                  <a href="javascript:void(0);" class="slds-text-link_reset slds-has-flexi-truncate">
                    <h3 class="slds-truncate" title="Kelly Chan mentioned you in a comment:">
                      <strong>Kelly Chan mentioned you in a comment:</strong>
                    </h3>
                    <p class="slds-truncate" title="I need you to review this for me @Paulina">I need you to review this for me @Paulina</p>
                    <p class="slds-m-top_x-small slds-text-color_weak">10m ago</p>
                  </a>
                  <div class="slds-no-flex slds-grid slds-grid_vertical">
                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open">
                      <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" title="Show More">
                        <svg class="slds-button__icon" aria-hidden="true"
                          xmlns="http://www.w3.org/1999/xlink" href="/assets/icons/utility-sprite/svg/symbols.svg#down" />
                        <span class="slds-assistive-text">Show More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </header>
</div>

        )
    }
}

export default RMWorkbenchHeader;