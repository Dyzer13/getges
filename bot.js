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


if(!message.member.roles.some(r=>[".Liberté"].includes(r.name)) ) return;
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

if(!message.member.roles.some(r=>[".Liberté"].includes(r.name)) ) return;
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
                                                            .setColor("#545453")
                                .setDescription("**:white_check_mark: | Delete " + args[1] + " Message!**")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


client.on("message", message => {
                      if(message.content === 'رابط' ) {
						  message.channel.send('**تم ارسال الرابط في الخاص**').then(msg => {
							  msg.edit('** Liberte Group | جروب الحريه :wave:  **')
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 5,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});

if(!message.member.roles.some(r=>[".Liberté"].includes(r.name)) ) return;
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', '.Liberté');
if (!rank) return message.reply('انت لست من الاداره!')
  message.channel.send(args.join("  "))
    message.delete();
  }


});

client.on('message', message => {
  if(message.author.bot) return;
console.log(`${message.guild} | ${message.author.username} said: "${message.content} - ${message.channel}".`);
 
 
if (message.content.startsWith(prefix + "function")) {
  console.log("Ran functionc command.")
  message.channel.sendMessage("Basic function - Limit the amount of bots in the IC Discord server.  This bot was programmed so it met the IC's needs.  Nothing less, nothing more.")
}
});

client.login(process.env.TOKEN);
