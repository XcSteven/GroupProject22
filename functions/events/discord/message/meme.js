const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const gis = require('g-i-s');

if (context.params.event.content.startsWith('!meme')) {
let memeSearch = context.params.event.content.split(' ').slice(1).join(' ') + 'meme';

await new Promise((resolve, reject) => {
    gis(`${memeSearch}`, async function findImage(err, res) {
      await lib.discord.channels['@0.1.0'].messages.create ({
        channel_id: context.params.event.channel_id,
        content: `${res[Math.floor(Math.random()*res.length)].url}`
      });
    })
  });
}