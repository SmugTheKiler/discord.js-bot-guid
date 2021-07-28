// this is the main file.
const Discord = require('discord.js')
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
/* require Discord to use it every
where in code, and access its API.
*/
      
 const client = new Discord.Client;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
/* Create your bot it self, and
log in with it on the buttom of the
code! */
  
client.on("ready", () => {
log(`Hey! I am ready to go! \n Me online.`)
})


client.login('Token from discord developer portal')

// and there we go, you now have your bot signed in and running on discord.

// This bot currently has no functions.
