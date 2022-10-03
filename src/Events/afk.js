client.on("interactionCreate", interaction => {
  if(interaction.command && interaction.customId === "afk"){
  		const reason = interaction.options.getString('reason')
const redis = require('quickredis-db')
const db = redis.createClient(process.env.redis)

db.set(`${interaction.user.id}_afk`, "true")
if(reason) { db.set(`${interaction.user.id}_afkreason`, `${reason}`) }
interaction.reply({
	content: 'Okay!'
})
  }
})
client.on("messageCreate", async msg => {
	const isafk = await db.get(`${msg.author.id}_afk`)
  if(isafk === "true") {
		msg.reply("Welcome back from AFKness!")
		db.delete(`${msg.author.id}_afk`)
		db.delete(`${msg.author.id}_afkreason`)
	} else {
		const user = msg.mentions.users.first()
		if(!user) return;
		const afk = await db.get(`${user.id}_afk`)
		if(afk === "true") {
			const afkreason = await db.get(`${user.id}_afkreason`)
			if(!afkreason) return msg.reply(`${user.tag} is AFK!`)
			if(afkreason) return msg.reply(`${user.tag} is afk\n\`${afkreason}\``)
		}
	}
})
