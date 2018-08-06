/*
  Copyright (c) 2018-present evan GmbH.
 
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

  
*/

'use strict'

const { Initializer, api } = require('actionhero')


module.exports = class SmartAgentHello extends Initializer {
  constructor() {
    super()
    this.name = 'HelloAgent'
    this.loadPriority = 7000
    this.startPriority = 7000
    this.stopPriority = 7000
  }


  // put anything you need outside of this file, in here
  // this happens if you need to share functionality
  // between initializer and action (or commands) for example
  // common external dependencies are resolved 
  // through the api object as well

  
  async initialize() {
    
    if (api.config.smartAgentHello.disabled) return

    api.bcc.contractLoader.contracts['HelloWorld'] = {
      "interface": api.config.smartAgentHello.helloAPI
    };

    const account = api.config.smartAgentHello.account
    const hello = api.bcc.contractLoader.loadContract('HelloWorld', api.config.smartAgentHello.contract)
    
    api.smartAgentHello = {
      setMessage: async function (msg){
        
        // you not only "export" through the api object
        // you also import through it, the configuration for example
        
        // but also the blockchain core library
        // here a writing contract method call
        return await api.bcc.executor.executeContractTransaction(
          hello, 'setPrompt', { from: account }, msg);
      },

      // here a non-writing call, no need for accountIDs here, because everyone can read everything
      hello: async function (salut) {
        var r = api.bcc.signer.web3.utils.toAscii(
          await api.bcc.executor.executeContractCall(hello, 'hello',  salut ))
        console.log(r)
        return r
      }
    }
    
  }
  
  async stop() {}

}

