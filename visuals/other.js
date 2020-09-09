/*
 * Gradient: extra source
 */

gradient().out()

/*
 * Shape optional parameters (radius??? & smoothing)
 */

shape(4,() => Math.sin(1 * time), 1).out()

/*
 * Parameter sequencing
 */

osc([1,10,100]).out()
osc([1,10,100].fast(2)).out()

solid(1,1,1).out()
