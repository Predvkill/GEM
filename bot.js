const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"
const yourID = "480540559233122324"
const setupCMD = "!createrolemessage"

// ==================================================================

client.on('ready', function(){//npm i ms 
  client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ TDN™ | MATRIX ★`,`★ CHANNELS : [${client.channels.size}] ★`,`★ THE TDN™ ★`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

////////////////// [ 🔰 CONSOL GEM LOGS 🔰 ] //////////////////

client.on('warn', console.warn);

client.on('error', console.error);

client.on('disconnect', () => console.log('🔰 I Just Disconnected, Making SureYyou Know, I Will Reconnect Now... 🔰'));

client.on('reconnecting', () => console.log('🔰 I Am Reconnecting Now ! 🔰'));

client.on('ready', function() {

    console.log(`🔰 [ ${client.user.username} ] : IS READY TO FIGHT NOW 🔰`);

});

// ==================================================================

client.on("ready", async  => {
client.setInterval(async function(){
client.channels.get("546680636123906059").setName(`「THE DAMNATION™`);
client.channels.get("546680636123906059").setName(`「W`);
client.channels.get("546680636123906059").setName(`「WE`);
client.channels.get("546680636123906059").setName(`「WEL`);
client.channels.get("546680636123906059").setName(`「WELC`);
client.channels.get("546680636123906059").setName(`「WELCO`);
client.channels.get("546680636123906059").setName(`「WELCOM`);
client.channels.get("546680636123906059").setName(`「WELCOME`);
client.channels.get("546680636123906059").setName(`「WELCOME T`);
client.channels.get("546680636123906059").setName(`「WELCOME TO`);
client.channels.get("546680636123906059").setName(`「T`);
client.channels.get("546680636123906059").setName(`「TH`);
client.channels.get("546680636123906059").setName(`「THE`);
client.channels.get("546680636123906059").setName(`「THE D`);
client.channels.get("546680636123906059").setName(`「THE DA`);
client.channels.get("546680636123906059").setName(`「THE DAM`);
client.channels.get("546680636123906059").setName(`「THE DAMN`);
client.channels.get("546680636123906059").setName(`「THE DAMNA`);
client.channels.get("546680636123906059").setName(`「THE DAMNAT`);
client.channels.get("546680636123906059").setName(`「THE DAMNATI`);
client.channels.get("546680636123906059").setName(`「THE DAMNATIO`);
client.channels.get("546680636123906059").setName(`「THE DAMNATION`);
client.channels.get("546680636123906059").setName(`「THE DAMNATION™」`);

  }, 20000);
});

// ================================================================

 client.on('message', message => {
    if(message.content === prefix + "shutdown") {
	    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));    
            client.channels.get("529660118934224896").send({
	    embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('dc322f')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [GEM] IS SHUTDOWN NOW BY THE OWNERS !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		    });
            console.log(`${message.author.tag} [ ${message.author.id} ] GEM Has ShutDown Successfully.`);
            setTimeout(() => {
            client.destroy();
            },3000);
}
});    

// ==================================================================

client.on('message', message => {
    if(message.content === prefix + "restart") {
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("529660118934224896").send({
	     embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('YELLOW')
	    .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [GEM] IS REBOOTING NOW !** ')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		 });
	    console.log(`${message.author.tag} [ ${message.author.id} ] Gem Has Restarted Successfully.`);
            console.log(`Gem Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.1';
client.on('message', message => {
    if(message.content.startsWith(prefix + "GEM IS BACK ONLINE NOW")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 [GEM] IS BACK ONLINE NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v1.1 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
	    .addField('``Bot Name :``' , `★ GEM - 2077 ★` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]`, true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ FOR ADMINS ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
	          .setDescription(`**:robot: ● Attention [THE TDN™] Users 
[GEM] Has Returned From The Darkness Aka Back Online
It Must Be Your Lucky Day ! ● ** `)

    })
}
});

// ==================================================================

client.on('ready', function(){
client.channels.get("529660118934224896").send("+GEM IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ==================================================================


client.on("message", async message => {
	
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
    const command = args.shift().toLowerCase();
	
    if(message.author.id != "480540559233122324") return;
	
    if(message.author.bot) return;
	
    if (command == "leaveserver") {
	    
        if(!args[0] || args[1]) return message.reply(`| Type : **${prefix}leaveserver & <guild_id>** | :x:`);
	    	  
        let GuildId = client.guilds.get(args[0])
	
        if(!GuildId) return message.reply(`**:x: | Guild "ID" Is Not Detected | :x:**`);
	    
        GuildId.leave().then(m => message.channel.send("Done | I Have Left : **["+GuildId.name+"]** Server | ✅"))
    }     
})

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.1';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[GEM] STATS** ')
	    .addField('``Bot Version :``' , `[ v1.1 ]` , true)
	    .addField('``Bot Name :``' , `★ GEM - 2077 ★` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ + ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
});

// ==================================================================

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setcount")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **YOU DONT HAVE MANAGE CHANNELS ROLE** :x:');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **THIS BOT DOSENT HAVE MANAGE CHANNELS ROLE :x:**');
  message.channel.send(' ``✅ | DONE ! : (CHANNEL VOICE WAS CREATED WITH MEMBERS COUNT)`` ');
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

// ==================================================================

client.on('message',async message => {
  if(message.content.startsWith(prefix + "settime")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.reply(':x: **YOU DONT HAVE MANAGE CHANNELS ROLE** :x:');
  if(!message.guild.member(client.user).hasPermission(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **THIS BOT DOSENT HAVE MANAGE CHANNELS ROLE** :x:');
  message.channel.send(' ``✅ | DONE ! : (CHANNEL VOICE WAS CREATED WITH TIME COUNT)`` ');
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

      c.setName("Time :「" + hours + ":" + minutes + "」");
    },1000);
  });
  }
});

// ==================================================================

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setdate")) {
      var currentTime = new Date(),
      years = currentTime.getFullYear(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      week = currentTime.getDay();
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **YOU DONT HAVE MANAGE CHANNELS ROLE** :x:');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **THIS BOT DOSENT HAVE MANAGE CHANNELS ROLE** :x:');
  message.channel.send(' ``✅ | DONE ! : (CHANNEL VOICE WAS CREATED WITH DATE COUNT)`` ');
  message.guild.createChannel("📅 - Date " + "「" + day + "-" + month + "-" + years + "」" , 'voice').then(c => {
    console.log(`Date channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName("Date : " + "「" + day + "-" + month + "-" + years + "」")
    },1000);
  });
  }
});

