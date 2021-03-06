const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.2.0'].messages.create ({
  // Welcome the new user with a list of rules of the server
  // The list of rules is put in an embed
  channel_id: `912925692121972768`,
  content: `Welcome to our server <@${context.params.event.user.id}>! \nYou can **@R-Bot** to view all the commands available.`,
  tts: false,
  embeds: [
    {
      type: 'rich',
      title: `Rules:`,
      description: '',
      color: 0xffd000,
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