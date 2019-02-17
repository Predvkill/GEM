const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"
const yourID = "480540559233122324"
const setupCMD = "!createrolemessage"

console.log(`Logged in as ${client.user.tag}!`);
client.on('ready', function(){
  client.user.setStatus("dnd");
    var ms = 10000 ;
    var setActivity = ['★ TG | Matrix ★','★ TDN™ | Server ★ ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setActivity.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setActivity[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);
});

  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Gem Information :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Gem Is Online Now !')
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
  var prefix ="/";
if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply('** :x: This Command Only For Servers :x:**');
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("👥 Members ",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("** 🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});


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
var version = '1.9';
client.on('message', message => {
    if (message.content.startsWith(prefix + "stats")) {
    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**');
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``GEM STATS`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField('``Node``' , `[${process.version} ]` , true)
                  .addField('``My Prefix``' , `+` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | TheRareRanger')
    })
}
});


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
   if(!message.channel.guild) return message.reply('** :x: This Command Only For Servers :x:**');
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**');
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

 +stats :arrow_right:  STATS BOT
 
  :zap:  [❖═════ Gem - Bot ═══════❖]  :zap: 

 :hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts: 

:zap: ─════ {✯ ● Bot Made By ŦĐŇ™漫Ranger√ ⚡#4474 ● ✯} ════─ :zap

● The DamNation™ - Official :copyright: **`);

 **`);

message.author.sendEmbed(embed)
  }
});
client.login(process.env.BOT_TOKEN);
