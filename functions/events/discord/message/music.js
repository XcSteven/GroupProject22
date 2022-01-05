const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});  
// Take song from YouTube  
const ytdl = require('ytdl-core');                                    
const ytSearch = require('yt-search');   

// Discord voice channel's ID
let voice = '908575479064305697';      
let event = context.params.event;

// Plays music
if (event.content.startsWith('!play')) {
  let key = event.content.split(' ').slice(1).join(' ');
  
  try {
    let ytLink;  
    //Checks and reminds user if keyword's missing
    if (!key) {
      return lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `You forgot to add a keyword! Try again with !play *keyword*.`,
      });
    }
    // Song searching
    if (!key.includes('youtube.com')) {
      let results = await ytSearch(key);
      if (!results?.all?.length) {
        return lib.discord.channels['@0.2.0'].messages.create ({
          channel_id: event.channel_id,
          content: `No results found for your keyword. Please try a different one.`,
        });
      }
      ytLink = results.all[0].url;
    } else {
      ytLink = key;
    }
    let info = await ytdl.getInfo(ytLink);
    await lib.discord.voice['@0.0.1'].tracks.play ({
      channel_id: voice,
      guild_id: event.guild_id,
      download_info: info
    });
    // Plays music in voice channel
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Now playing **${info.videoDetails.title}**`,
    });
  } catch (e) {                                                      
    return lib.discord.channels['@0.2.0'].messages.create ({
      channel_id: event.channel_id,
      content: `Failed to play track!`,
    });
  }
  // Stops the current playing music
} else if (event.content.startsWith('!stop')) {              
  await lib.discord.voice['@0.0.1'].channels.disconnect ({
    guild_id: event.guild_id
  });
  // Bot leaves the voice channel
  await lib.discord.channels['@0.2.0'].messages.create ({       
    channel_id: event.channel_id,
    content: `Disconnected from <#${voice}>!`,
  });
  // Pauses music
} else if (event.content.startsWith('!pause')) {                
  await lib.discord.voice['@0.0.1'].tracks.pause ({
    guild_id: event.guild_id
  });
  return lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `Paused.`,
  });
  // Resume music
} else if (event.content.startsWith('!resume')) {            
  await lib.discord.voice['@0.0.1'].tracks.resume ({
    guild_id: event.guild_id
  });
  return lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `Resumed.`,
  });
  // Search for song's lyric
} else if (event.content.startsWith('!lyric')) {
  const name = event.content.split(' ').slice(1).join(' ').trim();
  // Checks and reminds user if keyword's missing
  if (!name)
    return lib.discord.channels['@0.1.2'].messages.create ({
      channel_id: event.channel_id,
      content: `You forgot to add a keyword! Try again with !lyric *keyword*.`,
      message_reference: {
        message_id: event.id,
      },
    });

  // Search for song's lyric from Genius.com 
  const song = await lib.ctks['genius-lyrics']['@1.0.2']({name});
  if (!song || !song.lyrics)
    return lib.discord.channels['@0.1.2'].messages.create ({
      channel_id: event.channel_id,
      content: `Sorry!, i was unable to find any song with given name.`,
      message_reference: {
        message_id: event.id,
      },
    });

  // Showing lyric
  await lib.discord.channels['@0.1.2'].messages.create ({
    content: ``,
    channel_id: event.channel_id,
    embed: {
      title: song.title,
      color: 0x6868AC,
      thumbnail: {url: song.song_art_image_url},
      description: song.lyrics,
    },
  });
}
