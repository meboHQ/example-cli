const fs = require('fs');
const util = require('util');
const sharp = require('sharp');
const Mebo = require('mebo');

// promisifying
const readFile = util.promisify(fs.readFile);

// registering action
@Mebo.grant('cli')
@Mebo.register('resizeImage')
class ResizeImage extends Mebo.Action{
  constructor(){
    super();
    this.createInput('source: filePath', {elementType: "argument", description: "Source image path"});
    this.createInput('width: numeric', {description: "Width used for the target image"});
    this.createInput('height: numeric', {description: "Height used for the target image"});

    this.setMeta('description', "Example of resize image action");
  }

  async _perform(data){
    // resize implementation
    const imageBuffer = await readFile(data.source);
    const resizedImageBuffer = await (sharp(imageBuffer)
      .resize(data.width, data.height, {
        kernel: sharp.kernel.lanczos2,
      }) .toBuffer());

    return resizedImageBuffer;
  }
}

module.exports = ResizeImage;
