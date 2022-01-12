// make sure to read the last part before this one!

// Make your server a safer and sfw server with this! detect bad words, and delete em!
const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')

const token = config.token;

const log = console.log;

const prefix = config.prefix;
const badWords = config.blackListedWords;

client.on("ready", () => {
log(`Hey! I am ready to go! \n ${client.username}'s online.`)
}) 

client.on('message', (message, log) => {
    
// log(`just recived a message! The message had this in it: \n ${message}`)  
  
  	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);

	const command = args.shift().toLowerCase();
  
	
	if(message.includes(badWord)) { 
	message.delete()
		message.channel.send('Hey you! Dont say that word!')
	}
	
	
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
	} else if(command === 'say') { // create the command
  let msg = args[] // just change the args into the message to make it easier to understand

  const embed = new Discord.MessageEmbed() // create the embed so no one would be pinged if there was a mention inside of it.
  .setTitle(msg) // Title is the message
  .setDescription(`A totaly secret words`) //description.... I would make this the message but nah
  .setFooter('||' + message.author.id.toString() + '||') // the id.... (in a secret thing)

  message.channel.send(embed); // send the embed
  };

client.login(token)
