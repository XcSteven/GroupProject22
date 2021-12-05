const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let badWordsList = [
  /** in this parts you can add all the banned words you want, to add more just add: ' word ',**/
  'ass', 'a$$', 'asshole', 'a$$hole', 'anus', 'anas', 'arse', 'arsehole',
  'bitch', 'b1tch', 'b*tch', 'bastard', 
  'bullshit', 'bullshiet', 'bullsh1t', 'bullocks',
  'blowjob', 'handjob',
  'cunt', 'c*nt', 'cum', 'cock', 'c0ck', 'c*ck', 'crap',
  'damn',
  'd*ck', 'dik', 'd1ck', 'dick', 'dickhead', 'd1ckhead', 'd*ckhead',
  'fag', 'faggot',
  'jerk',
  'fu', 'fuck', 'f*ck', 'fuk', 'fucker', 'fuker', 'Fucker', 'fuking', 'fucking', 'f*cking', 'f*king',
  'mf', 'motherfucker', 
  'nigger', 'niggar', 'niggas', 'nigga', 'n*gga', 'nigg', 'nig',
  'piss', 'p1ss', 'pussy', 'p*ssy', 'porn', 'p0rn', 'p*rn',
  'tit', 'tits',
  'sex', 's*x',
  'shit', 'sh1t', '$hit', '$h1t', 'sh*t', 'shiet', 'sh1et', 'sh*et',
  'mf', 'motherfucker', 'masterbate',
  'whore', 'wh0re',
  'wtf', 'wank',
];

let regexString =
  '\\b' +
  badWordsList
    .map((badWord) => {
      return badWord
        .split('')
        .map((char) => char.charCodeAt(0))
        .join('');
    })
    .join('\\b|\\b') +
  '\\b';

let escapedContent = context.params.event.content
  .toLowerCase()
  .split(' ')
  .map((word) => {
    return word
      .split('')
      .map((char) => char.charCodeAt(0))
      .join('');
  })
  .join(' ');

if (escapedContent.match(new RegExp(regexString, 'i'))) {
  await lib.discord.channels['@0.1.1'].messages.destroy({
    message_id: `${context.params.event.id}`,
    channel_id: `${context.params.event.channel_id}`,
  });
  await lib.discord.users['@0.1.4'].dms.create({
    recipient_id: `${context.params.event.author.id}`,
    content: ` `,
    embed: {
      title: `You've recieved a strike ` /** you can change the embed title here **/,
      description: `Hi!, <@${context.params.event.author.id}> You used a toxic word thats why I deleted your message. Recieve more strike and you might get banned.` /** you can change the embed description here **/,
      color: 0xed0303 /** you can change the embed color here **/,
    },
  })};