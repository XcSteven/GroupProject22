const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async () => {
  const result = {
    googlesheets: {},
    discord: {},
  };
  
  //Get time from System
  const momentTimezone = require('moment-timezone');
  let date = momentTimezone().tz('Asia/Ho_Chi_Minh');
  let today_day = date.format('D');
  let today_month = date.format('M');
  let res = result.googlesheets.selectQueryResult;
  
  //Read from Google Sheet, if match, send message to Channel.
  res = await lib.googlesheets.query['@0.3.0'].select ({
    range: `A:C`,
    bounds: 'FIRST_EMPTY_ROW',
    where: [
      {
        Month: today_month,
        Day: today_day,
      },
    ],
    limit: {
      count: 0,
      offset: 0,
    },
  });
  if (res.rows.length != 0) {
    let names;
    for (let i = 0; i < res.rows.length; i++) {
      if (i == 0) {
        names = res.rows[i].fields['Name'];
      } else if (i > 0 && i < res.rows.length - 1) {
        names = names + ', ' + res.rows[i].fields['Name'];
      } else {
        names = names + ', and ' + res.rows[i].fields['Name'];
      }
    }

    result.discord.response = await lib.discord.channels ['@0.1.2'].messages.create ({
      channel_id: `917985358057193554`,
      content: `Today's event: ${names}`,
    });
  }
  return result;
};