// make sure to read the last part before this one!

const Discord = require('discord.js')

const client = new Discord.Client;

const config = require('./config.json')
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/* Find the file among your files! */

// Now, you can simply do stuff like this! :
const token = config.token;
//^^^^^^^^^^^^^^^^^^^^^^^^^
/* you can do config.( something
that you have setted up in config.json)
to have it!*/

client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
}) 


client.login(token)
//^^^^^^^^^^^^^^^^^
/* You just got the
token from config.json!
*/
