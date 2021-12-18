const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});  
const ytdl = require('ytdl-core');                                    
const ytSearch = require('yt-search');                             

let voice = '908575479064305697';      
let event = context.params.event;

if (event.content.startsWith('!play')) {
  let searchString = event.content.split(' ').slice(1).join(' ');
  
  try {
    let youtubeLink;             
    if (!searchString) {
      return lib.discord.channels['@0.2.0'].messages.create ({
        channel_id: event.channel_id,
        content: `No search string provided!`,
      });
    }
    if (!searchString.includes('youtube.com')) {
      let results = await ytSearch(searchString);
      if (!results?.all?.length) {
        return lib.discord.channels['@0.2.0'].messages.create ({
          channel_id: event.channel_id,
          content: `No results found for your search string. Please try a different one.`,
        });
      }
      youtubeLink = results.all[0].url;
    } else {
      youtubeLink = searchString;
    }
    let info = await ytdl.getInfo(youtubeLink);
    await lib.discord.voice['@0.0.1'].tracks.play ({
      channel_id: voice,
      guild_id: event.guild_id,
      download_info: info
    });
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
} else if (event.content.startsWith('!stop')) {              
  await lib.discord.voice['@0.0.1'].channels.disconnect ({
    guild_id: event.guild_id
  });
  await lib.discord.channels['@0.2.0'].messages.create ({       
    channel_id: event.channel_id,
    content: `Disconnected from <#${voice}>!`,
  });
} else if (event.content.startsWith('!pause')) {                
  await lib.discord.voice['@0.0.1'].tracks.pause ({
    guild_id: event.guild_id
  });
  return lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `Paused.`,
  });
} else if (event.content.startsWith('!resume')) {            
  await lib.discord.voice['@0.0.1'].tracks.resume ({
    guild_id: event.guild_id
  });
  return lib.discord.channels['@0.2.0'].messages.create ({
    channel_id: event.channel_id,
    content: `Resumed.`,
  });
} else if (event.content.startsWith('!lyric')) {
  const name = event.content
    .split(' ')
    .slice(1)
    .join(' ')
    .trim();
  if (!name)
    return lib.discord.channels['@0.1.2'].messages.create ({
      channel_id: event.channel_id,
      content: `Please provide the song name!`,
      message_reference: {
        message_id: event.id,
      },
    });

  const song = await lib.ctks['genius-lyrics']['@1.0.2']({name});
  if (!song || !song.lyrics)
    return lib.discord.channels['@0.1.2'].messages.create ({
      channel_id: event.channel_id,
      content: `Sorry!, i was unable to find any song with given name.`,
      message_reference: {
        message_id: event.id,
      },
    });

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