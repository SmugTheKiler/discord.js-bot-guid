// make sure to read the last part before this one!

// Here we will start making commands to moderate our bots!
const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')

const token = config.token;

const log = console.log;

const prefix = config.prefix;

client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
}) 

client.on('message', (message, log) => {
    
log(`just recived a message! The message had this in it: \n ${message}`)

  
  
  
  	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();
  
	if (command === 'ping') {

		message.channel.send('Pong.');
    
	} else if (command === 'beep') {

		message.channel.send('Boop.');
	} else if (command === 'kick') { // lets make a new command!
		
	if (!message.mentions.users.size) {
// 	check if a user has pinged someone
//      he or she wanted to kick from the
//      server.
	return message.reply('you need to tag a user in order to kick them!');
//      if he or she did not, it would send this sending that he or she did not
//      ping anyone.
	}

	const torget = message.mentions.users.first();
//      define the what where going to call "torget", which is what were going to attempt to kick.
	if(!torget.kickable) {
//      check if the torget is kickable 
		message.channel.send('I am unable to kick this user...')
//              if not then just send this to let the user know he or she cant be kicked
	}
//      if the torget passes all this, it would try to kick the user.
	torget.kick();
//      kick the user.
	message.channel.send(`I kicked ${torget} succesfully!`)
//      let the user know he or she was kicked.
	}

client.login(token)
