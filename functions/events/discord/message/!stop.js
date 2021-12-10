const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let VOICE_CHANNEL = '916900606763991130';
let message = context.params.event.content;

if (message.startsWith('!stop')) {               
  await lib.discord.voice['@0.0.1'].channels.disconnect({
    guild_id: `${context.params.event.guild_id}`
  });
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Disconnected from <#${VOICE_CHANNEL}>!`,
  })
};