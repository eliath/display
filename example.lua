local disp = require ('./init.lua')

require 'image'
require 'sys'

local i1 = image.lena()
local i2 = image.fabio()

-- Single image:
disp.image(i1, { title='lena' })

-- Multiple images:
disp.images({i2, i2, i2, i2}, { width=200, title='super fabio', labels={'a', 'b', 'c', 'd'}})

-- Stretched images:
local images = {}
for i = 1,16 do
   local i = image.scale(i1, 100+math.random(-20,20), 100+math.random(-50,50))
   table.insert(images, i)
end
disp.images(images, { title='lenas', zoom=2, labels={'a','b'} })

-- Simple plot:
disp.plot(torch.cat(torch.linspace(0, 1, 100), torch.randn(100), 2), {
   title = 'simple test!',
   labels = {'some data'},
   xlabel = 'x',
   ylabel = 'y',
})

-- Generate observation:
local function obs()
   local y1 = math.random()
   local y1m = y1 - .1
   local y1M = y1 + .1
   local y1 = y1m..';'..y1..';'..y1M
   local y2 = math.random() * 2
   local y2m = y2 - .1
   local y2M = y2 + .1
   local y2 = y2m..';'..y2..';'..y2M
   return y1,y2
end

-- Live plot:
local data = {}
for i=1,100 do
   table.insert(data, { i, obs()})
end
local win = disp.plot(data, {
   labels={ 'chart a', 'chart b' },
   title='progress',
   ylabel='something',
   -- Moving average:
   showRoller=true,
   rollPeriod=10,
   xlabel='test',
   -- Data has custom error bars:
   customBars=true,
   data='csv',
})
for i = 1,20 do
  table.insert(data, { #data+1, obs()})
  disp.plot(data, { win=win })
  sys.sleep(.2)
end
