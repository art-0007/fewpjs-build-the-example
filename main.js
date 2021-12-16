// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
const likeBtn = document.querySelector("#\\32 01811189 > footer > ul > li > span")

function heartChange() {
  if (likeBtn.className === "like-glyph") {
    likeBtn.innerHTML = FULL_HEART
    likeBtn.className = "activated-heart"
  } else if (likeBtn.className === "activated-heart") {
    likeBtn.innerHTML = EMPTY_HEART
    likeBtn.className = "like-glyph"
  }
}

function setHidden() {
  modal.className = ('hidden')
}
setHidden()

likeBtn.addEventListener('click', addLike )

function addLike() {
  
    mimicServerCall()
  .then(() => { heartChange() })
  .catch(function(error) {
    modal.style.visibility = "visible"
    alert(error.message)
    setTimeout(setHidden, 3000)
    function setHidden() {
      modal.className = ('hidden')
    }
    setHidden()
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
