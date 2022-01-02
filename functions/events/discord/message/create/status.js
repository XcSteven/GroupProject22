const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
let key = event.content.split(' ').slice(1).join(' ');

if (!key) {
  return lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `You forgot to add a keyword! Try again with !setstatus *keyword*.`,
  });
} else {
  await lib.discord.users['@0.1.5'].me.status.update ({
    activity_name: key, 
    activity_type: `GAME`,
    status: 'ONLINE',
  });
  await lib.discord.channels['@0.2.2'].messages.create ({
    channel_id: context.params.event.channel_id,
    content: `Status set to **${key}**!`,
  });
};