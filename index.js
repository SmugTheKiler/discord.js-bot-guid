// make sure to read the last part before this one!

// Here we are now looking at events!
const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')

const token = config.token;

const log = console.log;
// just a small shortcut

client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
}) 
// the ready part is already an event, so you basicly got the idea of what it does in general.

// on message event (the bot reciving a message)
client.on('message', (message, log) => {
  
  // the bot runs the following code:
  
log(`just recived a message! The message had this in it: \n ${message}`)

// now it ends the event
});

client.login(token)
