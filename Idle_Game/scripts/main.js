// create a new link element
var link = document.createElement('link');

// set the link element's attributes
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../styles/partial_deforest.css';

// append the link element to the head of the document
document.head.appendChild(link);