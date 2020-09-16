pb.setName('hektor')

s0.initScreen(0)

source2 = () => src(s0).scale(0.8)

src(s0)
  .diff(source2())
  .out()

osc([1, 10, 100]).out()

idk = () =>
  shape([0, 1, 2, 4].fast(64))
    .scale(1, 0.6)
    .diff(osc(5))
    .scrollX(0.501, () => Math.sin(0.2))
//
idk()
  .diff(idk().scale(0.95))
  .diff(src(s0).scale(0.999))
  .modulate(o0)
  .modulateRotate(o0, () => Math.sin(10))
  .modulateScale(o0, () => mouse.y)
  .diff(o0)
  .scale(() => 0.99 + Math.sin(0.025))
  .mask(
    shape(4)
      .scale(1, 0.6)
      .scale(3)
      .repeat(3, 3)
      .scrollX(0.501, 0.05)
  )
  .diff(strobe())
  .scale(blend || 0.5)
  .out()

a.setBins(3)
shape(4)
  .color(
    () => a.fft[0],
    () => a.fft[1],
    () => a.fft[2]
  )
  .out()

a.setScale(4)
a.setSmooth(0.5)

src(s0)
  .diff(src(s0).scale(0.95))
  .out()

pattern = density => voronoi(1, density, 2)
//
pattern02 = () => voronoi(1, 1, 2).modulateScale(pattern(1))
//
pattern02()
  .diff(pattern(1.2))
  .diff(src(s0))
  .rotate(() => mouse.x / 50)
  .out()

strobe = () => solid(() => blend, () => blend, () => blend)

solid().out()

s0.initScreen(0)

src(s0).out()
