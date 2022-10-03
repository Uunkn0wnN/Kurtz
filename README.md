[![Banner](https://uunkn0wnn.github.io/Nazarick-Clan-/)]()
[![CI Status](https://img.shields.io/github/workflow/status/gifaldyazkaa/exxyll/%5BPrettier%5D%20Lint?label=ci&logo=github-actions&style=for-the-badge)](./.github/workflows/Format-checking.yml) [![Repo Size](https://img.shields.io/github/repo-size/gifaldyazkaa/exxyll?logo=github&style=for-the-badge)](https://github.com/gifaldyazkaa/exxyll-origin/graphs/contributors)

## ➡️ Installing

### 🛠️ Requirements

A [node.js](https://nodejs.org) >= 16.12.0 setup with [pnpm](https://pnpm.io) is highly recommended.

### 📦 Install dependencies

```bash
$ pnpm install
```

### 🔑 Create environment variable file

```bash
$ pnpm run setup-env
# Fill requested information & you are ready to go
```

### 🔥 Use this if you use replit
```bash
• Put it in index.js line 1 :
----------------------------------
const express = require('express')
const app = express();
const port = 4000

app.get('/', (req, res) => res.send('https://github.com/Uunkn0wnN'))

app.listen(port, () =>
console.log(`Your bot is listening a http://localhost:${port}`)
); 
````
### 🔥 example 
```bash
==============
•before
==============
[1] const { Client, Collection } = require('discord.js');
[2] const { DiscordTogether } = require('discord-together');
[3] const fs = require('fs');
[4] const prefixSchema = require('./src/Models/Prefix');
[5] require('dotenv').config();
[6]
[7] const client = new Client({
[8]     intents: 32767,
[9] });
[10] module.exports = client;

==============
•after
==============
[1] const express = require('express')
[2] const app = express();
[3] const port = 4000
[4]
[5] app.get('/', (req, res) => res.send('https://github.com/Uunkn0wnN'))
[6]
[7] app.listen(port, () =>
[8] console.log(`Your bot is listening a http://localhost:${port}`)
[9] ); 
[10] const { Client, Collection } = require('discord.js');
[11] const { DiscordTogether } = require('discord-together');
[12] const fs = require('fs');
[13] const prefixSchema = require('./src/Models/Prefix');
[14] require('dotenv').config();
[15]
[16] const client = new Client({
[17]     intents: 32767,
[18] });
[19] module.exports = client;
```

### 🏃 Run production server

```bash
$ pnpm start
#
# [INFO] Connected to the database!
# [INFO] Kurtz is Up and Ready to Go!
```

## 📄 License

[Kurtz](#) is Licensed under [MIT License](./LICENSE).
