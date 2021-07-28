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

/*
So heres more details. Baiscly client is the bot it self, and on is like when you are on a hill, and see something happen
somewhere down there, so if something happens, it checks if there is an event for that. If there is none, it will simply
return completly nothing. If there is, it will attempt to run code in it, and if there are intervals, it will run them.

so here it is:

client.on('event name', (get some stuff from previus code, because if you dont, it will have nothing you made your self like client, message, ect.) => {
//some code for this event                                                                                                                        ^^^^^^
//                                                                                                                                             This basicly
                                                                                                                                               runs the code
                                                                                                                                               that is in the
                                                                                                                                               {}.
}
*/

client.login(token)
