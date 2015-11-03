var config = require('./config');
var Discord = require('discord.js');
var keys = require('./keys.json');

var bot = new Discord.Client();

bot.on('ready', function () {
	console.log('Started and running in ' + bot.channels.length + ' channels');
});

bot.on('disconnected', function () {
	console.log('Disconnected');
	process.exit(1);
});

bot.on('message', function(msg){

  if (msg.content === 'ping') {
    bot.sendMessage(msg.channel, 'pong');
    console.log('pong\'d ' + msg.sender.username);
  }

  if (msg.isPrivate) {
    for (i = 0; i < keys.length; i++) {
      if (msg.content === keys[i]) {
        bot.sendMessage(msg.channel, 'key match');
        console.log('key match');
        console.log('user id: ' + msg.author.id);
      }
    }
  }

});

bot.login(config.discord.email, config.discord.password);
