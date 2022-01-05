const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
let identifyKey = `__${event.author.id}_note__`;

// !addnote prefix
if (event.content.startsWith('!addnote')) {
  // Retrieve the user note
  let userNote = event.content.split(' ').slice(1).join(' ');
  if (!userNote) {
    // Return error if does not find any notes
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add the note content! Try again with !addnote *note_content*.`,
    });
  } else {
    await lib.utils.kv['@0.1.16'].set ({
      // Set the identifying key of the note as the user ID
      // and the value as the user note
      key: identifyKey,
      value: userNote
    });
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: `<@${event.author.id}> noted something!`
    });
  };
// !viewnote prefix
} else if (event.content.startsWith('!viewnote')) {
  let addedNote = await lib.utils.kv['@0.1.16'].get ({
    key: identifyKey
  });
  // If found any note associated with the current user, display it
  if (addedNote) {
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: [`<@!${event.author.id}>'s note:`, addedNote].join('\n')
    });
  // If not, return error
  } else {
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: `No notes found. Add one using !addnote *note_content*.`
    });
  }
// !deletenote prefix
} else if (event.content.startsWith('!deletenote')) {
  // Find the note of the current user and delete it
  await lib.utils.kv['@0.1.16'].clear ({
    key: identifyKey
  });
  await lib.discord.channels['@0.1.1'].messages.create ({
    channel_id: event.channel_id,
    content: `<@!${event.author.id}> deleted their note!`
  });
}