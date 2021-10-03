//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',fetchPhoto);

function fetchPhoto(){
  let date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=lX73SDv5wNHKsd5IeZj5eOccpo9o9236depdbBXg`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.media_type === 'image'){
      document.querySelector('img').src = data.url
      document.querySelector('img').hiidden = false
      document.querySelector('iframe').hidden = true
  } else {
    document.querySelector('iframe').src = data.url
    document.querySelector('iframe').hidden = false
    document.querySelector('img').hidden = true
  }
  document.querySelector('h3').innerText = data.explanation 
  document.querySelector('h2').innerText = data.title 
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}