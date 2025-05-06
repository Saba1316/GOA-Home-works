// Explain what bubbling & capturing is


// Bubbling and capturing are two phases of event propagation in the DOM (Document Object Model). When an event (like a click, keypress, etc.) 
// occurs on an element in a webpage, it doesn’t just affect that element—it can "bubble up" or "capture" down the DOM tree, triggering event handlers on parent or ancestor elements.

// Event Propagation
// When an event happens on an element, it can propagate (move) in two main directions:

// Capturing Phase (Trickling Down):

// The event starts from the root of the document (the document object) and moves down through the ancestors of the target element (parent -> grandparent -> etc.).
// In the capturing phase, the event is captured by the outermost elements before it reaches the target element.
// Bubbling Phase:

// After the event reaches the target element, it then bubbles up (propagates upward) from the target element back to the root of the document (child -> parent -> grandparent -> etc.).
// This is the most common phase you’ll use when handling events, as most event listeners listen for events in the bubbling phase.


// Capturing: The event is caught by outer elements first, before reaching the target element.
// Bubbling: The event starts at the target element and bubbles up through the parent elements to the root.
// The default behavior is bubbling, but you can change it to capturing by specifying the third parameter as true in addEventListener.