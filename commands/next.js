const moment = require('moment');

module.exports = {
  description: 'Ping!',
  async execute(message, args, keyv) {
    if (args.length !== 2) {
      return message.channel.set('You need to provide a version and a date to `next` e.g. `!next 3.20 2020-07-13`');
    }

    if (moment(args[1]).day() !== 1) {
      return message.channel.set(`You tried to set the date as ${args[1]} which is a ${moment(args[1]).format('dddd')}. The release bot expects you to pick the **Monday** of the release week.`);
    }

    await keyv.set('version', args[0]);
    await keyv.set('date', args[1]);

    message.channel.send(`Version set to: ${args[0]} and Date set to ${args[1]}`);
  },
};
