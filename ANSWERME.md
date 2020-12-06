1. What React components does your app have and what is the responsibility of each component?

 i have APP which is the main component and everything will be render from APP
 i have Nav component with 2 button , because i use react-router-dom by pressing each button we are going to same page (link)
 in component bar , i will suppose to render my bar chart, in component radar im suppose to render radar chart
 in component context i defined my usecontext to be able to send my props to whole application.

 WE FETCH THE QUICKCHART API AND USE USEEFFECT TO CALL THE FETCH ITEM ONCE 

(_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.


2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.
(_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
(_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:

i already add an min and max to my input type number set from 1 to 10 , user can not input out of this range 
for each new variavle we need to have a useState , we set our variable then  we sent it   with other variables through usecontext to our bar and radar component and then 
with this variable our chart would be change.

<input type="color" id="head" name="head"
           value="#e66465">

we can use usestate with this value for example and send it


- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API
)


