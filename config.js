
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNzdFhsTFRmd21jdFUyM1hEdEpwMk9keWZyT2ZjS3dHSldNZmZqZ2tsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1dhYVpsV3cxbXlLdElydG5KR2RmbzFFRHRKTG11WVo3ejFDb0M1cWJITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS3BPWnlCSnJhc3RaSUM3ZzR6Z25MN1V0dXZRVHZnN0JKcVpxS0N2R0ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0bmFNbFVqeitSWUdLZm9MUjlLQVVyc2ZmVGpzQURQYUNRZ2x0by8xMEhNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDZWR3OEEraXBBZ2JHYkdVcjBndWwwLytnWklsSWYvR3FHKytRYUt3MzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNmcDlPbCtBNkFHclZTTnN0VnJUK25ES2srcVF0RFJsRk9kWGVaWngvRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9MVVU1REo3VGVGYUpyU1pkbGw1b05vL3o0TFA1dDA3Q2ZSMHQzSkxVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnNNSzRoaEQ0N1NXK2xRU2dJTzByTlBJY0tLaUlKZjFmdm00cWhFc0kwcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc1dVkzcmtFRmRsN2p4RUZjZHVCcTg3RFlYYk4ramRnTkVxS2szdjBxNnVuWnBzcGdKRGZsQ3h6TjZXSUJHVTVBSUt1ZVNqeWVEYVhXOUd0eEhrcGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IjdNSENqd1N3elRieXZ2ZDBQK1RPK3JXUS9YMTFLY0JCYy9lL0RKQ3diRk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE2MjMwMTQ5NjQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ3RjhGM0ZEMzJEMjNGNjc4RkY4Q0EyMDFCODFGMDZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIyNzcwOTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNjIzMDE0OTY0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQUY0RjEyREJFQTVDMDUxOTI3M0VFQTlBMzIzNjlFRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMjc3MDkwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDOGRSVWlBb1FpR2VXQlk4R29Ca1NBIiwicGhvbmVJZCI6ImRkYmZhMjY0LWY3MzYtNDQ3OC1iNTViLTkyMDgwMjhkOWI2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOUJDVXVYQ1QrWmJuUGFSdjdET0RvMkpadkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTE03enhXUVJvY09SaTZuR3N4dWRuTWZON2RnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlIzWEc1UTZFIiwibWUiOnsiaWQiOiI5MTYyMzAxNDk2NDA6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTiBPIFQgSCBJIE4gRyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXY3cDlBSEVORzVuN1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUjJiMjJxSkUwbFBHMFYzaXhPSEVEZktZRG9NQ0syb0JSNkpMU1hXMGozST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOWZsSGtKcGM1b1NHalN3L1htcDRJN3VwVHNHS29LalNPUGVBdFd5TmNHa28rTEtpUUVKeFFoeXBTMUJwajMyRytQTzVpZElxdXpXaXQvVXJnWitrQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IjZodStJTEd5MWIxWkNXUHdWQzJRYk0xU0oyK24yalhWem1nZlo1UTdEL0NUSElGYVAvZ2N1Z3ltUU5GU3pzUENTM0FMb3NNUDdaMVZvYlRydnhhNWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE2MjMwMTQ5NjQwOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVkbTl0cWlSTkpUeHRGZDRzVGh4QTN5bUE2REFpdHFBVWVpUzBsMXRJOXkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIyNzcwODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSHZNIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
