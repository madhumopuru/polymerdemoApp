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
import './shared-styles.js';

let profilesList = [
    {
      id: 'id1',
      name: 'Basavaraj',
      role: 'FrontEnd Developer',
      company: 'Infosys',
      project: 'Speedboat',
      address:{
        home:"#50 Monisha Nilaya" ,
        pinCode:"560100",
        mobile:"9902652016",
        locality:"Vinayaka Layout Bettadasanapura",
        landmark:"Near Edan Huts Daba",
        city:"Bangalore",
        state:"Karnataka"
      }
    },
  ]
  

class ProductDetails extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

    `;
  }
  static get properties() {
    return {
      selectedproductprice: {
        type: String,
        value: '',
      },
      selectedproductname: {
        type: String,
        value: '',
        observer: '_pageChanged'
      },
      
      selectedproduct: {
        type: Array,
        value() {
          return [
          
          ];
        },
        observer: '_pageChanged'
      },
      
    };
  }
  

  constructor() {
    super();       
  }
  ready() {
    super.ready();
  }
  _pageChanged(){
   // console.log(this.selectedproduct)
  }
  
}

window.customElements.define('product-details', ProductDetails);
