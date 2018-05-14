'use strict'
const { Action, api } = require('actionhero')

class SmartAgentHelloHello extends Action {
  constructor() {
    super()
    this.name = 'smart-agents/hello/hello'
    this.description = 'Returns a greeting.'
    this.inputs = {
      salut: {
        required: true,
      },
    }
    this.outputExample = { greeting: "greeting" }
  }

  async run({ params, response }) {
    try {
      response.greeting = await api.smartAgentHello.hello(params.salut)
      response.status = 'success'
    } catch (ex) {
      api.log(ex)
      response.status = 'error'
      response.error = ex
    }
  }
}

module.exports = {
  SmartAgentHelloHello
}
