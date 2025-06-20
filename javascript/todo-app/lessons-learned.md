## Lessons learned from todo exercise

- **How to select elements based on attribute value**

  - I was trying to delete todo items based on if their radio button was selected or not. There was probably another way I could have done this. But at the time the way that made most sense in my head was to see if the radio button was checked, and if so remove() the parent element (which in this case was the whole todo item)
  - So in doing it this way, I also learned how to grab the parent element of an element as well. Which I feel willl come in handly down the road.

- ** Reninforcing use of the insertAdjacentHTML method**
- In a bootcamp I was in a few years ago, I remember using addChild() to implement a todo app, but that was also with using flask and javscript together
- with this exercise I utilzed insertAdjacentHTML with the 'beforeend' option. Meaning it essientially gets appended after the last child of the parent element
- With this I have to create a template string for the HTML i need to add, which I don't love. But for now it does the job and helps me finish the small project

- **adding and removing classes with classList.add/remove**
- I had practice this in a JS course I did finished a few weeks ago. But found it rather handy in this project. super easy to show a "form" that a user would see if they clicked a button and hide everything else. Also got my used to utlizing a custom "hidden" class that I had in my .css file to toggle the display to "none"

-**HTML and CSS tricks**

- I got into the habit of creating base classes like container or todo, so that I apply the same styling to similar elements in my file. This cut down on repeated code and made thing go a little smoother.
- I also utlized flex in a small way. Just to center my content but it have a better understanding of it now and also used the flex-wrap property to get rid of the endless row of todo items I had orginally.

- **Possible additions**
- I think I would like to play with local storage to save the state of the app. That way when you refresh the page all the todo's stay and you don't have to restart from scratch. But I think I will save that for a future project and then come back to this to implement it.
- I would also like to add a backend to this. I could probably spin up a flask app but I think I would like to try it with Java instead which I still need to learn

- **Summary**
- Overall, I think this project gave me more practice in manipulating the DOM and learning small little things that will me help me going forward. More of a refresher since I have done this sort of project before just a couple years prior. But I think for just doing this with only vanilla javascript it turned out ok.
