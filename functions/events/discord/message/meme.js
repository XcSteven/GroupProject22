const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const gis = require('g-i-s');

let event = context.params.event;

// Find a meme using user input
if (event.content.startsWith('!meme')) {
  let key = event.content.split(' ').slice(1).join(' ');

  if (!key) {
    // return error if does not find any keywords
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !meme *keyword*.`,
    });
  } else {
    // Add 'meme' suffix to the user input
    // Ex: If the user input is '!meme doge', the search keyword will be 'doge meme'
    let memeSearch = event.content.split(' ').slice(1).join(' ') + ` meme`;
    await new Promise((resolve, reject) => {
        gis(memeSearch, async function findImage(err, res) {
          // Get a random search result
          const memeImage = res[Math.floor(Math.random()*res.length)]
          // Put the search result in an embed
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