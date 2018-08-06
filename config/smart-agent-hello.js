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

exports['default'] = {
  ethAccounts: {
    '0xE3e091EBC4A2474fb45C00B358B3D3ec5b1550AE' : '32cb1206bad10bdd1c009d02ab53b9c7e0d80308e63dbe51a90bc9f8fcb7a9c2',
  },
  smartAgentHello: (api) => {
    return {
      disabled: false,  // a simple way to disable specific smart-agent plugins
      // if you want more control over this without having to edit the config file try this
      // disabled: process.env.SMART_AGENT_HELLO_DISABLED ?  JSON.parse(process.env.SMART_AGENT_DISABLED_DISABLED) : true,
      name: 'HelloAgent',
      account: "the account/identity you have created and created the hello-world contract with",
      contract: "0xc5062259049dfbd791ed4e16c798bc2096877194",
      //contract: "0x5fb05f9627a28ba389e8f5e80fec7dcce17bc3c2",
      helloAPI: '[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"salut","type":"string"}],"name":"hello","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"string"}],"name":"setPrompt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]'
      //helloAPI: '[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"salut","type":"string"}],"name":"hello","outputs":[{"name":"greeting","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"string"}],"name":"setPrompt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
    }
  }
}
