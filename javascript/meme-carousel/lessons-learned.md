Notes:

- get attribute, setAttribute
- CSS transitions

Alright so in doing this image carousel lab/project, I learned quite a few new things. The first was using the :not() psuedo class from CSS in conjunction with Javascript. I didn't know that you could combine the two, but it made it easier to select the other img element that did not contain the 'active' class.
This allowed me to not rely on the 'id' attribute of the element so I didn't have to write more logic.

The second thing I was able to practice was using the slice() method on strings. Not anything crazy, but being able to actually find a use case for it was nice. To strip off the .png from the 'src' attribute so I could find the index in the array easier. Could there have been another way to accomplish this? Yes but at the time thats just what made sense in my head.

I also got a little more practice using the switch statement. I accustomed to using alot of 'if' statements so this is helping my mind get used to finding other ways of accomplishing the same logic.

I was able to play around with position relative and absolute from within a flex container. I needed to get the images to be stacked on top of each other in order to accomplish the 'animation' of switching to a new image. So now I know that is a trick I can use to accomplish that.

I used the getAttribute() and setAttribute() methods to read the 'src' attribute and also set it to a new image name that was grabbed from the Array. This I feel will come really handy down the line in future JS projects and I thought it was cool that such a feature existed.

Lastly I played around with CSS transitions. I don't think I have that great of a grasp on it. But this was a good introduction on the topic and I think I am going to read up on it a little bit more. Might try and use it in another project in some form or another.

Overall I think this project was a good learning experience. Something that didn't take as long as I thought. It was a little annoying as I had implemented it a little differently at first before I added the CSS transition. Which didn't work so I had to refactor my .js, .html, and .css to get that feature to work. But now I know in the future if I want to do the same thing to format it like that in the beginning.
