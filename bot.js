const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"
const yourID = "480540559233122324"
const setupCMD = "!createrolemessage"

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
client.user.setGame(`★ TheDamNation™ ★`,"http://twitch.tv/TheRealPredvkill")

  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message',async message => {
  if(message.content.startsWith(prefix + "setcount")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('**YOU DONT HAVE MANAGE_CHANNELS ROLE**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**THIS BOT DOSENT HAVE MANAGE_CHANNELS ROLE**');
  message.channel.send('✅| **DONE !! : (CHANNEL VOICE WAS CREATED WITH MEMBERS COUNT)**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});


client.on('message',async message => {
  if(message.content.startsWith(prefix + "settime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply('**YOU DONT HAVE MANAGE_CHANNELS ROLE**');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**THIS BOT DOSENT HAVE MANAGE_CHANNELS ROLE**');
  message.channel.send('✅| **DONE !! : (CHANNEL VOICE WAS CREATED WITH TIME COUNT)**');
  message.guild.createChannel("🕐 - Time  00", 'voice').then((c) => {
    console.log(`Time channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
        setInterval(function() {

      var currentTime = new Date(),
      hours = currentTime.getHours() + 1 ,
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth(),
      day = currentTime.getDate(),
      week = currentTime.getDay();

      if (minutes < 10) {
          minutes = "0" + minutes;
      }
      
      if (hours >= 24) {
          
          hours = hours - 24;
      }
      if (hours == 0) {
          hours = 24;
      }

      c.setName(" Time :「" + hours + ":" + minutes + "」");
    },1000);
  });
  }
});



client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('**YOU DONT HAVE MANAGE_CHANNELS ROLE**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**THIS BOT DOSENT HAVE MANAGE_CHANNELS ROLE**');
  message.channel.send('✅| **DONE !! : (CHANNEL VOICE WAS CREATED WITH DATE COUNT)**');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("📅 - Date " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});

client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setdays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('**YOU DONT HAVE MANAGE_CHANNELS ROLE**');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**THIS BOT DOSENT HAVE MANAGE_CHANNELS ROLE**');
    message.channel.send('✅| **DONE !! : (CHANNEL VOICE WAS CREATED WITH DAYS COUNT)**');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`📅 - Day : 「${moment().format('dddd')}」`);
      },1000);
    });
    }
  });





client.on('message', message => {
  if (message.content === ('+aika')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
          .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers**📚 :', [client.guilds.size], true)
          .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner**👑 :' , `[<@480540559233122324>]` , true)
          .setFooter(message.author.username, message.author.avatarURL)
  })
}
});





client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    
   message.channel.send('**:white_check_mark: DONE ! : (PLEASE CHECK MESSAGE PRIVATE)**');
   const embed = new Discord.RichEmbed() 
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
 :zap:  [❖═════ 𝙂𝙚𝙣𝙚𝙧𝙖𝙡 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 ═══════❖]  :zap: 

 +setcount :arrow_right:  MEMBERS COUNT  :zap:

 +setdays :arrow_right:  DAYS COUNT   :zap:

 +setdate :arrow_right:  DATE COUNT   :zap:

 +settime :arrow_right:  TIME COUNT   :zap:

 :zap:  [❖═════ 𝙊𝙩𝙝𝙚𝙧 ═══════❖]  :zap: 

 +aika :arrow_right:  STATS BOT
 
  :zap:  [❖═════ AikaBot ═══════❖]  :zap: 

 :fire: Aika Bot Made By : Predvkill :fire:

 **`);

message.author.sendEmbed(embed)
  }
});
client.login(process.env.BOT_TOKEN);
