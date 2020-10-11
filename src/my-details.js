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
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class MyDetails extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .card{
          width: calc(25% - 52px);
          float: left;
          margin: 10px;
        }
        @media screen and (max-width: 450px) {
            .card {
                width: calc(100% - 52px);
                text-align: center;
            }
          }
          @media screen and (min-width: 450px) and (max-width: 750px){
            .card {
                width: calc(50% - 52px);
            }
          }
          @media screen and (min-width: 750px) and (max-width: 1156px){
            .card {
                width: calc(33.333% - 52px);
            }
          }
        .pro_img{
          width: 100%;
          float: left;
          margin-bottom: 10px;
        }
        .pro_img img{
          width: 50%;
        }
        .pro_details{
          width: 100%;
          float: left;
        }
        .pro_details span{
          width: 100%;
          float: left;
          font-size: 13px;
          color: blue;
          line-height: 24px;
        }
        .pro_details p{
          width: 100%;
          float: left;
          margin: 0px 0px;
          font-weight: 600;
          color: black;
          font-size: 14px;
        }
        .pro_details .pro_sitename{
          width: 100%;
          float: left;
          margin: 0px 0px;
          color: black;
          font-size: 14px;
          font-weight: 100;
        }
        .pro_details label{
          width: 100%;
          float: left;
          margin: 0px;
          font-size: 13px;
          color: gray;
          line-height: 24px;
        }
        .add_product{
            width: 100%;
            float: left;
            text-align: right;
        }
        .add_product span{
            padding: 6px 14px;
            background: blue;
            color: white;
            border-radius: 5px;
            font-size: 12px;
            text-transform: capitalize;
            cursor: pointer;
        }
        .prod_name_header{
          width: calc(100% - 52px);
          float: left;
        }
        .prod_name_header h4{
          margin: 0px;
          font-weight: 600;
          color: black;
          font-size: 16px;
          width: auto !important;
          float: left;
      }

      .total-item {
        left: 24px;
        bottom: 30px;
        position: absolute;
        color: white;
        font-weight: 700;
        background-color: #254aff;
        border-radius: 50%;
        width: 20px;
        text-align: center;
        font-size: 14px;
      }

      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"  data="{{routeData}}" >
      </app-location>

      <div class="card prod_name_header">
         <h4>Product Details</h4>
         <div style="float: right; width: auto;    position: relative;cursor: pointer" on-click="checkProducts" >
            <sapn on-click="redirectCart"><span class="total-item">{{count}}</span>
            <svg  style="color: black;" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg></span>
         </div>
      </div>
   
      <template is="dom-repeat" items="{{productList}}">
        <div class="card">
            <div class="pro_img""> <img src=[[item.prodimage]]>
            </div>
            <div class="pro_details">
                <span>[[item.prodname]]</span>
                <p><b>[[item.prodcost]]</b></p>
                <p class="pro_sitename">[[item.prodSite]]</p>
                <label>[[item.proddelivery]]</label>
            </div>
            <div class="add_product">
              <span on-click="addProduct" >add</span>
            </div>
        </div>
      </template>
    `;
  }
  static get properties() {
    return {
      productList: {
        type: Array,
        value() {
          return [
            {prodimage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtnwVtd4v8AgQK3ISM8_4CfW2PI7m7v1fzCNo4DoWpa5xBD5qEBLGyDgxe0km6JHZ1s7bZKr-5hFo&usqp=CAc", prodname: 'Lenovo s4 8gb', prodcost: '$42,506',prodSite: 'Amezon', proddelivery: 'Free Delivery' },
            {prodimage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRuE7qO_FOWCxyuPNoRGMmTmqiPjwWoY0HCPb2ijj2Zpwckl6o_cowKdx90Ey15ZlMvYFKA8PD82g&usqp=CAc", prodname: 'Mi Intel core 8gb', prodcost: '$62,506',prodSite: 'FlipCart', proddelivery: 'Free Delivery' },
            {prodimage:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQiLPoEyvzb0lLRv9vvJtXpuJnJlL6ocuDn6WNNC_LUzvoRULulag_KgaVycrluZCfA_6_k97aBZa8&usqp=CAc", prodname: 'HP I8 s4 6gb', prodcost: '$45,506',prodSite: 'Reliance Digital', proddelivery: 'Free Delivery' },
            {prodimage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQE0tbu5bqFo0Y-SFye13isTouFRSviDWGtX0h7Fujfk6kvOQMIonTt3QVrxThcVDvTSfCwGl0YwAs&usqp=CAc", prodname: 'MI Notebook Silver', prodcost: '$35,506',prodSite: 'Amezon', proddelivery: 'Free Delivery' },
            {prodimage:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtnwVtd4v8AgQK3ISM8_4CfW2PI7m7v1fzCNo4DoWpa5xBD5qEBLGyDgxe0km6JHZ1s7bZKr-5hFo&usqp=CAc", prodname: 'Lenovo Idepad 8gb', prodcost: '$60,506',prodSite: 'Flipcart', proddelivery: 'Free Delivery' },
            {prodimage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTlIn8GFmShcRiDq71nEB_KCGKHyK0U8bNE2K2X6RMA7nvaHrXOGssr-kH0cg0mKDHyhQoqBD6R0w&usqp=CAc", prodname: 'HP 14 10th Generation', prodcost: '$67,506',prodSite: 'Amezon', proddelivery: 'Delivery Cost 100 Rs' },

          ];
        }
      },
      
      selectedproduct: {
        type: Array,
        value: []
        },
        count: {
          type: Number,
          value: 0,
        },
      
    };
  }

  ready() {
  
    super.ready();
    let selcetedprodts = JSON.parse(localStorage.getItem("details"));
   // console.log(this.selcetedprodts)
    if(selcetedprodts != undefined){
      // alert("hi")
       this.selectedproduct= selcetedprodts
     }
  
    //console.log(this.selectedproduct)
 
    
    this.count = localStorage.getItem("count");
   
  }

  addProduct(e) {
    let index = e.model.index
     let parms= {};
      parms["selectedpname"] = this.productList[index].prodname;
      parms["selectepCost"] = this.productList[index].prodcost;
      parms["selectepimage"] = this.productList[index].prodimage;
       this.selectedproduct.push(parms)
      // console.log(this.selectedproduct)
       this.count++;
       localStorage.setItem('count', this.count);
       localStorage.setItem('details', JSON.stringify( this.selectedproduct));
       //console.log( this.count)
  }

  checkProducts(){
    this.set("route.path", "/view1")
  }

}

window.customElements.define('my-details', MyDetails);
