const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const jimp = require('jimp');

let event = context.params.event;
if (event.content.startsWith('!editmeme')) {
  let key = event.content.split(' ').slice(1).join(' ');

  if (!key) {
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !editmeme *keyword* | *top_text* || *bottom_text*.`,
    });
  } else {
    if (event.content.startsWith('!editmeme pug')) {
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/922007571156582450/OIP.jpg`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`http://assets6.popbuzz.com/2015/25/doge-dog-1435136752-view-0.jpg`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://i.imgflip.com/1am4v4.jpg`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/927101986594226186/Sad-Pepe-The-Frog-Transparent-Background.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/927104088787800064/14-142665_crying-pepe-png-pepe-cry-png.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/927104133792694292/copium-png.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/927104172673888266/pepe-kloun-34.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://s.tcdn.co/4dd/300/4dd300fd-0a89-3f3d-ac53-8ec93976495e/6.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
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
      let saved_image = await jimp.read(`https://cdn.discordapp.com/attachments/916991019009081347/927107437620760636/441-4412701_transparent-twitch-emote-monkas-pepe-monkas.png`);
      let img = await jimp.read(saved_image);
      let quote = event.content.split('|').slice(1);
      let topText = quote[0].split(' ').slice(1).join(' ');
      let bottomText = event.content.split('||').slice(1).join(' ');
      img.resize(1280, 1280);
      await jimp.loadFont(jimp.FONT_SANS_128_WHITE).then((font) => {
        img.print(font, 75, 50, {
            text: topText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
        img.print(font, 75, 960, {
            text: bottomText,
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_BOTTOM,
          }, 1100);
      });

      let buffer = await img.getBufferAsync(jimp.MIME_PNG);
      if ((quote, bottomText)) {
        await lib.discord.channels['@0.1.0'].messages.create ({
          channel_id: event.channel_id,
          content: `Here is your meme.`,
          filename: 'meme.png',
          file: buffer,
        });
      }
    }
  }
}