import express from 'express'
const app = express();

import session from 'express-session'
import crypto from 'crypto'
import path from 'path'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');

dotenv.config();

import mysql from 'mysql2'
import fs from 'fs'
console.log(process.env.OPENAI_ENDPOINT)
console.log(process.env.OPENAI_KEY)
process.setMaxListeners(0);

import spawn from 'child_process';
const temperatures = []; // Store readings

import moment from 'moment' 
var Moment = moment().format('yyyy-MM-dd:hh:mm:ss');
console.log(Moment)
const array = ["a","b","c","d","e","f","g","h","i","j","j","l","m","n","o","p","q"]
// Generate a random key of 32 bytes
const randomKey = crypto.randomBytes(32).toString('hex')
const randomKeyString = "FoundationPhishing"
//console.log(randomKeyString) // aedfjiejoicpbojlpleolaapamejafjhbljipmpecbgefhmnocecehclhnplbcjg

import {Server as HTTPServer} from 'http'
const http = HTTPServer(app)
import {Server, Socket} from 'socket.io';
const io = new Server(http)

import {parse} from 'csv-parse';

import { OpenAIClient, AzureKeyCredential } from "@azure/openai"

console.log(randomKeyString)
import ip from "ip";
//console.log( ip.address() );
 
var Condition3Phishing = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99, 103, 107, 111, 115, 119, 123, 127, 131, 135, 139, 143, 147, 151, 155, 159, 163, 167, 171, 175, 179, 183, 187, 191, 195, 199, 203, 207, 211, 215, 219, 223, 227, 231, 235, 239, 243, 247, 251, 255, 259, 263, 267, 271, 275, 279, 283, 287, 291, 295, 299, 303, 307, 311, 315, 319, 323, 327, 331, 335, 339, 343, 347, 351, 355, 359, 363, 367, 371, 375, 379, 383, 387, 391, 395, 399, 403, 407, 411, 415, 419, 423, 427, 431, 435, 439, 443, 447, 454, 458, 462, 466, 470, 474, 478, 482, 486, 490, 494, 498, 502, 506, 510, 514, 518, 522, 526, 530, 534, 538, 542, 546, 550, 554, 558, 562, 566, 570, 574, 578, 582, 586, 590, 594, 598, 602, 606, 610, 614, 618, 622, 626, 630, 634, 636, 639, 643, 647, 651, 655, 659, 663, 667, 671, 675, 679, 683, 687, 691, 695, 699, 703, 707, 711, 715, 719, 723, 727, 731, 735, 739, 743, 747, 751, 755]
var Condition3Ham      = [759, 763, 767, 771, 775, 779, 783, 787, 791, 795, 799, 803, 807, 811, 815, 819, 823, 827, 831, 835, 839, 843, 847, 851, 855, 859, 863, 867, 871, 875, 879, 883, 887, 891, 895, 899, 903, 907, 911, 915, 919, 923, 927, 931, 935, 939, 943, 947, 951, 955, 959, 963, 967, 971, 975, 979, 983, 987, 991, 995, 999, 1003, 1007, 1011, 1015, 1019, 1023, 1027, 1031, 1035, 1039, 1043, 1047, 1051, 1055, 1059, 1063, 1067, 1071, 1075, 1079, 1083, 1087, 1091, 1095, 1099, 1103, 1107, 1111, 1115, 1119, 1123, 1127, 1131, 1135, 1139, 1143, 1147, 1151, 1155, 1159, 1163, 1167, 1171, 1175, 1179, 1183, 1187, 1191, 1195, 1199, 1203, 1207, 1211, 1215, 1219, 1223, 1227, 1231, 1235, 1239, 1243, 1247, 1251, 1255, 1259, 1263, 1267, 1271, 1275, 1279, 1283, 1287, 1291, 1295, 1299, 1303, 1307, 1311, 1315, 1319, 1323, 1327, 1331, 1335, 1339, 1343, 1347, 1351, 1355, 1359, 1363, 1367, 1371, 1375, 1379, 1383, 1387, 1391, 1395, 1399, 1403, 1407, 1411, 1415, 1419, 1423, 1427, 1431, 1435, 1439, 1443, 1447, 1451, 1455, 1459, 1463]

