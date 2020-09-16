/* Forwarding tidal messages from supercollider hydra. */

msg.setPort(3333)

// run once: convert tidal messages from array to object
parseTidal = (args) => {
  obj = {}
  for(var i = 0; i < args.length; i+=2){
    obj[args[i]] = args[i+1]
  }
  return obj
}

blend = 0

msg.on('/play2', (args) => {
 const tidal = parseTidal(args)
 console.log(tidal)
  setTimeout(() => {
    blend = +!blend
  }, tidal.delta * 1000)
})
