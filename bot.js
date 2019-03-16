const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'

client.on("message", message => {
  if (message.channel.type === "dm") { 
      message.channel.startTyping(); 
      setTimeout(() => { 
        message.channel.stopTyping(); 
      }, Math.random() * (1 - 3) + 1 * 1000);
  } 
})

const status1 = ['dnd','online','idle'] 
client.on("ready", async  => { 
     setInterval(function(){ 
         client.user.setStatus(`${status1[Math.floor(Math.random() * status1.length)]}`) 
         }, 5000); 
		 });
      

     client.on('message', message => {
      if (message.content.includes('discord.gg')){
                          if(!message.channel.guild) return message.reply ('')
                      if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
         message.channel.send('mute <@' + message.author.id + '>')
         message.delete() 
         } 
      } 
            if (message.content.startsWith("mute")) {
               if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
               var member= message.mentions.members.first();
               member.ban().then((member) => {
                   message.channel.sendMessage("", {embed: {
                   author: {  
                   },  
                   title: 'بسبب النشر ' + member.displayName + ' تم حظر', 
                   color: 490101,
                   }
                 });
             }  
           ) 
         }  
     });



  client.on('message', msg => { 

    const at_reply = ('<@' + msg.author.id + '>  '); 
    if (msg.author.bot) return; 
  
    if (msg.content === prefix + 'ping') { 
        msg.channel.send(at_reply + 'pong  ' + `${ Math.round(client.ping) }` + 'ms');
        console.log('pong  ' + `${ Math.round(client.ping) }` + 'ms');
    };
   
    if (msg.content === prefix + 'avatar') { 
        msg.channel.send(at_reply + msg.author.avatarURL); 
    };
  
    if (msg.content === prefix + 'id') { 
        msg.channel.send(at_reply + msg.author.id);
    };
  
    if (msg.content === prefix + 'ch_id') { 
        msg.channel.send(at_reply + msg.channel.name + '  ' + '<' + msg.channel.id + '>'); 
    };  
   
  }); 

client.login(process.env.TOKEN);
