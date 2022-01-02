const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;

if (event.content.startsWith('!addreminder')) {
  let eventContent = event.content.split(' ').slice(1);
  let eventName = eventContent[0].split('_').join(' ');
  let eventMonth = eventContent[1];
  let eventDay = eventContent[2];
  if (eventMonth > 12 || eventMonth < 1){
    await lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `Month is invalid. Please try again.`,
    });
  } else if ((eventMonth == 1 || eventMonth == 3 || eventMonth == 5 || eventMonth == 7 || eventMonth == 8 || eventMonth == 10 || eventMonth == 12) && (eventDay > 31 || eventDay < 1)){
        await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Day is invalid. Please try again.`,
        });
  } else if ((eventMonth == 4 || eventMonth == 6 || eventMonth == 9 || eventMonth == 11) && (eventDay > 30 || eventDay < 1)){
        await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Day is invalid. Please try again.`,
        });
  } else if ((eventMonth == 2) && (eventDay > 29 || eventDay < 1)){
        await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Day is invalid. Please try again.`,
        });
  } else { 
  await lib.googlesheets.query['@0.3.0'].insert ({
    range: `A:C`,
    fieldsets: [
      {
        Name: eventName,
        Month: eventMonth,
        Day: eventDay,
      },
    ],
  });

  await lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `<@${event.author.id}> added *${eventName}* \nType !deletereminder *${eventName}* to cancel.`,
  });
}
}

if (event.content.startsWith('!deletereminder')) {
  let eventContent = event.content.split(' ').slice(1);
  let eventName = eventContent[0].split('_').join(' ');
  
  res = await lib.googlesheets.query['@0.3.0'].update ({
    range: `A:C`,
    bounds: 'FULL_RANGE',
    where: [
      {
        Name: eventName,
      },
    ],
    limit: {
      count: 0,
      offset: 0,
    },
    fields: {
      Name:'',
      Month:'',
      Day:'',
    },
  });
  await lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `<@${event.author.id}> removed *${eventName}*.`,
  });
}
