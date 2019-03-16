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
         message.channel.send('kick <@' + message.author.id + '>')
         message.delete() 
         } 
      } 
            if (message.content.startsWith("kick")) {
               if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
               var member= message.mentions.members.first();
               member.kick().then((member) => {
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

client.on("message", message => {
    var prefix = "#";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});

client.login(process.env.TOKEN);
