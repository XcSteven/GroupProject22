const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const gis = require('g-i-s');

let event = context.params.event;

if (event.content.startsWith('!meme')) {
  let key = event.content.split(' ').slice(1).join(' ');

  if (!key) {
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !meme *keyword*!`,
    });
  } else {
    let memeSearch = event.content.split(' ').slice(1).join(' ') + `meme`;
    await new Promise((resolve, reject) => {
        gis(`${memeSearch}`, async function findImage(err, res){
          const memeImage = res[Math.floor(Math.random()*res.length)]
          await lib.discord.channels['@0.1.0'].messages.create ({
            channel_id: event.channel_id,
            content: `Here is your meme.`,
            tts: false,
            embed: {
              type: 'rich',
              title: '',
              description: '',
              color: 0xB8D43B,
              image: {
                url: memeImage.url,
            },
          },
        });
      });
    });
  };
};