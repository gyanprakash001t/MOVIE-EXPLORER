first fo all i learnt about how to make a call 
then i leant how to make call on the user's choice 


// infinite scrolling 
with the help IntersectionObserver object ;
const observer = new IntersectionObserver(callback, options);

1. callback

A function that runs whenever the visibility of the target changes.
It receives two arguments:
entries → Array of IntersectionObserverEntry objects (info about each observed element).
observer → The observer instance itself.

each entry has these properties 
entry.target → The observed element
entry.isIntersecting → true/false if visible
entry.intersectionRatio → Percentage of visibility (0 to 1)
entry.boundingClientRect → Element’s position/size
entry.intersectionRect → Visible part of the element
entry.rootBounds → Bounds of the root element
const callback = (entries, observer) =>
{
    entries.forEach(entry=>{
        if(entry.in)
    })
}

#isInterSecting
isIntersecting is a boolean (true/false).
It tells you whether the target element is currently intersecting (overlapping) with the root (viewport or parent element).

🔹 How it works

If any part of the element crosses the threshold into the root, isIntersecting = true.

If it’s completely outside, then isIntersecting = false.

#useRef
const ref = useRef(null);

Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property:

Manipulating the DOM with useRef
When you pass a ref to a React element (via the ref prop), React will set .current to that DOM nod