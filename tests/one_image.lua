local disp = require ('../init.lua')
require 'image'
require 'sys'

local i1 = image.lena()

-- Single image:
disp.image(i1, { title='lena' })
