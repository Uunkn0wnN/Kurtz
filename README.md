[![Banner](https://cdn.upload.systems/uploads/AZRDGxJa.png)]()
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

###🔥 Use this if you use replit
```bash
• Put it in index.js line 1 :
const express = require('express')
const app = express();
const port = 4000

app.get('/', (req, res) => res.send('hehe boi!!'))

app.listen(port, () =>
console.log(`Your bot is listening a http://localhost:${port}`)
); 
````
### 🔥 example 
```bash
### •before
const { Client, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const prefixSchema = require('./src/Models/Prefix');
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;

### •after
const express = require('express')
const app = express();
const port = 4000

app.get('/', (req, res) => res.send('hehe boi!!'))

app.listen(port, () =>
console.log(`Your bot is listening a http://localhost:${port}`)
); 
const { Client, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const fs = require('fs');
const prefixSchema = require('./src/Models/Prefix');
require('dotenv').config();

const client = new Client({
    intents: 32767,
});
module.exports = client;
```

### 🏃 Run production server

```bash
$ pnpm start
#
# [INFO] Connected to the database!
# [INFO] Exxyll is Up and Ready to Go!
```

## 📄 License

[Exxyll](#) is Licensed under [MIT License](./LICENSE).
