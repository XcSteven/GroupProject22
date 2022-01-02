const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async () => {
  const result = {
    googlesheets: {},
    discord: {},
  };

  const momentTimezone = require('moment-timezone');
  let date = momentTimezone().tz('Asia/Ho_Chi_Minh');
  let today_day = date.format('D');
  let today_month = date.format('M');
  let res = result.googlesheets.selectQueryResult;
  
  res = await lib.googlesheets.query['@0.3.0'].update ({
    range: `E:I`,
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
    fields: {
      Strike: '0',
    },
  });
}
