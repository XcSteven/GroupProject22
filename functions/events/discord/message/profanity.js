const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let event = context.params.event;
let badWordsList = [
  'ass', 'a$$', 'asshole', 'a$$hole', 'anus', 'anas', 'arse', 'arsehole',
  'bitch', 'b1tch', 'b*tch', 'bastard', 'b!tch', 'bjtch', 'bitches', 'b*tches', 'b!tches', 'bjtches',
  'bullshit', 'bullshiet', 'bullsh1t', 'bullocks',
  'blowjob', 'handjob', 'boob', 'boobs', 'b00b', 'b00bs',
  'cunt', 'c*nt', 'cum', 'cock', 'c0ck', 'c*ck', 'crap', 'cvm',
  'damn',
  'd*ck', 'dik', 'd1ck', 'dick', 'dickhead', 'd1ckhead', 'd*ckhead', 'd!ck', 'd!ckhead', 'djck',
  'fag', 'faggot',
  'jerk', 'gangbang',
  'fk', 'fck','fuck', 'f*ck', 'fuk', 'fucker', 'fuker', 'Fucker', 'fuking', 'fucking', 'f*cking', 'f*king', 'fuq',
  'mf', 'motherfucker', 'nut sack',
  'nigger', 'niggar', 'niggas', 'nigga', 'n*gga', 'nigg', 'nig', 'n!gga', 'n!gger', 'n!ggas',
  'piss', 'p1ss', 'pussy', 'p*ssy', 'porn', 'p0rn', 'p*rn',
  'tit', 'tits', 'thicc',
  'sex', 's*x', 'slut',
  'shit', 'sh1t', '$hit', '$h1t', 'sh*t', 'shiet', 'sh1et', 'sh*et', 'sh!t', 'shjt',
  'mf', 'motherfucker', 'masturbate', 'mdfk', 'milf',
  'whore', 'wh0re',
  'wtf', 'wank',
];
// Read from the Google Sheet
let strikeNote = await lib.googlesheets.query['@0.3.0'].select ({
  range: `E:G`,
  bounds: 'FULL_RANGE',
  where: [
    {
      ID__icontains: `${event.author.id}`,
    },
  ],
  limit: {
    count: 0,
    offset: 0,
  },
});

// Add strike
let strike = 1;
if (strikeNote.rows.length !== 0) {
  strike = parseInt(strikeNote.rows[0].fields['Strike']) + parseInt(1);
};

// Detect bad words in message
let regexString = '\\b' + badWordsList.map((badWord) => {
  return badWord.split('').map((char) => char.charCodeAt(0)).join('');
}).join('\\b|\\b') + '\\b';

let escapedContent = event.content.toLowerCase().split(' ').map((word) => {
  return word.split('').map((char) => char.charCodeAt(0)).join('');
}).join(' ');

// If bad words found
// Delete & send Direct Message
if (escapedContent.match(new RegExp(regexString, 'i'))) {
  await lib.discord.channels['@0.1.1'].messages.destroy ({
    message_id: event.id,
    channel_id: event.channel_id,
  });
  await lib.discord.users['@0.1.4'].dms.create ({
    recipient_id: event.author.id,
    content: ``,
    embed: {
      title: `You've recieved a strike.`,
      description: `Hi!, <@${event.author.id}>. You used a profanity, that's why I deleted your message. Recieve more strikes and you might be banned.`,
      color: 0xFF0000,
    },
  });
  
  // If there are 3 strikes, reset strike
  if (strike == 2) {
    strike = parseInt(strikeNote.rows[0].fields['Strike']) - parseInt(2);
    let guild = await lib.discord.guilds['@0.1.0'].retrieve ({
      guild_id: event.guild_id,
    });
    
    // Send notification to channel
    await lib.discord.channels['@0.1.1'].messages.create ({
      channel_id: event.channel_id,
      content: `<@${event.author.id}> has been banned for using profanities too many times.`,
    });
    
    // Send direct message to user
    await lib.discord.users['@0.1.4'].dms.create ({
      recipient_id: event.author.id,
      content: ``,
      embed: {
        title: `You've been BANNED 💀`,
          description: `Hi!, <@${event.author.id}>. You have been banned from **${guild.name}** for using profanities too many times.`,
          color: 0x800000,
        },
    });
    
    //Ban user
    let ban = await lib.discord.guilds['@0.1.0'].bans.create ({
      user_id: event.author.id,
      guild_id: event.guild_id,
      reason: ``,
    });
  };
  
  //Add strike
  if (strikeNote.rows.length === 0) {
    await lib.googlesheets.query['@0.3.0'].insert ({
      range: `E:G`,
      fieldsets: [
        {
          ID: event.author.id,
          Username: event.author.username,
          Strike: `0`,
        },
      ],
    });
  } else {
    await lib.googlesheets.query['@0.3.0'].update ({
      range: `E:G`,
      bounds: 'FULL_RANGE',
      where: [
        {
          ID__icontains: event.author.id,
        },
      ],
      limit: {
        count: 0,
        offset: 0,
      },
      fields: {
        Username: event.author.username,
        Strike: strike,
      },
    });
  };
};