var Condition4Phishing = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 233, 237, 241, 245, 249, 253, 257, 261, 265, 269, 273, 277, 281, 285, 289, 293, 297, 301, 305, 309, 313, 317, 321, 325, 329, 333, 337, 341, 345, 349, 353, 357, 361, 365, 369, 373, 377, 381, 385, 389, 393, 397, 401, 405, 409, 413, 417, 421, 425, 429, 433, 437, 441, 445, 449, 452, 456, 460, 464, 468, 472, 476, 480, 484, 488, 492, 496, 500, 504, 508, 512, 516, 520, 524, 528, 532, 536, 540, 544, 548, 552, 556, 560, 564, 568, 572, 576, 580, 584, 588, 592, 596, 600, 604, 608, 612, 616, 620, 624, 628, 632, 637, 641, 645, 649, 653, 657, 661, 665, 669, 673, 677, 681, 685, 689, 693, 697, 701, 705, 709, 713, 717, 721, 725, 729, 733, 737, 741, 745, 749, 753]
var Condition4Ham      = [757, 761, 765, 769, 773, 777, 781, 785, 789, 793, 797, 801, 805, 809, 813, 817, 821, 825, 829, 833, 837, 841, 845, 849, 853, 857, 861, 865, 869, 873, 877, 881, 885, 889, 893, 897, 901, 905, 909, 913, 917, 921, 925, 929, 933, 937, 941, 945, 949, 953, 957, 961, 965, 969, 973, 977, 981, 985, 989, 993, 997, 1001, 1005, 1009, 1013, 1017, 1021, 1025, 1029, 1033, 1037, 1041, 1045, 1049, 1053, 1057, 1061, 1065, 1069, 1073, 1077, 1081, 1085, 1089, 1093, 1097, 1101, 1105, 1109, 1113, 1117, 1121, 1125, 1129, 1133, 1137, 1141, 1145, 1149, 1153, 1157, 1161, 1165, 1169, 1173, 1177, 1181, 1185, 1189, 1193, 1197, 1201, 1205, 1209, 1213, 1217, 1221, 1225, 1229, 1233, 1237, 1241, 1245, 1249, 1253, 1257, 1261, 1265, 1269, 1273, 1277, 1281, 1285, 1289, 1293, 1297, 1301, 1305, 1309, 1313, 1317, 1321, 1325, 1329, 1333, 1337, 1341, 1345, 1349, 1353, 1357, 1361, 1365, 1369, 1373, 1377, 1381, 1385, 1389, 1393, 1397, 1401, 1405, 1409, 1413, 1417, 1421, 1425, 1429, 1433, 1437, 1441, 1445, 1449, 1453, 1457, 1461]

// https://learn.microsoft.com/en-us/azure/mysql/single-server/connect-nodejs?tabs=windows
const openAPIclient = new OpenAIClient(
  process.env.AZURE_OPENAI_ENDPOINT, 
  new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
);

export {openAPIclient};

const GPT_VERSION = "gpt-4o"

var messages=[
  {"role": "system", "content": "You are a helpful assistant."},
  {"role": "user", "content": "Who won the world series in 2020?"},
  {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
  {"role": "user", "content": "Where was it played?"}
]
var completion = openAPIclient.getChatCompletions(GPT_VERSION, messages, { maxTokens: 150 })
.then(result => {
    console.log(result.choices[0].message.content)
  }
).catch(err => {
  console.log(err)
});

import bodyParser from  'body-parser';
// Add bodyParser middleware for handling URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
// Add bodyParser middleware for handling JSON data
app.use(bodyParser.json());

import * as url from 'url';
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Serve static files from the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/html', express.static(path.join(__dirname, 'public/html')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

var emailData=[];
var skip = 0
fs.createReadStream(path.join(__dirname, 'public/csv/processedEmails.csv'))
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
    if(skip == 0){
      skip = 1
    }else{
      emailData.push(csvrow); 
    }
});

var representations=[];
fs.createReadStream(path.join(__dirname, 'public/csv/representations.csv'))
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
    representations.push(csvrow);
});



function dotProduct(vec1, vec2) {
  if (vec1.length !== vec2.length) {
      throw new Error('Vectors must have the same length');
  }

  let dot = 0;
  for (let i = 0; i < vec1.length; i++) {
      dot += vec1[i] * vec2[i];
  }
  return dot;
}

