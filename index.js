const express = require("express");
const dotenv = require("dotenv")
const { Client, GatewayIntentBits } = require("discord.js")

dotenv.config()
const app = express()

app.get("/", (req,res) => {
  console.log("Hello World!")
})

app.listen(3000, () => {
  console.log("Project is running")
})

const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
],
  partials: ["CHANNEL"],
})

client.on("ready", () => {
  client.user.setActivity("Hi I'm Kuro Bot", { type: 1 })
})

client.on("messageCreate", (message) => {
  if(message.content === "F"){
    message.reply("Hi")
  }
})

client.login(process.env.TOKEN)