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

class Login extends PolymerElement {
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
          padding: 10px 18px;
          margin: 8px 0;
          cursor: pointer;
          font-weight: bold;
          border: 0px;
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

 

.loginPanel-content {
    background-color: #fefefe;
    border: 1px solid #888;
}
        
      </style>

  
      <div  class="loginPanel ">

            <form  class="loginPanel-content animate">

                
                <div class="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id="uname" name="uname" value="{{nameInput::input}}">

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" id="psw" name="psw" value="{{pswrdInput::input}}">
                    <span id="errorMsg" style="color:red"></span>

                    <div>
                        <button type="button" on-click="handleClick">Login</button>
                    </div>
                  
                </div>
            </form>
        </div>
    `;
  }
  handleClick(){
   
  }
}

window.customElements.define('login', Login);
