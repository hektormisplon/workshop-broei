noise().rotate(({time})=> (time)).out()

osc(10,-0.5,1).color(1,0,1)
  .mask(noise(4,2).modulateScale(noise(0.25,0.05)))
  .modulateScale(osc(6,-0.5,2).kaleid(50))
  .mult(osc(3,-0.25,2).kaleid(50))
  .scale(0.5,0.5,0.75)
  .out()
