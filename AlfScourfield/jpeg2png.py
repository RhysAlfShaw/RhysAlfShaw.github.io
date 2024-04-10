# script that will take files from a given directory and convert them to png in a local directory
# using the PIL library
Path = '/Users/rs17612/Google Drive/My Drive/Alf Scourfield Photos'
Pathout = 'AlfScourfield/png_photos'
import os
from PIL import Image
# import hief module
from pillow_heif import register_heif_opener

register_heif_opener()


# empty out the directory
for file in os.listdir(Pathout):
    os.remove(f'{Pathout}/{file}')

for file in os.listdir(Path):
    
    if not file.endswith('.pdf' or '.DS_Store'):
        img = Image.open(f'{Path}/{file}')
        clean_name = os.path.splitext(file)[0]
        # downsizing the image quality
        img.save(f'{Pathout}/{clean_name}.jpg', 'jpeg', quality=60)
        print('all done!')