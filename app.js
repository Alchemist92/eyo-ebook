// get my submit button working
document.querySelector('.submit').addEventListener('click', myOutput);

// get input fields
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const post = document.querySelector('#post');


function myOutput(e){
  // make sure all fields are filled
  if(firstname.value === "" || lastname.value === "" || email.value === "" || phone.value === ""){
    post.innerHTML = 
  `<p class = 'alert alert-warning'> Please complete all fields. </p>`
  // clear fields
  clearFields();
  // timeout
  setTimeout(()=> {
    clearAlert()
  }, 3000)
  }
  else{
    displayPost();
    clearFields();
    setTimeout(()=> {
      clearAlert()
    }, 3000)
    
  }
  e.preventDefault();
}

function displayPost(){
  // get the post div
  const post = document.querySelector('#post');
  post.innerHTML = 
  `<p class = 'alert bg-primary'> Thank you for showing interest. I'll get back to you soonest. </p>`
}
function clearFields(){
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  phone.value = "";
}

// function showAlert(msg, className){
//   this.clearAlert();
//   // create div
//   const div = document.createElement('div');
//   div.className= className;
//   // create text
//   div.appendChild(document.createTextNode(msg));
//   // call parent
//   const container= document.querySelector('.postContainer');
//   // get sibling
//   const posts = document.querySelector('#posts');
//   // insert alert div
//   container.insertBefore(div, posts);

//   // timeout
//   setTimeout(()=> {
//     this.clearAlert()
//   }, 3000)

// }

function  clearAlert(){
  const currentAlert = document.querySelector('.alert');
  if(currentAlert){
    currentAlert.remove();
  }
}