function send(event){

    var name = document.querySelector('[name="name"]');
    var surname = document.querySelector('[name="surname"]');
    var phone = document.querySelector('[name="phone"]');
    var email = document.querySelector('[name="email"]');
    var tc = document.querySelector('[name="tc"]');
    var address = document.querySelector('[name="address"]');
    
    if(name.value && surname.value && phone.value && email.value && tc.value && address.value){
        debugger;
        validate();
    }else{
        alert("Boş alan bırakmayınız.");
    }
}

function isNumber(event){
    if(event.charCode >= 48 && event.charCode <= 57){
        return true;
    }else{
        return false;
    }
}

function validate() {
  var email = document.querySelector('[name="email"]').value;
  if (validateEmail(email)) {
      //Valid Email
  } else {
        alert("email yanlış");
  }
  return false;
}

function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}