Esprima
Demo
Project
Documentation
Syntax Validator checks for mistakes and errors
																			console.log(result);‌
																			})‌
														‌
																		}‌
														‌
																							});‌
																							client.on('message', message  => {‌
																								if(message.author.bot || message.channel.type == "dm") return;‌
																							‌
																									if (message.content === '-lotolist') { ‌
																										‌
																									‌
																										message.channel.send("http://www.darkpandore.com/loto.php")‌
																									‌
																					‌
																									‌
																					‌
																														}});‌
							‌
‌
/*	client.on("message", (message) => {‌
	if (message.content.startsWith(prefix + 'tloto')) {‌
		message.delete()‌
		if(!message.member.hasPermission("MANAGE_MESSAGES")) {‌
Invalid code. Total issues: 2
Unlike a typical code linter, this syntax validator does not care about coding styles and formatting.

If there is a syntax error, the sign will be shown in the left-side gutter. Placing the mouse cursor over that sign will reveal the complete error description.

For a command-line usage, check esvalidate from Esprima package (for Node.js). There is also a plugin for Grunt called grunt-jsvalidate. Ant users can take a look at an exemplary Ant task for syntax validation.

Esprima is created and maintained by Ariya Hidayat.

GitHub
