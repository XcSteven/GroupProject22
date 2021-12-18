const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let status = context.params.event.content.split(' ').slice(1).join(' ');
await lib.discord.users['@0.1.5'].me.status.update ({
  activity_name: status, 
  activity_type: `GAME`,
  status: 'ONLINE',
});
await lib.discord.channels['@0.2.2'].messages.create ({
  channel_id: context.params.event.channel_id,
  content: `Status set!`,
});