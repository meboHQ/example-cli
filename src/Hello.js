const Mebo = require('mebo');

// registering action
@Mebo.grant('cli')
@Mebo.register('hello')
class Hello extends Mebo.Action{
  constructor(){
    super();
    this.createInput('content?: text', {defaultValue: 'Hello, World!', elementType: "argument", description: "output text"});
    this.setMeta('description', "Example printing hello world");
  }

  async _perform(data){
    return data.content;
  }
}

module.exports = Hello;
