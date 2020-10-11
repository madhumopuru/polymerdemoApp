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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';

class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        button {
            background-color: #f59031;
            color: white;
            padding: 15px 18px;
            margin: 15px 0px 10px;
            cursor: pointer;
            font-weight: bold;
            border: 0px;
            width: 100%;
        }
        input[type=text], input[type=password] {
          background: #eae7e7;
          width: 100%;
          padding: 12px;
          margin: 8px 0;
          display: inline-block;
          box-sizing: border-box;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          -ms-border-radius: 3px;
          -o-border-radius: 3px;
          border-radius: 3px;
          border: 1px solid #c8c8c8;
          color: #777;
          font: 13px Helvetica, Arial, sans-serif;
      }
      body {
        color: #000;
        font: 14px Arial;
        margin: 0 auto;
        padding: 0;
        position: relative;
      }
      .main{
         min-height: 100%;
          float: left;
          height: 100% !important;
          max-height: 100%;
          width: 100%;
      }
      
      .container { 
          position: relative; 
          padding: 16px;
      }
      
      #logo {
          height: 50px;
          margin: 24px 0 0 0;
      }
      
      a {
        color: #003366;
        background-color: transparent;
        font-weight: bold;
        text-decoration: underline;
        padding: 10px;
        cursor: pointer;
      }
      
      .login_header{
        text-align: center;
        font-size: 22px;
        margin: 10px 0px;
      }
      .loginPanel{
        width: 400px;
        float: left;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 8px grey;
      }
      
      .loginPanel-content {
      background-color: #fefefe;
      
      }
      .error_msg{
        color: red;
        margin: 0px;
        font-size: 14px;
      }
      .form_fileds{
        margin: 0px 0px 10px;
        width: 100%;
        float: left;
      }
      
      @media screen and (max-width: 450px) {
        .loginPanel {
          width: 320px;
        }
      }
          
        </style>
        <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
        </app-location>
          <div class="main">
            <div  class="loginPanel ">
               <h3 class="login_header">Login</h3>
                  <form  class="loginPanel-content animate">
                      <div class="container">
                          <div class="form_fileds">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" id="uname" name="uname" value="{{nameInput::input}}">
                            <p class="error_msg">[[nameerror]]</p>
                          </div> 
                          <div class="form_fileds"> 
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" id="psw" name="psw" value="{{pswrdInput::input}}">
                            <p class="error_msg">[[pswrderror]]</p>
                          </div>
                          <p class="error_msg" style="text-align: center">[[loginerror]]</p>
                          <div class="form_fileds">
                              <button type="button" on-click="handleClick">SUBMIT</button>
                          </div>
                      </div>
                  </form>
              </div>
            </div>
      
          `;
        }
        static get properties() {
          return {
            
            nameerror:{
              type: String,
              value: ''
            },
            pswrderror:{
              type: String,
              value: ''
            },
            loginerror : {
              type: String,
              value: ''
            }
          };
        }
        
      
        constructor() {
          super();       
        }
        ready() {
          super.ready();
          // let userLogin = localStorage.getItem('userLogin')
          // if(userLogin == 'true'){
          //   this.set("route.path", "/mydetails")
          // }
        }

        
        handleClick(){
          if (this.nameInput == null || this.nameInput == undefined || this.nameInput == '')
          {
             this.nameerror = 'Please Enter Name';
             return false;
          }
          else{
            this.nameerror = '';
          }
          if (this.pswrdInput == null || this.pswrdInput == undefined || this.pswrdInput == '')
          {
            this.pswrderror = 'Please Enter Password';
            return false;
          }
          else{
            this.pswrderror='';
          }
          if(this.nameInput !== 'polymer' && this.pswrdInput !== '12345'){
            this.loginerror = 'Invalid Credentails';
            return false;
          }
          else{
            localStorage.setItem("userLogin", 'true')
            this.loginerror = '';
            this.set("route.path", "/productDetails")

          }
        }
}

window.customElements.define('my-login', MyLogin);
