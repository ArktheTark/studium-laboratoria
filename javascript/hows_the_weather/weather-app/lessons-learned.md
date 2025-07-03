# Lessons Learned:

## CSS:

- Focus css selector for input fields

  - This is a small trick. But I wanted to keep a consistent color scheme throughout the project. And that default blue was not going to cut it. Now I know how to change the border of input fields by using that focus selector (not active I tried that first and did not work as expected.)

- Outline short hand property

  - the outline property was useful as first I was trying to change the border color with the focus selector. This just resulted in two different border colors. I made the outline the same size as the border, that way whenever the input field was active it essentially covered the fields original border.

- Margin auto within flex containers
  - I found myself wanting to get some elements off center within my flex container. My first thought was the float property, however that doesn't work. I learned that if you use margin-left: auto, then the element will essentially be floated right, vice versa for the margin-right property. This will be useful going forward for getting elements where I want them.

## Forms:

- Working with javascript forms again

  - Now that I actually wanted to pass the data from my form to a backend, I actually had to learn how to propery set up my form. This just meant labeling my fields correctly and making sure I set my submit button to type 'submit'

- event.preventDefault()

  - My first hurdle was getting around the auto refresh whenever you clikc a button with type 'submit'
  - the event.preventDefault() will stop this from happening that way you can actually work with the data from the form and do what you want.
  - Almost like checking a product that just got off the assembly line before sending it along its way.

- FormData object

  - this was my first time using the FormData object. I specifically just used the .target property as that is the data from that actual form and thats all I wanted.
  - It made it easy to send the data to the backend for futher manipulation. I could have accomplished the same thing a little more manually, but why would I do that now that I know how to use this?
  - from my reading, this is especally useful when uploading files via Forms. So maybe in a future project I can see how true that is

- I also learned how to turn off the auto complete feature for forms with the autocomplete attribute

- I also had to learn that when you are listening for the submit event from a form, you need to listen on the form element and not the submit button element.

## Flask and python things:

- I have used flask before but that was so long ago this was essentially relearning it from scratch.
- I created a basic flask app with the usual folders: templates, and static
- Routes were pretty simple
- I have used the requests library plenty of times but this was my first time having to use the .form property of it. The FormData object from sent from javascript made this alot easier to get the values out of the form (in this case I only had one but still)
- Using dotenv and .env files for secrets
  - Since I was only going to be running this locally, I had to find a way to propery acccess environment variables for things like the API key
  - I found the dotenv library and created a .env file for my API key and loaded it into the app file. I also added the .env to my .gitignore file to make sure it was not uploaded.
- I also tried to follow a better practice of seperating my code. I knew from the API documentation from OpenWeatherApp that I had to make two requests. Since the current weather endpoing only accepted coordinates and not city names.

  - knowing this I seperated these two request functions in another python file and simply imported them into my main app file.
  - the first request goes to the geolocation endpoint to grab the coords and then sends another request to the current weather endpoing

- Post/Redirect/Get (PRG) pattern

  - At first, I was just going to send the request data back to the same template and hide the form and display different elements. Which would have worked, but I wanted to try something different an a little more realistic.
  - the PRG pattern made since for this use case. I would do a POST REQUEST to my backend with the form, grab the data from openweathermap, and then redirect to a new template to display the results.
  - I had to utilize the redirect and url_for methods from flask as well as create a new route to point to the new template and render it. However not that i was not sending the data back in the same request to the frontend, I had to figure out how to get that new data to the new template and script file

- Session object

  - to solve my issue about sending data from one request to another, I found the flask session object
  - it just requires a SECRET_KEY in order to work so I threw that into my .env file and simply made a quick dictionary with the data from the API, and added that to the session dictionary.
  - I then was able to pass that data when I rendered the new template. This I though was super easy and I really liked this feature.

- Giving the new script file access to the 'data' from the API
  - I had to use the bare minimum of jinja 2 to expose my data to my external script.
  - I first had to create an interanl script element and make a variable for the data there. This exposed the variable globally, which could be insecure, but I made sure that the data I passed was manually curated.
  - I then was able to use this variable in my external script file
  - the ordering was important here, as exeternal file would not have had access to the data without it being reference withint the internal script first.

## Javascript things:

- Async/await
  - I was able to practice my async javascript a little bit with the request.
  - At first when I was just planning on updating the current template with the data from the API, this was alot more clear that i need asynchronous javascript, but once I decided to use the PRG pattern, I realized that the async javascript wasn't needed anymore. Until I ran into my next issue
- Side effects of event.preventDefault()
  - I thought I was finished when I figure out how to properly redirect, but for some reason my page was just staying still even after clicking submit. I learned that the event.preventDefault() method will stop the redirect from happening. I looked in the network tab of the inspector and found that the new url was found, but the redirect never happened.
  - I then learned that If I wanted to use the preventDefault() method I need to handled the redirect with Javascript instead of depending on flask to handle everything.
  - I first used the response.ok property to make sure that the get request for the new url was ok.
  - I then used the response.url property to check the url ended in the right path
  - The next property, which was the the window.location.href property. Which is essentially the current URL. I was able to set this to the response.url value (which was the template I was trying to redirect too) and then when I clicked submit the app properly redirected to the new template.

## Conlusion:

- In the end, I was not expecting to learn as much about Flask as I did. These projects were primarly for reinforcing and learning Javascript. But its good to know to make more complex projects in the future where you need a backend. The redirection with the response.url seems handy and I think I know forms alot better now.
