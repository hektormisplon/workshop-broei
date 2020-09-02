/*
 * 1st output buffer - red
 * 2nd output buffer - green
 * 3rd output buffer - blue
 * 4th output buffer - yellow
 */


solid(255,0,0).out(o0)
solid(0,255,0).out(o1)
solid(0,0,255).out(o2)
solid(255,255,0).out(o3)

render(o0)
render(o1)
render(o2)
render(o3)
render()

solid().out()

osc([2, 1, 20, 50], 1).out(o0)
