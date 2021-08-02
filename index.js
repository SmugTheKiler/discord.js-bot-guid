// make sure to read the last part before this one!

// Lets make the very first command!
const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')

const token = config.token;

const log = console.log;

/* 
Before we add some commands, lets instead make sure
our bot has a prefix. We do not want the bot to simply
respond when a use sends "help" 
It would confuse the user since he probably asked someone
else for help, and not a bot. This way users can choose
if they are talking to a bot, and the bot can deside if 
someone is trying to do something with it.
*/

const prefix = config.prefix;
/*^^^^^^^^^^^^^^^^^^^^^^^^^^
you will now have to add this:
{
  "prefix" : "Your awesome prefix"
}
*/
client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
}) 

client.on('message', (message, log) => {
    
log(`just recived a message! The message had this in it: \n ${message}`)

  
  
  
  	if (!message.content.startsWith(prefix) || message.author.bot) return;
  /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  check the message starts with your prefix, which we define in your
  config.json file just like the token. Then, if it does, or it doesnt
  but the message it self is sent by a bot, it will just simply return 
  complitly.... nothing. */
  
	const args = message.content.slice(prefix.length).trim().split(/ +/);
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  devide the words after the prefix.*/
	const command = args.shift().toLowerCase(); // Make a short cut to not write this every time. This basicly checks for a new command.
  
	if (command === 'ping') {
  /*^^^^^^^^^^^^^^^^^^^^^^^
  the if statment that checks
  what the command it self is.
  If the command is this, then
  it would run the code under this.*/
		message.channel.send('Pong.');
    //replies with "Pong." in the channel
    
	} else if (command === 'beep') {
 //*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 //  a brang new command with the new name.
		message.channel.send('Boop.');
	}
  // this can just go on and on, all you have to is a simply change the name, and the code.
  /* } (<= assuming you already had a command and your adding this to it) else if (command === 'Command name here') { //if the command is ran with this name, the following code will be ranned:
  
  // code here :)
  
  }
});
*/
client.login(token)

  
  //The command handler above is from discordjs.guide. We recommend you taking a look into it. 
