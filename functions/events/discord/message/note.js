const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let userNoteKey = `__${context.params.event.author.id}_note__`;

if (context.params.event.content.startsWith('!addnote')) {
  let noteText = context.params.event.content.split(' ').slice(1).join(' ');
  await lib.utils.kv['@0.1.16'].set ({
    key: userNoteKey,
    value: noteText
  });
  await lib.discord.channels['@0.1.1'].messages.create ({
    channel_id: `${context.params.event.channel_id}`,
    content: `<@${context.params.event.author.id}> noted something!`
  });
}