- event.currentTarget

# Lessons learned:

## Using the input event versus 'keyup' or 'keydown'

- Origninally, I was using the keydown event for my event listener. However this led to the last character not showing up in the preview. You had to enter one more key for the second to last one to show up.

- Using the 'input' event was alot more consistent and will also allow copy and pasting to trigger the event as well.

## Using CDN to access the marked.js library in the browser

- In this project, I was working strictly in the browser. No backend or anything like that.

- I am used to importing the modules into the file like python, but in order to do that with Javascript purely in the browser I would have had to grab the actual files from marked.js and I did not want to do that.

- Making sure I had the cdn first before my external file allowed the module to be accessible globally. I could have also imported just the methods I wanted, but for simplicity I imported the whole thing.

## Using marked.js

- Not much to say about using this external library. I only used the .parse() method as that did exactly what I needed.

- Just need to parse the markdown into HTML to display a preview to the user.

## Getting more familiar with events

- I learned that with every event the first argument passed is the event object.

- to access the element that fired the event, I had to use event.target.

- this made it easy to access the updated value of the textarea each time to update the preview

## Conclusion:

- This project was extremely simple. I believe the biggest problem I had was figuring out that the textarea element was its own thing and not a type of input element (I was doing input type="textarea"). Once I figured that out everything else was simple.
