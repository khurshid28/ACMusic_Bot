const Telebot = require('telebot');
TOKEN="5122494916:AAFgA5nrEHGU-h0_GIRCyvnhFX9o2m9DGw8"
const bot = new Telebot(TOKEN,{polling:true});
module.exports.bot=bot