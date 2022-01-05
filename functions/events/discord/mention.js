const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;

// If R-Bot is mentioned, it will give out the server rules and available commands
// The list of rules is put in an embed
await lib.discord.channels['@0.2.0'].messages.create ({
  channel_id: event.channel_id,
  content: `Every time you mention me, I will give you the rules and all the commands I can do!`,
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: `Rules:`,
      description: '',
      color: 0x32A6A8,
      fields: [
        {
          name: `Rule #1`,
          value: `No curse words (If you curse, you will get a strike; 3 strikes = banned from the server).`
        },
        {
          name: `Rule #2`,
          value: 'Be friendly, do not harass others.'
        },
        {
          name: `Rule #3`,
          value: `Be active.`
        }
      ]
    }
  ]
});

// The list of commands is put in an embed
await lib.discord.channels['@0.2.0'].messages.create ({
  channel_id: event.channel_id,
  content: '',
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: `Commands:`,
      description: '',
      color: 0xF57842,
      fields: [
        {
          name: `!meme *keyword*`,
          value: `Find a random meme on the Internet using the provided keyword.`
        },
        {
          name: `!editmeme *keyword* | *top_text* || *bottom_text*`,
          value: `Take the meme photo with the provided keyword and add captions to the photo. \nCurrently there are 9 keywords to choose from: \n**pug, doge, boy, sad, cry, copium, laugh, sweat, clown**`
        },
        {
          name: `!play *keyword*`,
          value: `Play the song with the provided keyword in the voice channel.`
        },
        {
          name: `!pause`,
          value: `Pause the current playing song.`
        },
        {
          name: `!resume`,
          value: `Resume the current paused song.`
        },
        {
          name: `!stop`,
          value: `Stop playing music.`
        },
        {
          name: `!lyric *keyword*`,
          value: `Find the lyric of the song with the provided keyword.`
        },
        {
          name: `!addnote *note_content*`,
          value: `Add an own note for later use.`
        },
        {
          name: `!viewnote`,
          value: `View own saved note.`
        },
        {
          name: `!deletenote`,
          value: `Delete own saved note.`
        },
        {
          name: `!addreminder *reminder_name* *reminder_month (int)* *reminder_day*`,
          value: `Create a new reminder.`
        },
        {
          name: `!deletereminder *reminder name*`,
          value: `Delete the reminder with the provided name.`
        },
        {
          name: `!setstatus *keyword*`,
          value: `Customize the Bot status with the provided keyword. \nEx: If the provided keyword is *Hello*, R-Bot status will be **Playing Hello**.`
        }
      ]
    }
  ]
});