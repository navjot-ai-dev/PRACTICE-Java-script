const body = document.body;

function changeTheme(theme){

body.classList.remove(
'dark',
'light',
'blue',
'pink'
);

body.classList.add(theme);

localStorage.setItem(
'theme',
theme
);
}

const savedTheme =
localStorage.getItem('theme');

if(savedTheme){
body.classList.add(savedTheme);
}