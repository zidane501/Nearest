from PIL import Image
import numpy as np, os
from matplotlib import pyplot as plt

img_path = './img/page0.jpg'

print("os.getcwd()",os.getcwd())

im = Image.open(img_path) # Can be many different formats.
imArr = np.array(im)
width,height,depth = imArr.shape
print(width,height,depth)
objDict={}
objArray = []
for h in range(0,height):
    start = False
    objProps = [0,0,0,0] # startWidth, endWidth,height,color
    k = 0
    for w in range(1,width):
        if start:
            k+=1

        if (imArr[w,h,0]-imArr[w-1,h,0] == 0) and start:
            start = False
            if (k>5): 
                objProps[1] = w; 
                objArray.append(objProps)
            k = 0
            continue
                
                
        if (imArr[w,h,0]-imArr[w-1,h,0] == 0) and not start:
            if k==0:
                objDict[f'{w-1},{h}'] = ''
                objProps[0] = w-1; 
                objProps[2] = h; 
            
            start = True


keys = objDict.keys()
newobjDict = dict(objDict)
for k in keys:
    if len(objDict[k])<1:
        newobjDict = removekey(newobjDict,k)
objDict = newobjDict

print("len(objDict)",len(objDict))
    
print("objDict.keys()", list(objDict.keys())[0:3])
zerosImgArr = np.zeros((width,height,depth))

print("zerosImgArr.shape:",zerosImgArr.shape)
for i in objDict.keys():
    print("i", i)
    print("objDict[i]:",objDict[i])
    startWidth, endWidth,objheight,color = objDict[i]
    print("[startWidth:endWidth,objheight,0]",f"[{startWidth}:{endWidth},{objheight},0]")
    zerosImgArr[startWidth:endWidth,objheight,0] = 255 

plt.imshow(zerosImgArr, interpolation='nearest')
plt.show()

# pix = im.load()
# print(pix)
# print(im.size)  # (w,h) Get the width and hight of the image for iterating over
# print(pix[1,2])  # Get the RGBA Value of the a pixel of an image
# pix[x,y] = value  # Set the RGBA Value of the image (tuple)
# im.save('alive_parrot.png')  # Save the modified pixels as .png