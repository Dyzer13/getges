const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"
var adminprefix = '#'
client.on('ready', () => {
    client.channels.get("556188148271677462").join(); 
    });

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





client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@515474180603641866> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  });



 client.on('message', message => {
    if(message.content.startsWith('هلا'))  {  
        message.channel.send(" ارحب تبي مساعده اكتب شي من هي الاشياء حتى نعرف كيف نساعدك '**طرق الدفع**' '**كيف التصميم**' '**كيف اشتري نيترو**' اذا ساعدك هذا البوت اترك ريكشن");
        }
      });

  client.on('message', message => {
    if(message.content.startsWith('كيف اشتري نيترو'))  {  
        message.channel.send("يمكنك طلبه من طرف الاخ يوسف او الاخت صوفي ودفع بواسطة سوا اوبيبال والذي يدفع بواسطة السوا يجب عليه الانتظار 48 ساعه لحد اقصى و الذي يشتري بواسطة بيبال سوف يتم شحن نيترو له في الدقيقه نفسها الي طلب فيها");
        }
      });

  client.on('message', message => {
    if(message.content.startsWith('كيف التصميم'))  {  
        message.channel.send(":heart: يتم تصميم حسب طلب شخص ورح يكون راقي جدا ولكن طرق دفع رح تكون بيبال او سوا سعر تصميم سيرفر بالكامل 60 ريال  , التصميم المميز 120 ريال ");
        }
      });

  client.on('message', message => {
    if(message.content.startsWith('طرق الدفع'))  {  
        message.channel.send(" طرق دفع هيا بيبال + سوا ورح نضيف انشالله طرق دفع ثانيه  ");
        }
      });


  client.on('message', message => {
    if(message.content.startsWith('هلا السلام عليكم'))  {  
        message.channel.send(" وعليكم السلام , تبي مساعده اكتب شي من هي الاشياء حتى نعرف كيف نساعدك '**طرق دفع**' '**كيف التصميم**' '**كيف اشتري نيترو**' اذا ساعدك هذا البوت اترك ريكشن");
        }
      });


client.login(process.env.TOKEN);
