exports['default'] = {
  smartAgentHello: (api) => {
    return {
      disabled: false,  // a simple way to disable specific smart-agent plugins
      // if you want more control over this without having to edit the config file try this
      // disabled: process.env.SMART_AGENT_HELLO_DISABLED ?  JSON.parse(process.env.SMART_AGENT_DISABLED_DISABLED) : true,
      name: 'HelloAgent',
      account: "the account/identity you have created and created the hello-world contract with",
      helloAPI: '[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"salut","type":"string"}],"name":"hello","outputs":[{"name":"greeting","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"string"}],"name":"setPrompt","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
    }
  }
}
