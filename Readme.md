## Azure Firewall

To access the database, you must add the IP address of the computer you are using to run this server onto the Azure firewall.
See tylerjmalloy for information on this. 

## Environment Variables

The following environment variables need to be set:
Set AZURE_OPENAI_ENDPOINT
Set AZURE_OPENAI_KEY
Set AZURE_DB_PASSWORD
Set NODE_TLS_REJECT_UNAUTHORIZED

To test that these have been properly set and are available in the app.mjs file comment out:

console.log(process.env.AZURE_OPENAI_ENDPOINT)
console.log(process.env.AZURE_OPENAI_KEY)
console.log(process.env.AZURE_DB_PASSWORD)
console.log(process.env.NODE_TLS_REJECT_UNAUTHORIZED)

## TO RUN THE SERVER 
npm install
npm run start # on osx and linux 
npm run start-pc # on windows 

this should start the experiment on port 8888 of your localhost 

navigate to 
localhost:8888
or to 
http://127.0.0.1:8888/

## Node JS

This site is written using the [node.js](https://nodejs.org/en/) framework 


## App.js 

This file serves the requests made to the site 

See all the packages that are installed in this file 

## public/html 

Contains the main index.html landing page and all other html files 

## public/src 

Contains the main experiment.js file, look into [JsPsych](https://www.jspsych.org/7.3/) for more info 

## node_modules

All required node modules like [express.js](https://expressjs.com/) [socket.io](https://socket.io/) [OpenAI Api](https://platform.openai.com/docs/libraries). Review these for more info. Most of the work will be done in the experiment.js file using the JsPsych pacakge. 

## Frontiers 2024

Files for the frontiers submission on GAI in cognitive modeling 

## CogSci 2024

Simulation files for the CogSci submission on simulating participant learning with IBL and GPT 