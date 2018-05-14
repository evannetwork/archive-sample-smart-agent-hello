'use strict'

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

  const account = api.config.smartAgentHello.account

  api.bcc.contractLoader.contracts['HelloWorld'] = {
    "interface": api.config.smartAgentHello.helloAPI
  };

  const hello = runtime.contractLoader.loadContract('HelloWorld', '0x9c0Aaa728Daa085Dfe85D3C72eE1c1AdF425be49');
  
  api.smartAgentHello = {
    setMessage: (msg) => {
      
      // you not only "export" through the api object
      // you also import through it, the configuration for example
      
      // but also the blockchain core library
      // here a writing contract method call
      return await api.bcc.executor.executeContractTransaction(
        hello, 'setPrompt', { from: account }, msg);
    }

    // here a non-writing call, no need for accountIDs here, because everyone can read everything
    hello: (salut) => {
      return await api.bcc.executor.executeContractCall(hello, 'hello',  salut );
    }
  }
  
  async initialize() {
    
    if (config.disabled) return
    
  }
  
  async stop() {}

}

