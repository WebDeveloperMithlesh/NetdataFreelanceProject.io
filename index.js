
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Mobile Menu
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


// Dark MODE
const switchToggle  = document.querySelector('#switch-toggle');
const html = document.querySelector('html');
let isDarkmode = false
const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'));

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`

if(localDarkmode) {
    isDarkmode = localDarkmode
    html.classList.add('dark')
}else{
html.classList.remove('dark')
}





function toggleTheme () {
    isDarkmode = !isDarkmode
    localStorage.setItem('isDarkmode', isDarkmode)

    switchTheme()
}

function switchTheme () {
if(isDarkmode) {
    html.classList.add('dark')
    switchToggle.classList.remove('bg-yellow-500', '-translate-x-2')
    switchToggle.classList.add('bg-gray-700', 'transform-x-full')
    document.body.classList.add('bg-gray-700', 'text-gray-100')
    setTimeout(() => {
        switchToggle.innerHTML = darkIcon
    }, 250);
} else {
    html.classList.remove('dark')
    switchToggle.classList.add('bg-yellow-500', '-translate-x-2')
    switchToggle.classList.remove('bg-gray-700', 'transform-x-full')
    document.body.classList.remove('bg-gray-700', 'text-gray-100')
    setTimeout(() => {
        switchToggle.innerHTML = lightIcon
    }, 250);
}
}

switchTheme();

// Left nav Fontawesome Icon change on click
// const sIcon = document.querySelector('#favIcon');

const close = `<i class="fas fa-chevron-right"></i>`
const open = `<i class="fas fa-chevron-down"></i>`

const closeIcon = document.querySelector('.fas fa-chevron-right');
const btn1 = document.querySelector('#dmenu');
btn1.addEventListener("click", () => {
    if(close) {
        // btn1.remove("closeIcon")
        btn1.classList.add('closeIcon', 'bg-red-400')    
    }
  
})

 /* Set the width of the side navigation to 250px */
    
 function openNav() {
    // document.getElementById("mySidenav").style.width = "250px";
     add();
  }
  
  /* Set the width of the side navigation to 0 */
  function closeLeft() {
    closebtn();
  } 
  // show Left nav 
  function add() {
  
  var i = document.getElementById( 'leftNav');
  var d = document.getElementById( 'mySideNav');
  i.style.width = "20rem";
  i.style.height = "30rem";
  document.getElementById("closebtn").style.display = "flex"
  d.style.position = "absolute";
  document.body.style.overflowX="hidden";
  document.getElementById("footer").style.display = "none"
  d.style.top = "-36rem";
  d.innerHTML = i.innerHTML ;
  leftNav.style.display = "block"
  leftNav.appendChild(mySidenav);
  }
  // Close Left nav
  function closebtn () {
    var i = document.getElementById( 'leftNav');
  var d = document.getElementById( 'mySideNav');
  i.style.width = "0";
  i.style.height = "0"
  document.getElementById("closebtn").style.display = "none"
  document.getElementById("showButton").style.display = "block"
  
  d.style.position = "absolute";
  document.body.style.overflowX="hidden";
  document.getElementById("footer").style.display = "block"
  d.style.top = "-36rem";
  d.innerHTML = i.innerHTML ;
  leftNav.style.display = "none"
  leftNav.remove(mySidenav);
  }