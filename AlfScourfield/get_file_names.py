# get the names of all the files in a directory png_photos

import os

dir = 'AlfScourfield/png_photos/'
files = os.listdir(dir)
for file in files:
    print(dir+file)
# What is the output of this code?