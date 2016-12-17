(function () {
  function randomColorGenerator () {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  function changeBackgroundColor () {
    document.body.style.backgroundColor = randomColorGenerator()
  }

  document.querySelector('body').addEventListener('click', changeBackgroundColor)

  window.setInterval(changeBackgroundColor, 5000)
})()