// ==================================================================

client.on('message',async message => {
  var moment = require('moment');
    if(message.content.startsWith(prefix + "setdays")) {
    if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **YOU DONT HAVE MANAGE CHANNELS ROLE** :x:');
    if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **THIS BOT DOSENT HAVE MANAGE CHANNELS ROLE** :x:');
    message.channel.send(' ``✅ | DONE ! : (CHANNEL VOICE WAS CREATED WITH DAYS COUNT)`` ');
    message.guild.createChannel(`Day : ${moment().format('dddd')}` , 'voice').then(c => {
      console.log(`Day channel setup for guild: \n ${message.guild.name}`);
      c.overwritePermissions(message.guild.id, {
        CONNECT: false,
        SPEAK: false
      });
      setInterval(function() {
        c.setName(`Day : 「${moment().format('dddd')}」`);
      },1000);
    });
    }
  });

// ==================================================================

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    .addField('**Bot Version** :robot: :' , `**[ v1.1 ]**`)
    .addField('**Bot CMD** 🔮 :' , `**Use +help For Bot Commands**`)
    .addField('**Bot Owner** 👑 :' , `**[<@480540559233122324>]**`)
    .addField('**Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    .setFooter('🔰 [ THE TDN™ - OFFICIAL ] 🔰')
    .setTimestamp()
        guild.owner.send(embed)
  });

// ==================================================================

client.on('message', message => {
  if (message.content === ('+Gem')) {
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

// ==================================================================

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**💎 ${member} : Please Wait "5 Minutes" To Receive Your Role : [Verified Member] And See [Other Channels] - 🔰 • ${member.guild.name} Server • 🔰 💎**`)
}).catch(console.error)
})

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
   if(!message.channel.guild) return message.reply('** :x: This Command Only For Servers :x:**');

   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**');
   const embed = new Discord.RichEmbed() 
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setFooter('● 🔰 [ THE TDN™ - OFFICIAL - 2019© ] 🔰 ●')
  .addField('**Bot Owner** 👑 :' , `**[<@480540559233122324>]**`)
  .addField('**Bot Version** :robot: :' , `**[ v1.1 ]**`)
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()
  .setDescription(`**
 :zap:  [❖═════ 𝙂𝙚𝙣𝙚𝙧𝙖𝙡 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 ═══════❖]  :zap: 

 +setcount :arrow_right:  MEMBERS COUNT  :zap:

 +setdays :arrow_right:  DAYS COUNT   :zap:

 +setdate :arrow_right:  DATE COUNT   :zap:

 +settime :arrow_right:  TIME COUNT   :zap:

 :zap:  [❖═════ 𝙊𝙩𝙝𝙚𝙧 ═══════❖]  :zap: 

 +Gem :arrow_right: BOT STATS - (THIS COMMANDS FOR OWNER)
 
  :zap:  [❖═════ GEM - BOT ═══════❖]  :zap: 

 :hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts: **`);
     
message.author.sendEmbed(embed)

  }
});

// ==================================================================

client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [GEM] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
