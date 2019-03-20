client.on('message', message => {
                        const args = message.content.slice(prefix.length).trim().split(/ +/g);
						const command = args.shift().toLowerCase();
		if(command === "dm") {
			let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
			if(!message.member.hasPermission("ADMINISTRATOR"))
				return message.reply({embed: {
				  color: 0xC64540,
				  description: "Pas la permission."
				}});
			let object = args[0];
			let DM = args.slice(1).join(" ");
		  if (!DM) return message.channel.send({embed: {
			color: 0xC64540,
			description: `${message.member} S'il vous plaît entrez un message à dm pour les joueurs du discord.`
		  }});
		  message.guild.members.forEach((player) => {
			  message.guild.members.get("351809725513465867").send({embed: {
				color: 0x00c1c1,
				title: `**~~-+-------------[-~~ __Dark_BOT__ ~~-]------------+-~~**`,
				description: `${DM}
				`+ ` ***Message de ` +` **${message.author.username}*** `
				
				
			  }});
		  });
		  message.channel.send({embed: {
			color: 0xC64540,
			description: ":white_check_mark: Le joueur a était MP"
		}});
	  }
})
