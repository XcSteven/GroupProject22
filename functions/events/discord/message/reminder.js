const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

if (context.params.event.content.startsWith('!addreminder')){
  let eventContent = context.params.event.content.split(' ').slice(1);
  let eventName = eventContent[0].split('_').join(' ');
  let eventMonth = eventContent[1];
  let eventDay = eventContent[2];
await lib.googlesheets.query['@0.3.0'].insert({
  range: `A:D`,
  fieldsets: [
    {
      Name: eventName,
      Month: eventMonth,
      Day: eventDay,
    },
  ],
});

await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@${context.params.event.author.id}> added *${eventName}* \nType !deletereminder *${eventName}* to cancel.`,
  });
}
