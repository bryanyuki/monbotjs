const Discord = require('discord.js');
const { promises } = require('fs');
const bot = new Discord.Client(
);






bot.on('message', function (message) {
    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var entier = entierAleatoire(0, 4);
    var proposition = [
        "appo c'est une meuf cool", 
        "appo c'est une pute",
        "appo c'est une grosse chienne", 
        "appo c'est une salope", 
        "appo c'est un ange on l'aime tous batard",
        "appo c'est une sagouin",
    ];
    if (message.content === "appo c'est quoi ?"){
        message.reply(proposition[entier])
    };
})



bot.login('NzQ3OTI1NzU1NTM0NTA4MTAy.X0V-Iw.1BIUbtOuhU4s3YdqLP0eY9KFJ_s')