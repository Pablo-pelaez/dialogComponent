// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Defining the variables to hanlde the user action
let btnAccept = document.getElementById('btn-accept')
let btnCancel = document.getElementById('btn-cancel')
let response = document.getElementById('response')

//To handle the option that the user took
btnAccept.addEventListener("click",()=> {response.textContent= 'You accepted the action'; modal.style.display = "none";} )
btnCancel.addEventListener("click", ()=> {response.textContent= 'You aborted the action'; modal.style.display = "none";})
