const name = document.querySelector('.name');
const fullstack = document.querySelector('.fullstack');
const frontend = document.querySelector('.frontend');

const queue = [  {element: name, text: 'Gloria Marilyn, Perez Boyko'},  {element: fullstack, text: 'Full Stack Developer'},  {element: frontend, text: 'Frontend Developer'}];

const typeText = (element, text, callback) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        deleteText(element, callback);
      }, 1000);
    }
  }, 200);
}

const deleteText = (element, callback) => {
  let text = element.textContent;
  const interval = setInterval(() => {
    if (text.length > 0) {
      element.textContent = text.substring(0, text.length - 1);
      text = element.textContent;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 100);
}

const switchText = () => {
  const item = queue.shift();
  const { element, text } = item;
  
  queue.push(item);
  
  typeText(element, text, () => {
    deleteText(element, switchText);
  });
}

switchText();


/*Hover BTN*/

var portfolioBtn = document.getElementById("portfolio-btn");

portfolioBtn.onmouseover = function() {
  var img = portfolioBtn.getElementsByTagName("img")[0];
  img.src = "../img/icons/briefcase-fill-white.svg";
}

portfolioBtn.onmouseout = function() {
  var img = portfolioBtn.getElementsByTagName("img")[0];
  img.src = "../img/icons/briefcase-fill.svg";
}

