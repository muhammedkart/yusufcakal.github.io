$(document).ready(function(){

    var save = $("#save");
    var alert = $(".alert-danger");
    alert.css("display", "none");
    var fullname = $("#fullname");
    var phone = $("#phone");
    var mail = $("#mail");

    fullname.keypress(function(key){
        if(key.charCode < 48 || key.charCode > 57){ // Girilen değer harf ise
            return true;
        }else{
            alertUsing("Sayı Girilemez.");
            return false; // input'a girilmesine izin verme.
            
        }
    });

    phone.keypress(function(key){
        if(key.charCode > 48 && key.charCode < 57){ // Girilen değer sayı ise
            if(phone.val().length < 12){
                return true;
            }else{
                alertUsing("11 Haneyi Aştınız.");
                return false;
            }
        }else{
            alertUsing("Sayı Giriniz.");
            return false; // input'a girilmesine izin verme.
        }
    });

    save.click(function(){
        
        if(fullname.val() == "" || phone.val() == "" || mail.val() == ""){
            alertUsing("Boş Alan Olamaz.");
        }else if(!validateEmail(mail.val())){
            alertUsing("Mail Adresinizi Kontrol Ediniz.");
        }else{
            $("tbody").
            append("<tr> \
                        <td>" +  fullname.val() + "</td> \
                        <td>" +  phone.val() + "</td> \
                        <td>" +  mail.val() + "</td> \
                        <td>" +  $("input[name=radio]:checked").val() + "</td> \
                        <td> \
                            <button id='edit' class='btn btn-warning'>Düzenle</button> \
                            <button id='delete' class='btn btn-danger'>Sil</button> \
                        </td> \
                    </tr>");
        }

    });

});

function alertUsing(text) {
    var alert = $(".alert-danger");
    alert.fadeIn(400);
    alert.css("display", "block");
    alert.text(text);
    setTimeout(function() {
        alert.fadeOut();
    }, 2000);
  }

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true);
    }else{
        return (false)
    }    
}