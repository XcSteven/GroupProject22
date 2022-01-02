const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
let identifyKey = `__${event.author.id}_note__`;

if (event.content.startsWith('!addnote')) {
  let userNote = event.content.split(' ').slice(1).join(' ');
  if (!userNote) {
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !addnote *keyword*.`,
    });
  } else {
    await lib.utils.kv['@0.1.16'].set ({
      key: identifyKey,
      value: userNote
    });
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: `<@${event.author.id}> noted something!`
    });
  };
} else if (event.content.startsWith('!viewnote')) {
  let addedNote = await lib.utils.kv['@0.1.16'].get ({
    key: identifyKey
  });
  if (addedNote) {
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: [`<@!${event.author.id}>'s note:`, addedNote].join('\n')
    });
  } else {
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: `No notes found. Add one using !addnote *keyword*.`
    });
  }
} else if (event.content.startsWith('!deletenote')) {
  await lib.utils.kv['@0.1.16'].clear ({
    key: identifyKey
  });
  await lib.discord.channels['@0.1.1'].messages.create ({
    channel_id: event.channel_id,
    content: `<@!${event.author.id}> deleted their note!`
  });
}