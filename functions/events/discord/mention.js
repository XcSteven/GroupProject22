const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: context.params.event.channel_id,
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
          value: `No curse words (If you curse, you will get a strike; 3 strikes = banned from the server)`
        },
        {
          name: `Rule #2`,
          value: `Be friendly, do not harass others`
        },
        {
          name: `Rule #3`,
          value: `Be active`
        }
      ]
    }
  ]
});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: context.params.event.channel_id,
  content: '',
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: 'Commands:',
      description: '',
      color: 0xCF361F,
      fields: [
        {
          name: `!meme *keyword*`,
          value: `Find a random meme on the Internet using the keywords provided.`
        },
        {
          name: `!memedit`,
          value: "\u200B"
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
          name: `!addnote *note_content*`,
          value: `Add a note for later use.`
        },
        {
          name: `!viewnote`,
          value: `View the saved note.`
        },
        {
          name: `!deletenote`,
          value: `Delete the saved note.`
        },
        {
          name: `!addreminder *reminder_name* *reminder_month* *reminder_day*`,
          value: "\u200B"
        },
        {
          name: `!viewreminder`,
          value: "\u200B"
        }
      ]
    }
  ]
});