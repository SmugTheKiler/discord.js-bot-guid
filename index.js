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
	// make your first embed!
		
	const embed = new Discord.MessageEmbed()
	.setTitle('This is the title!')
	.setDescription('This is the description of your awesome new embed!')
	.setColor('RANDOM') // Any simple color like RED, GREEN, YELLOW, ect, or any HTML hex colors.
	.addField('This is the fild!', 'This is the small part of a field')
	.addField('This is a new field!', 'You can make as much of these as you want!')
	.setFooter('This is the smallest part of the embed!')
	
	message.channel.send(embed)
//      send the embed!
	}

client.login(token)
