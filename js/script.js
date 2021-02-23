// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
 


  const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = "#4a4e4d";
 mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.setAttribute("class", "flex-ctr");


const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "#0e9aa7";
topMenuEl.setAttribute('class', 'flex-around');

menuLinks.forEach(function(link){
    let links = document.createElement('a');
    links.innerText = link.text
    links.setAttribute('href', link.href);
    topMenuEl.appendChild(links);
});

