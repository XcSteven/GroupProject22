const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const gis = require('g-i-s');

let event = context.params.event;

if (event.content.startsWith('!meme')) {
let memeSearch = event.content.split(' ').slice(1).join(' ') + `meme`;

await new Promise((resolve, reject) => {
    gis(`${memeSearch}`, async function findImage(err, res){
      const memeImage = res[Math.floor(Math.random()*res.length)]
      await lib.discord.channels['@0.1.0'].messages.create ({
        channel_id: event.channel_id,
        content: ``,
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
    })
  });
}