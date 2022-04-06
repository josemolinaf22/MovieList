const message = document.querySelector('#message')

const addMovie = (event) => {
  event.preventDefault()
  const inputField = document.querySelector('input')

  let movie = document.createElement('li')

  let movieTitle = document.createElement('span')
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener('click', crossOffMovie)
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'x'
  deleteBtn.addEventListener('click', deleteMovie)
  movie.appendChild(deleteBtn)
  
  document.querySelector('ul').appendChild(movie)

  inputField.value = ''
}

const deleteMovie = (event) => {
  event.target.parentNode.remove()
  // message.textContent = 'Movie Deleted'
  message.textContent = `${event.target.parentNode.firstChild.textContent} Deleted!`
  revealMessage()
}

const crossOffMovie = (event) => {
   event.target.classList.toggle("checked")

  if (event.target.classList.contains("checked") === true) {
    // message.textContent = 'Watched'
    message.textContent = event.target.textContent + ' watched!'
  } else {
    // message.textContent = 'Movie added back'
    message.textContent =`${event.target.textContent} added back`
  }
  revealMessage()
}

const revealMessage = () => {
  message.classList.remove('hide')
  
  setTimeout(() => {
    message.classList.add('hide')
  }, 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)







