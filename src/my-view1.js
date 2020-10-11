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

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        .card{
          width: calc(100% - 82px);
          float: left;
          display: flex;
          align-items: center;
          margin: 10px 24px;
          position: relative;
          
        }
       
        .pro_img{
          width: 50%;
          float: left;
        }
        .pro_details{
          width: 50%;
          float: left;
        }
        .no_prodcuts{
          height: 400px;
          justify-content: center;
          align-items: center;
          display: flex;
          width: 100%;
          font-size: 23px;
          color: red;
          font-family: auto;
        }
        .delete_prod{
          position: absolute;
          right: 15px;
          top: 10px;
          cursor: pointer;
          text-decoration: underline;
          color: blue;
        }
        .pro_details p{
          margin: 5px 0px;
        }

        @media screen and (max-width: 500px) {
          .card {
            display: block;
            text-align: center;
          }
          .pro_img {
            width: 100% !important;
            float: left !important;
          }
          .pro_details {
            width: 100% !important;
            float: left !important;
          }
        }
      </style>

      <template is="dom-if" if="{{showerrorProduct}}">
        <div class="card">
          <p class="no_prodcuts">No Selected Products</p>
        </div>
      </template>
      <template is="dom-repeat" items="{{selectedProducts}}">
        <div class="card">
        <div class="add_product">
           <span on-click="deleteProduct" class="delete_prod"><img src="https://img.icons8.com/windows/50/000000/delete-forever.png"/></span>
         </div>
            <div class="pro_img""> <img src=[[item.selectepimage]]>
            </div>
            <div class="pro_details">
                <span>[[item.selectedpname]]</span>
                <p><b>[[item.selectepCost]]</b></p>
              
            </div>
           
        </div>
      </template>
    `;
  }
  static get properties() {
    return {
      
      selectedProducts: {
        type: Array,
        value: []
      },
      showerrorProduct: {
        type: Boolean,
        value: false
      },
      count: {
        type: Number,
        value: localStorage.getItem("count"),
      },
    };
  }

  ready() {
    super.ready();
    this.selectedProducts = JSON.parse(localStorage.getItem("details"));
    console.log(this.selectedProducts)
    if(this.selectedProducts === null || this.selectedProducts.length === 0){
      this.showerrorProduct = true;
    }
  }
  deleteProduct(e) {
    let index = e.model.index
    //alert(index)
     this.selectedProducts.splice(index,1);
     localStorage.setItem('details', JSON.stringify( this.selectedProducts));
     this.count=this.count-1;
     localStorage.setItem('count', this.count);
     this.selectedProducts =  this.selectedProducts = JSON.parse(localStorage.getItem("details"));
     
  }
}

window.customElements.define('my-view1', MyView1);
