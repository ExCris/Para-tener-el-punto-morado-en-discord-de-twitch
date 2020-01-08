const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Cristopher mejor conocido como Itz_GOKU_YT")
console.log("De nada")

client.user.setActivity(`Aca lo que quieras que se lea no borrar las comillas solo esta oracion `, {
type: "STREAMING",
url: "https://www.twitch.tv/ninja"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('Aca tu token de tu cuenta de discord');
