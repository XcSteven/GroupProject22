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

  console.log(date);
  console.log(today_day);
  console.log(today_month);

  result.googlesheets.selectQueryResult = await lib.googlesheets.query[
    '@0.3.0'
  ].select({
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
  console.log(result.googlesheets.selectQueryResult);
  if (result.googlesheets.selectQueryResult.rows.length != 0) {
    let names;
    for (
      let i = 0;
      i < result.googlesheets.selectQueryResult.rows.length;
      i++
    ) {
      if (i == 0) {
        names = result.googlesheets.selectQueryResult.rows[i].fields['Name'];
        console.log(names);
      } else if (
        i > 0 &&
        i < result.googlesheets.selectQueryResult.rows.length - 1
      ) {
        names =
          names +
          ', ' +
          result.googlesheets.selectQueryResult.rows[i].fields['Name'];
        console.log(names);
      } else {
        names =
          names +
          ', and ' +
          result.googlesheets.selectQueryResult.rows[i].fields['Name'];
        console.log(names);
      }
    }

    result.discord.response = await lib.discord.channels[
      '@0.1.2'
    ].messages.create({
      channel_id: `915825484951064619`,
      content: `Today's event: ${names}`,
    });
  }
  return result;
};
