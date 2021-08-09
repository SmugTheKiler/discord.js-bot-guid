// make sure to read the last part before this one!

// Make your server a safer and sfw server with this! detect bad words, and delete em!
const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')

const token = config.token;

const log = console.log;

const prefix = config.prefix;
// lets define our badWords.
const badWords = config.blackListedWords;
/*
remember to update your config.json file!
*/
client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
}) 

client.on('message', (message, log) => {
    
log(`just recived a message! The message had this in it: \n ${message}`)  
  
  	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();
  
	// Lets start with actiually coding.
	
	if(message.includes(badWord)) { // check if the message has a bad word. If it does, it will run the following code.
	message.delete()  // delete the message
		message.channel.send('Hey you! Dont say that word!') // tell the user to not say that word again
	}
	
	
	// all stuff form previus parts
	if (command === 'ping') {

		message.channel.send('Pong.');
    
	} else if (command === 'beep') {

		message.channel.send('Boop.');
	} else if (command === 'kick') {
		
	if (!message.mentions.users.size) {

	return message.reply('you need to tag a user in order to kick them!');

	}

	const torget = message.mentions.users.first();

	if(!torget.kickable) {

		message.channel.send('I am unable to kick this user...')

	}

	torget.kick();

	message.channel.send(`I kicked ${torget} succesfully!`)

	} else if(command === 'ban') {
	
	if(!message.mentions.users.size) {

	return message.channel.send('You have to mention someone for me to ban!')
	}
	const user = message.mentions.users.size;

	const guildID = message.guild.id;
		
	guildID.members.ban(user);
		
	message.channel.send(`Succesfully banned ${user}!`)
		
	} else if(command === 'embed') {
		
	const embed = new Discord.MessageEmbed()
	.setTitle('This is the title!')
	.setDescription('This is the description of your awesome new embed!')
	.setColor('RANDOM')
	.addField('This is the fild!', 'This is the small part of a field')
	.addField('This is a new field!', 'You can make as much of these as you want!')
	.setFooter('This is the smallest part of the embed!')
	
	message.channel.send(embed)
	}

client.login(token)
