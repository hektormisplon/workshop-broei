/*
 * Compositing
 * @todo: Blend mode examples using solids
 * @todo: Blend mode examples using image
 */

/* blend */

solid(255,0,0).blend(solid(0,255,0)).out()

solid(1,0,0).add(solid(0,2,0)).out()
solid(1,1,0).out()

/* add */

solid(1,0,0).blend(solid(0,1,0)).out()

solid(1,1,0).out()

add()
mult()
diff()
mask()
