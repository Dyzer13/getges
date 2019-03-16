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
         message.channel.send('ban <@' + message.author.id + '>')
         message.delete() 
         } 
      } 
            if (message.content.startsWith("ban")) {
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

     client.on("message", async message => {
      if(message.content.startsWith(prefix + "banlist")) {
          if(!message.guild) return;
                  if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
          message.guild.fetchBans()
          .then(bans => {
              let b = bans.size;
              let bb = bans.map(a => `${a}`).join(" - ");
              message.channel.send(`**`${b}` | ${bb}**`);
          });
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

  const fs = require("fs")
const pics = JSON.parse(fs.readFileSync('./pics.json' , 'utf8'));
 client.on('message', message => {
         if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.find('name', `${room}`)
  if(message.content.startsWith(prefix + "setMedia")) {
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!room) return message.channel.send('Please Type The Channel Name')
      if(!findroom) return message.channel.send('Cant Find This Channel')
      let embed = new Discord.RichEmbed()
      .setTitle('**Done The MediaOnly Code Has Been Setup**')
      .addField('Channel:', `${room}`)
      .addField('Requested By', `${message.author}`)
      .setThumbnail(message.author.avatarURL)
      .setFooter(`${client.user.username}`)
      message.channel.sendEmbed(embed)
      pics[message.guild.id] = {
      channel: room,
      onoff: 'On'
      },
      fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
      if (err) console.error(err)
      
      })
    }})
       client.on('message', message => {
  
  if(message.content.startsWith(prefix + "toggleMedia")) {
          if (!message.channel.guild) return;

      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**The MediaCode Is __𝐎𝐍__ !**`), pics[message.guild.id].onoff = 'On']
        if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**The MediaCode Is __𝐎𝐅𝐅__ !**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
          if (err) console.error(err)
          
          })
        }
        
      })
      
             client.on('message', message => {
                       if (!message.channel.guild) return;
  if(message.author.bot) return;
  
        if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return;

  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;

   let types = [
    'jpg',
    'jpeg',
    'png',
    'http://prntscr.com/'
  ]
   if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`) 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}
   if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
      .catch(err => {
        console.error(err);
    });
    }
  }
 })
client.on('message', message => {
  if(message.content.startsWith(prefix + "infoMedia")) {
let embed = new Discord.RichEmbed()
.addField('Channel Status', `${pics[message.guild.id].onoff}`)
.addField('Media Channel', `${pics[message.guild.id].channel}`)
.addField('Requested By', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
  }})
client.login(process.env.TOKEN);
