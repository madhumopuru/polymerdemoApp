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
            <a name="view1" href="[[rootPath]]view1"> Selected Details</a>
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
                <div style="cursor: pointer" on-click="logout">
                  <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z"/></svg>
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
