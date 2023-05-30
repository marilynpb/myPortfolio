const nodejsMeter = document.getElementById('nodejs-meter');
const nodejsValue = document.getElementById('nodejs-value');
const mongoMeter = document.getElementById('mongo-meter');
const mongoValue = document.getElementById('mongo-value');
const mysqlMeter = document.getElementById('mysql-meter');
const mysqlValue = document.getElementById('mysql-value');
const phpMeter = document.getElementById('php-meter');
const phpValue = document.getElementById('php-value');
const githubMeter = document.getElementById('github-meter');
const githubValue = document.getElementById('github-value');

nodejsMeter.addEventListener('input', () => {
  nodejsValue.innerText = nodejsMeter.value + '%';
});

mongoMeter.addEventListener('input', () => {
  mongoValue.innerText = mongoMeter.value + '%';
});

mysqlMeter.addEventListener('input', () => {
  mysqlValue.innerText = mysqlMeter.value + '%';
});

phpMeter.addEventListener('input', () => {
  phpValue.innerText = phpMeter.value + '%';
});

githubMeter.addEventListener('input', () => {
  githubValue.innerText = githubMeter.value + '%';
});
