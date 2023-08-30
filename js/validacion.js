let forms = document.querySelectorAll('.needs-validation')
let passwordEqual = false;
let prueba = Array.prototype.slice.call(forms);

document.getElementById("password2").addEventListener("input", function(){
  if(this.value == document.getElementById("password1").value){
    this.setCustomValidity("");
  }else{
    this.setCustomValidity("Invalid field.");
  }
});

document.getElementById("terminos").addEventListener("change", function(){
  feedbackCheckbox();
})

function feedbackCheckbox(){
  if(document.getElementById("terminos").checked){
    document.getElementById("terminos").classList.add("is-valid");
    document.getElementById("terminos").classList.remove("is-invalid");
    document.getElementById("linkATerminos").classList.remove("is-invalid");
    document.getElementById("linkATerminos").classList.remove("text-danger");
  }else{
    document.getElementById("terminos").classList.add("is-invalid");
    document.getElementById("terminos").classList.remove("is-valid");
    document.getElementById("linkATerminos").classList.add("is-invalid");
    document.getElementById("linkATerminos").classList.add("text-danger");
  }
  
}

function checkbox(){
  feedbackCheckbox();
  return document.getElementById("terminos").checked;
}

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              console.log("no se hizo")
            }
      form.classList.add('was-validated')
      }, false)
    });