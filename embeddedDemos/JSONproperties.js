/*
var mqtt=require('mqtt');

var client = mqtt.connect("broker.emqx.io",clientId : mparseInt(Math.random() * 100)*/

const jsonfile = require('jsonfile')

/*"use strict";

let current_r = 0;
let current_g = 0;
let current_b = 0;
let color = [1,0,1];


const clientID = "clientID-" + parseInt(Math.random() * 100);
const host = 'broker.emqx.io';
const port = '8084';
// Initialize new Paho client connection
let client = new Paho.MQTT.Client(host, Number(port), clientID);

*/
var mqtt = require('mqtt')
const file = 'example.json'
var client  = mqtt.connect('mqtt://test.mosquitto.org')
 




client.on('connect', function () {

  
 
      
  client.subscribe('waterlevel', function (err) {
    if (!err) {

    /*    let randomNumbers = [];
    for (var i = 1; i <= 60; i++) {
    var value = Math.random() * (20 - 10) + 10;
    
    let index = i-1; 
    console.log(index)
    randomNumbers[index] = value;  
    }
    let stringNumbers = toString(randomNumbers);
    
    */
      client.publish('waterlevel', 100) 
    
    }
  })
})


 
 client.on('message', function (topic, message) {
  // message is Buffer
  const test = message.toString()
  client.end()

  const file = 'example.json'
jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)

obj['metaObjects'][1]['waterlevel'] = test
  console.dir(obj)

  jsonfile.writeFile(file, obj)

  
})

})
