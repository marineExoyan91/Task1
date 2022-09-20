console.log('Welcome')
const div = document.getElementsByTagName('div')[0]
let h1 = document.createElement("h1");
h1.innerHTML = 'Welcome';
div.prepend(h1);