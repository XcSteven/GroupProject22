const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;

//Add Reminder
if (event.content.startsWith('!addreminder')) {
  let key = event.content.split(' ').slice(1).join(' ');
  //Check if it is a blank command
  if (!key) {
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !addreminder *reminder_name* *reminder_month* *reminder_day*.`,
    });
  } else {
    let eventContent = event.content.split(' ').slice(1);
    let eventName = eventContent[0].split('_').join(' ');
    let eventMonth = eventContent[1];
    let eventDay = eventContent[2];
    //Check Event Name
    if (eventName == '') {
      await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Event name not provided. Please try again.`,
      });
    //Check Month
    } else if (eventMonth == null) {
      await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Month input is invalid. Please try again.`,
      });
    //Check Day
    } else if (eventDay == null) {
      await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `Day input is invalid. Please try again.`,
      });
    //Check validation of Month and Day
    } else {
        if (eventMonth > 12 || eventMonth < 1) {
          await lib.discord.channels['@0.2.0'].messages.create ({
          channel_id: event.channel_id,
          content: `Month input is invalid. Please try again.`,
          });
      } else if ((eventMonth == 1 || eventMonth == 3 || eventMonth == 5 || eventMonth == 7 || eventMonth == 8 || eventMonth == 10 || eventMonth == 12) && (eventDay > 31 || eventDay < 1)){
            await lib.discord.channels['@0.2.0'].messages.create ({
            channel_id: event.channel_id,
            content: `Day input is invalid. Please try again.`,
            });
      } else if ((eventMonth == 4 || eventMonth == 6 || eventMonth == 9 || eventMonth == 11) && (eventDay > 30 || eventDay < 1)){
            await lib.discord.channels['@0.2.0'].messages.create ({
            channel_id: event.channel_id,
            content: `Day input is invalid. Please try again.`,
            });
      } else if ((eventMonth == 2) && (eventDay > 29 || eventDay < 1)){
            await lib.discord.channels['@0.2.0'].messages.create ({
            channel_id: event.channel_id,
            content: `Day input is invalid. Please try again.`,
            });
      //If everything is valid, write information in Google Sheet
      } else { 
        await lib.googlesheets.query['@0.3.0'].insert ({
          range: `A:C`,
          fieldsets: [
            {
              Name: eventName,
              Event_Month: eventMonth,
              Event_Day: eventDay,
            },
          ],
        });
        //Send comfirmation message
        await lib.discord.channels['@0.2.0'].messages.create ({
            channel_id: event.channel_id,
            content: `<@${event.author.id}> added *${eventName}*. \nType !deletereminder *${eventName}* to cancel.`,
        });
      }
    }
  }
}

//Delete Reminder
if (event.content.startsWith('!deletereminder')) {
  let eventName = event.content.split(' ').slice(1).join(' ');
  //Check if it is a blank command
  if (!eventName) {
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !deletereminder *reminder name*.`,
    });
  //Delete event in Google Sheet
  } else {
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
        Event_Month:'',
        Event_Day:'',
      },
    });
    //Send confirmation message
    await lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `<@${event.author.id}> removed *${eventName}*.`,
    });
  }
}