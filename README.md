# 🚀 Astro Cosmic Blog 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b6a63d9-3c87-4391-bbe2-4222f66b5cfa/deploy-status)](https://app.netlify.com/sites/astro-cosmic-blog/deploys)



> This repo contains an example blog application that is built with [Astro](https://astro.build/), [Cosmic](https://www.cosmicjs.com) and [Start Bootstrap](https://startbootstrap.com/theme/clean-blog) clean-blog template.

### [Click here to view Demo](https://astro-cosmic-blog.netlify.app/)

## Prerequisites
- Node (I recommend using latest version)
- Cosmic CMS account


## Getting Started
``` bash
git clone https://github.com/sumitkharche/astro-cosmic-app.git
cd astro-cosmic-app
npm install 
```

## Create Cosmic Bucket
Create a [free account on Cosmic](https://app.cosmicjs.com/signup). If this is your first time using Cosmic, you'll see a short tutorial which will introduce some of the data types we'll be using - buckets, objects, and metafields.

Create a new empty bucket & name it coffee-blog. For each blog post, we will have three object types:
- Title
- Content
- Image

So, go ahead and add these properties in your buckets along with some data for those objects. [If you're having trouble with Buckets, Objects, or Metafields, go ahead and read the Getting Started page really quickly for some startup instructions](https://www.cosmicjs.com/getting-started)

### Keys
In .env file,
- update your Cosmic bucket slug and read key


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
|:----------------|:--------------------------------------------|
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