function magnitude(vec) {
  let mag = 0;
  for (let i = 0; i < vec.length; i++) {
      mag += vec[i] * vec[i];
  }
  return Math.sqrt(mag);
}

function cosineSimilarity(vec1, vec2) {
  if(vec1.length === 0 || vec2.length === 0){
    return 0 
  }
  const dot = dotProduct(vec1, vec2);
  const mag1 = magnitude(vec1);
  const mag2 = magnitude(vec2);
  return 1 - ((dot / (mag1 * mag2)) / 2);
}


function randomExcluded(list, min, max, excluded) {
  var n = Math.floor(Math.random() * (max-min) + min).toString();
  var val = list[n].toString()
  if (excluded.includes(val)){
    return randomExcluded(list, min, max, excluded)
  }else{
    return parseInt(val);
  }
}

function meanOfVectors(vectors) {
  if (vectors.length === 0) {
      return null; // Handle empty array case
  }

  const vectorLength = vectors[0].length;
  const meanVector = new Array(vectorLength).fill(0);

  vectors.forEach(vector => {
      if (vector.length !== vectorLength) {
          return 0;
          throw new Error('All vectors must have the same length');
      }

      vector.forEach((value, index) => {
          meanVector[index] += value;
      });
  });

  meanVector.forEach((value, index) => {
      meanVector[index] = value / vectors.length;
  });

  return meanVector;
}


app.use(session({
  secret: randomKey, // Change this to a secure secret key
  resave: true,
  saveUninitialized: true
}));

app.get('/random/:Condition/:Type', function(req, res){
  if(req.params.Condition == 1 && req.params.Type == "phishing"){
    var index = randomExcluded(Condition1Phishing, 0,188,[])
    res.send(emailData[index][14])
  }
});

app.get('/trial/:Trial', function(req, res){
  // ,BaseEmailID,Author,Style,Type,Sender Style,Sender,Sender Mismatch,Request Credentials,Subject Suspicious,Urgent,Offer,Link Mismatch,Prompt,Body,Representation
  if(req.params.Trial < emailData.length){
    res.send(emailData[req.params.Trial][14])
  }else{
    res.send("Try another trial")
  }
  
});

app.get('/reject/:MID', function(req, res){
  // ,MTurkId,Age,Gender,Education,Country,Victim,Consent,Q0,Q1,Q2,Q3,Q4,Q5,Userid,PQ0, PQ1, PQ2, PQ3, PQ4, PQ5, Rejected,
  var Mturkid = req.params.MID.replace(/[^a-zA-Z ]/g, "")
  var Moment = moment().format('yyyy-MM-dd:hh:mm:ss')
  res.sendFile('public/html/reject.html', {root: __dirname })
});

app.get('/postQuestionnaire', function(req, res){
  res.sendFile('public/html/postQuestionnaire.html', {root: __dirname })
});

app.get('/content', function(req, res){
  var EmailType = req.query.EmailType
  var Condition = parseInt(req.query.Condition)
  var UserId = req.query.UserId
  var PreviouslyObserved = req.query.PreviouslyObserved
  var PhaseValue = req.query.PhaseValue
  PreviouslyObserved = PreviouslyObserved.split(",")
  
  if(Condition === 1 || Condition === 2){
    if(EmailType == "ham"){
      var index = randomExcluded(Condition3Ham, 0,176, PreviouslyObserved)
      var email = emailData[index]
      res.send(email.join(','))
    }else{
      var index = randomExcluded(Condition3Phishing, 0,188, PreviouslyObserved)
      var email = emailData[index]
      res.send(email.join(','))
    }
  }else if(Condition === 3 || Condition === 4){
    if(EmailType == "ham"){
      var index = randomExcluded(Condition4Ham, 0,176, PreviouslyObserved)
      var email = emailData[index]
      res.send(email.join(','))
    }else{
      var index = randomExcluded(Condition4Phishing, 0,188, PreviouslyObserved)
      var email = emailData[index]
      res.send(email.join(','))
    }
  }else{
    res.send("Error fetching email")
  }
  

});  

app.get('/insert', function(req, res){
  res.send("success")
});

