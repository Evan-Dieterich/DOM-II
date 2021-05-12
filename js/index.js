// Your code goes here

//add border to logo text on mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', function(event) {
    this.style.border = '10px solid blue';
});

//alerts user when page has been clicked
document.addEventListener('click', function(event) {
    alert("You clicked somewhere on the page!");
});

//changes background color of body when window is resized
window.addEventListener('resize', function(event) {
    document.body.style.backgroundColor = 'pink';
});

//changes background color when page is dbl clicked
window.addEventListener('dblclick', function(event) {
    document.body.style.backgroundColor = 'red';
});

//console logs a message when the page has loaded.
window.addEventListener('load', function(event){
    console.log('page is fully loaded');
});


//changes img to new image when selected
const img = document.querySelectorAll('img');

img.forEach(img => {
img.addEventListener('select', function(event) {
        img.src ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatoday.in%2Ftechnology%2Fnews%2Fstory%2Felon-musk-is-literally-sending-dogecoin-to-the-moon-names-new-satellite-doge-1-and-it-is-paid-for-in-doge-1800732-2021-05-10&psig=AOvVaw1bB1i50TmIqX20pEFcyGxH&ust=1620931687704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiqw57nxPACFQAAAAAdAAAAABAD';
    });
});

//changes link styles on mouse over event
let navBar = document.querySelectorAll('a');

navBar.forEach(nav => {nav.addEventListener('mouseover', event => {
    event.target.style.borderBottom = '1px solid grey';
    event.target.style.color = 'orange';
    });
});

//restores link styles on mouse leave event
navBar.forEach(nav => {nav.addEventListener('mouseleave', event => {
        event.target.style.border = 'none';
        event.target.style.color = 'black';  
    });   
});
