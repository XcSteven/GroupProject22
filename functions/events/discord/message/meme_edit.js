const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const jimp = require('jimp');

let event = context.params.event;

if (event.content.startsWith('!editmeme pug')) {
  //input fixed URL of image
  let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/922007571156582450/OIP.jpg`);
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme doge')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `http://assets6.popbuzz.com/2015/25/doge-dog-1435136752-view-0.jpg`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme boy')) {
  //input fixed URL of image
  let saved_image = await jimp.read(`https://i.imgflip.com/1am4v4.jpg`);
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme sad')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://cdn.discordapp.com/attachments/916991019009081347/927101986594226186/Sad-Pepe-The-Frog-Transparent-Background.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme cry')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://cdn.discordapp.com/attachments/916991019009081347/927104088787800064/14-142665_crying-pepe-png-pepe-cry-png.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme copium')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://cdn.discordapp.com/attachments/916991019009081347/927104133792694292/copium-png.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme clown')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://cdn.discordapp.com/attachments/916991019009081347/927104172673888266/pepe-kloun-34.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme laugh')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/6.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}

if (event.content.startsWith('!editmeme sweat')) {
  //input fixed URL of image
  let saved_image = await jimp.read(
    `https://cdn.discordapp.com/attachments/916991019009081347/927107437620760636/441-4412701_transparent-twitch-emote-monkas-pepe-monkas.png`
  );
  //read and process the image
  let img = await jimp.read(saved_image);
  //define whole quote after '|'
  let quote = event.content.split('|').slice(1);
  //define top text between '|' and '||'
  let topText = quote[0].split(' ').slice(1).join(' ');
  //define bottom text after '||'
  let bottomText = event.content.split('||').slice(1).join(' ');
  //image size 
  img.resize(1280, 1280);
  await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
  //input top text settings with font size and position
    img.print(font, 75, 50, {                              
        text: topText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  //input bottom text settings with font size and position
    img.print(font, 75, 960, {                            
        text: bottomText,
        alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
      }, 1100);
  });

  let buffer = await img.getBufferAsync(jimp.MIME_PNG);
  //draw the image when there is quote and bottom text
  if ((quote, bottomText)) {
    await lib.discord.channels['@0.1.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Here is your meme.`,
      filename: 'meme.png',
      file: buffer,
    });
  }
}