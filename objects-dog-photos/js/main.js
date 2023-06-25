//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
  console.log(data);

  document.querySelector('h2').addEventListener('click',addImage)
  function addImage(){
  document.querySelector("img").src = data.message
}
})
.catch(err => {
  console.log(`error ${err}`);
});

