const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});  //Require library for Autocode
const ytdl = require('ytdl-core');                                     //Link to YT API
const ytSearch = require('yt-search');                                 //Youtube search

let VOICE_CHANNEL = '916900606763991130'; //Our Discord voice channel's ID
let message = context.params.event.content;
//PLAY FUNCTION BY NAME OR YOUTUBE URL LINK
if (message.startsWith('!play')) {
  let searchString = message.split(' ').slice(1).join(' ');
  
  try {
    let youtubeLink;              //Failed to play song if user provides link from other music sources
    if (!searchString) {
      return lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `${context.params.event.channel_id}`,
        content: `No search string provided!`,
      });
    }
    if (!searchString.includes('youtube.com')) {
      let results = await ytSearch(searchString);
      if (!results?.all?.length) {
        return lib.discord.channels['@0.2.0'].messages.create({
          channel_id: `${context.params.event.channel_id}`,
          content: `No results found for your search string. Please try a different one.`,
        });
      }
      youtubeLink = results.all[0].url;
    } else {
      youtubeLink = searchString;
    }
    let downloadInfo = await ytdl.getInfo(youtubeLink);
    await lib.discord.voice['@0.0.1'].tracks.play({
      channel_id: `${VOICE_CHANNEL}`,
      guild_id: `${context.params.event.guild_id}`,
      download_info: downloadInfo
    });
    return lib.discord.channels['@0.2.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `Now playing **${downloadInfo.videoDetails.title}**`,
    });
  } catch (e) {                                                       //CANNOT PLAY TRACK FROM STREAMMING
    return lib.discord.channels['@0.2.0'].messages.create({
      channel_id: `${context.params.event.channel_id}`,
      content: `Failed to play track!`,
    });
  }
} else if (message.startsWith('!stop')) {               //STOP FUNCTION
  await lib.discord.voice['@0.0.1'].channels.disconnect({
    guild_id: `${context.params.event.guild_id}`
  });
  await lib.discord.channels['@0.2.0'].messages.create({       //The music bot exits the voice channel
    channel_id: `${context.params.event.channel_id}`,
    content: `Disconnected from <#${VOICE_CHANNEL}>!`,
  });
} else if (message.startsWith('!pause')) {                 //PAUSE 
  await lib.discord.voice['@0.0.1'].tracks.pause({
    guild_id: `${context.params.event.guild_id}`
  });
  return lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Paused.`,
  });
} else if (message.startsWith('!resume')) {                //RESUME
  await lib.discord.voice['@0.0.1'].tracks.resume({
    guild_id: `${context.params.event.guild_id}`
  });
  return lib.discord.channels['@0.2.0'].messages.create({
    channel_id: `${context.params.event.channel_id}`,
    content: `Resumed.`,
  });
}
