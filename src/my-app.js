/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';


setPassiveTouchGestures(true);


setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"  data="{{routeData}}" >
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}" >
        <!-- Drawer content -->
        <template is="dom-if" if="{{showSideNavBar}}">
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="productDetails" href="[[rootPath]]productDetails">Product Details</a>
            <a name="view1" href="[[rootPath]]view1"> Selected Products</a>
          </iron-selector>
        </app-drawer>
        </template>
    
        <!-- Main content -->
        <app-header-layout has-scrolling-region="" >

          <app-header slot="header" condenses="" reveals="" effects="waterfall"  >
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">My Products</div>
              <template is="dom-if" if="{{showSideNavBar}}">
                <div title="Logout" style="cursor: pointer" on-click="logout">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="width: 40px;"
                width="64" height="64" 
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,6.88c-43.6552,0 -79.12,35.4648 -79.12,79.12c0,43.6552 35.4648,79.12 79.12,79.12c26.17935,0 49.42112,-12.74611 63.81469,-32.36422c0.77173,-0.98775 0.94516,-2.31706 0.4527,-3.46975c-0.49247,-1.15269 -1.57289,-1.94631 -2.82011,-2.0715c-1.24722,-0.12519 -2.46382,0.43787 -3.17555,1.46969c-13.14707,17.91917 -34.32338,29.55578 -58.27172,29.55578c-39.9368,0 -72.24,-32.3032 -72.24,-72.24c0,-39.9368 32.3032,-72.24 72.24,-72.24c23.94833,0 45.12464,11.63661 58.27172,29.55578c0.71174,1.03182 1.92834,1.59488 3.17555,1.46969c1.24722,-0.12519 2.32764,-0.91881 2.82011,-2.0715c0.49247,-1.15269 0.31903,-2.482 -0.4527,-3.46975c-14.39357,-19.61811 -37.63534,-32.36422 -63.81469,-32.36422zM134.1264,55.0064c-1.39982,0.00037 -2.65984,0.84884 -3.18658,2.14577c-0.52674,1.29693 -0.21516,2.7837 0.78799,3.76001l21.64781,21.64781h-74.25563c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h74.25563l-21.64781,21.64781c-0.89867,0.86281 -1.26068,2.14404 -0.94641,3.34956c0.31427,1.20552 1.2557,2.14696 2.46122,2.46122c1.20552,0.31427 2.48675,-0.04774 3.34956,-0.94641l27.21766,-27.21765c0.85429,-0.65168 1.35506,-1.66508 1.35374,-2.73956c-0.00132,-1.07448 -0.50457,-2.08664 -1.36046,-2.73623l-27.21094,-27.21094c-0.64765,-0.66575 -1.53698,-1.04135 -2.46578,-1.04141z"></path></g></g></svg>
                </div>
              </template>
             </app-toolbar>
            
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-login name="login"></my-login>
            <my-details name="productDetails"></my-details>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
    
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      showSideNav:{
        type: Boolean,
        value: true
      } ,
      showSideNavBar: {
        type: Boolean,
        value: true
      },
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }
  logout(){
    localStorage.clear();
    this.set("route.path", "/login")
  }
  _routePageChanged(page) {

    if (!page) {
      this.page = 'login';
    } else if (['view1', 'view2', 'view3', 'login','productDetails'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    if(this.page == 'login'){
      this.showSideNav = false;
      this.showSideNavBar = false;
    }
    else {
      this.showSideNav = true;
      this.showSideNavBar = true;
    }

    var drawer = this.shadowRoot.getElementById('drawer');
    if (drawer&& drawer.persistent) {
      drawer.open();
    }
  }

  _pageChanged(page) {
   
    switch (page) {
     
        case 'productDetails':
        import('./my-details.js');
        break;
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
        case 'login':
          import('./my-login.js');
          break;
    }
  }
}

window.customElements.define('my-app', MyApp);