app.get('/questionnaire', function(req, res){
  var MTurkId = req.query.MTurkId
  var Age = req.query.Age
  var Gender = req.query.Gender
  var Education = req.query.Education
  var Country = req.query.Country
  var Victim = req.query.Victim
  var Chatbot = req.query.Chatbot
  var Consent = req.query.Consent
  var Q0 = req.query.Q0
  var Q1 = req.query.Q1
  var Q2 = req.query.Q2
  var Q3 = req.query.Q3
  var Q4 = req.query.Q4
  var Q5 = req.query.Q5
  var Userid = req.query.Userid
  var PQ0 = req.query.PQ0
  var PQ1 = req.query.PQ1
  var PQ2 = req.query.PQ2
  var PQ3 = req.query.PQ3
  var PQ4 = req.query.PQ4
  var PQ5 = req.query.PQ5
  var Rejected = req.query.Rejected

  PQ5 = PQ5.replace(/[^a-zA-Z ]/g, "")
  res.send("success")
});

io.on('connection', (socket) =>  {
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});  

function mysql_real_escape_string (str) {
  if(typeof str == 'undefined'){
    return "undefined"
  }else{
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
      switch (char) {
          case "\0":
              return "\\0";
          case "\x08":
              return "\\b";
          case "\x09":
              return "\\t";
          case "\x1a":
              return "\\z";
          case "\n":
              return "\\n";
          case "\r":
              return "\\r";
          case "\"":
          case "'":
          case "\\":
          case "%":
              return "\\"+char; // prepends a backslash to backslash, percent,
                                // and double/single quotes
          default:
              return char;
      }
    });
  }
}

app.get('/feedback', function(req, res){
  const MTurkId = req.query.MTurkId
  const UserId = req.query.UserId
  const EmailId = req.query.EmailId
  const Trial = String(req.query.Trial)
  const Condition = parseInt(req.query.Condition)
  const Messages = req.query.Messages
  const relevantQuestions = req.query.RelevantQuestions
  const totalQuestions = req.query.TotalQuestions
  const InitialMessage = req.query.InitialMessage
  const stringify = JSON.stringify(Messages[Messages.length - 1])
  if (typeof stringify == 'undefined'){
    res.send("I couldn't provide feedback for that. My appologies.")
  }
  var sql_message = mysql_real_escape_string(stringify)
  
  var response = ""
  if(relevantQuestions < 2 && totalQuestions < 10){
    var last_message = Messages[Messages.length - 1]
    var last_message_relevant = [{"role": "system", "content": "Your job is to determine if messages sent by students in a phishing email identification experiment are about the topic of emails or phishing emails. Reply with a 1 if the message is relevant to phishing emails or a 0 if it is irrelevant."}, last_message]
    openAPIclient.getChatCompletions(GPT_VERSION, last_message_relevant, {maxTokens:1})
    .then(result => {
        if(result.choices[0].message.content == "0" & InitialMessage != "true"){
          response = "That message does not seem to be a question relevant to phishing emails, please ask a relevant question or continue to the next trial of the experiment." 
          res.send(response)
        }else if(last_message.content.length < 20 & InitialMessage != "true"){
          response = "That message seems too short for me to reply with useful information about phishing emails. Please ask a question with more context so I can be a helpful teaching aid."
          res.send(response)
        }else{
          openAPIclient.getChatCompletions(GPT_VERSION, Messages, { maxTokens: 150} )
          .then(result => {
              response = mysql_real_escape_string(result.choices[0].message.content)
              res.send(result.choices[0].message.content)
            }
          ).catch(err => {
            console.log(err)
            response = "I couldn't provide feedback for that. My appologies."
            res.send(response)
          });
        }
      }
    ).catch(err => {
      console.log(err)
      response = "I couldn't provide feedback for that. My appologies."
      res.send(response)
    });
  }else{
    res.send("")
  }

});
  
app.get('/queryIBL', function(req, res){
  res.send("")
});

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/html/startExperiment1.html'));
})

app.get('/experiment1', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/html/startExperiment1.html'));
})

app.get('/experiment2', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/html/startExperiment2.html'));
})

app.get('/experiment3', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/html/startExperiment3.html'));
})

app.get('/experiment4', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/html/startExperiment4.html'));
})

const port = process.env.PORT || 3000;
http.listen(port, () => console.log(`Listening on port ${port}`));
