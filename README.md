<!-- @format -->

<h1 align="center">Kindbot AI Chatbot Frontend</h1>

<p align="center">
  An open-source AI chatbot app built with Next.js (Page Router), <a href="https://github.com/AvaterClasher/kind-chatbot-backend">[KindBot-Server]</a>.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#about-the-server"><strong>About the Server</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>

## Features

-   [Next.js](https://nextjs.org) Page Router
-   [KindBot-Server](https://github.com/AvaterClasher/kind-chatbot-backend) for the API response
-   Styling with [Tailwind CSS](https://tailwindcss.com)
-   Icons from [Tabler Icons](https://tabler.io/icons)

## About the Server

This app uses my own server made using [Rocket 🚀](https://rocket.rs/) and [Rust 🦀](https://www.rust-lang.org/) you can check it out here [Github](https://github.com/AvaterClasher/kind-chatbot-backend).

The Server cannot be hosted Currently. So please change the line [Number 57](https://github.com/AvaterClasher/kind-chatbot-frontend-2/blob/main/pages/index.tsx#L41) in the `pages/index.tsx` with the appropiate server url endpoint with a `/chat` at the end.

## Running locally

1. Clone the Github Repo: `git clone https://github.com/AvaterClasher/kind-chatbot-frontend-2.git`
2. Install the dependencies: `npm install`
3. Run the APP: `npm run dev`

```bash
npm install
npm run dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Authors

Rustfully made by 🦀

-   Soumyadip Moni ([@avater_clasher](https://github.com/AvaterClasher))
