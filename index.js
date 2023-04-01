// Discord.js 라이브러리를 불러옵니다.
const Discord = require('discord.js');

// 새로운 디스코드 클라이언트를 생성합니다.
const client = new Discord.Client();

// 봇이 로그인되었을 때 실행됩니다.
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// 메시지가 도착했을 때 실행됩니다.
client.on('message', message => {
  // 메시지를 보낸 사람이 봇일 경우, 무시합니다.
  if (message.author.bot) return;

  if (message.content === '!주사위') {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    message.reply(`주사위를 굴려 ${randomNumber}이 나왔습니다!`);
  if (message.content.startsWith('!역할')) {
    const roleId = message.content.split(' ')[1];
    const member = message.mentions.members.first();
    const role = message.guild.roles.cache.get(roleId);
    member.roles.add(role);
    message.reply(`${member.user.tag}님에게 ${role.name} 역할을 부여했습니다!`);
  }
});

});

// 봇을 로그인합니다.
client.login('디스코드 봇 토큰');
