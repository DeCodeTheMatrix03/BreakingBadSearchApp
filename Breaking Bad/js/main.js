//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.breakingbadapi.com/api/characters?name=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       document.querySelector('#name').innerText = data[0].name
       document.querySelector('#birthday').innerText = data[0].birthday
       document.querySelector('#actor').innerText = data[0].portrayed
       document.querySelector('#status').innerText = data[0].status
       document.querySelector('#characterImage').src = data[0].img
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}