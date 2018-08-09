const Mebo = require('mebo');

// registering action
@Mebo.grant('cli')
@Mebo.register('hello')
class ResizeImage extends Mebo.Action{
  constructor(){
    super();
    this.createInput('content?: text', {defaultValue: 'Hello, World!', elementType: "argument", description: "output text"});
    this.setMeta('$cliDescription', "Example printing hello world");
  }

  _perform(data){
    return Promise.resolve(data.content);
  }
}

