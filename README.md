#The Second challenge- Modal


We got HTML and CSS done already, where in HTML we have 3 buttons show modal 1, 2 and 3. After that, we have div with class modal and hidden. Div contains button with class close-modal, 'h1' and 'p' after this one we have another div with classes overlay and hidden.

 In CSS we have style for 3 buttons, who show, and one button for close modal. For modal class of our div element with h1 and p we have styles but also at the moment is hidden overlay which will give us just when we  click some styles like backdrop-filter blur.

In javascript first we declared the variables for modal, overlay and buttons here we had 3 buttons, with same class, but when we checked in the console we couldnt see all of them just one, so we needed to use query selector all but also we need for loop so we can loop through all of them by simple add btns and [i], so we would see all of them.

To make it clickable and work on btns[i] we just added event listen and start adding and removing classes when we want on click to open modal in this case our div with text we simple needed to delete class 'hidden'
and when we wanted to close modal, we needed to add class 'hidden'  
now because theres a lot of repeatition we need to make it DRY code
so we created two functions for closeModal and openModal where we adding n removing classes to modal and overlay also we wanted on escape to close modal for that we need to use keyboard events.

We used here keydown, and elso inside function (e) what stands for event
when we open in console we saw a lot keys there whenever we press on keyboard something so we needed to use it for only Esc to close modal. 