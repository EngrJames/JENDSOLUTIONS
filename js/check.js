function validatePhoneNo(pNumberInput)  
   {  
      var phoneNumber = /^[0-9\+]{7,20}$/;  
      return phoneNumber.test(pNumberInput);
   }   

   function validateUsername(nameInput)  
   {
       var name = /^[a-zA-Z0-9\_-]{5,15}$/;
      return name.test(nameInput);
   }
   
   function validateName(nameInput)  
   {
       var name = /^[a-zA-Z\ ]{3,50}$/;
      return name.test(nameInput);
   }   

   function validateAddress(addressInput)  
   {
       var address = /^[a-zA-Z0-9\_@+-. :"!£$%^&*()=<>'#~,?;{}'\[\]\/]{8,200}$/;
      return address.test(addressInput);
   }   

   function validateText(textInput)  
   {
       var text = /^[a-zA-Z0-9\_@+-. :"!£$%^&*()=<>'#~,?;{}\[`\]\/]{5,2000}$/;
      return text.test(textInput);
   }   


function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


function validateForm() {
    var bool=true;
   var x = document.getElementById("form");
   if(x.elements[1].value ==="" || !validateName(x.elements[1].value)){
       bool = false;
       x.elements[1].style.borderColor = "red";
       $(x.elements[1]).focus(function () {
           $(this).css('border-color', '#51cbee');
       });
    $(x.elements[1]).blur(function () {
        $(this).css('border-color', '#ddd');
    });
   }

   if(x.elements[2].value ==="" || !validateAddress(x.elements[2].value)){
       bool = false;
       x.elements[2].style.borderColor = "red";
       $(x.elements[2]).focus(function () {
           $(this).css('border-color', '#51cbee');
       });
    $(x.elements[2]).blur(function () {
        $(this).css('border-color', '#ddd');
    });
   }

   if(!(x.elements[7].checked || x.elements[8].checked)){
       bool = false;
   }

   if (x.elements[7].checked) {
       if (x.elements[3].value === "" || !validatePhoneNo(x.elements[3].value)) {
           bool = false;
           x.elements[3].style.borderColor = "red";
           $(x.elements[3]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[3]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }
   }else  if (!(x.elements[3].value == "" || validatePhoneNo(x.elements[3].value))) {
           bool = false;
           x.elements[3].style.borderColor = "red";
           $(x.elements[3]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[3]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }

   if (x.elements[8].checked) {
       if (x.elements[4].value === "" || !validateEmail(x.elements[4].value)) {
           bool = false;
           x.elements[4].style.borderColor = "red";
           $(x.elements[4]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[4]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }
   }else if (!(x.elements[4].value === "" || validateEmail(x.elements[4].value))) {
           bool = false;
           x.elements[4].style.borderColor = "red";
           $(x.elements[4]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[4]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }

        if (x.elements[5].value === "Message type...") {
           bool = false;
           x.elements[5].style.borderColor = "red";
           $(x.elements[5]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[5]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }

        if (x.elements[6].value === "" || !validateText(x.elements[6].value)) {
           bool = false;
           x.elements[6].style.borderColor = "red";
           $(x.elements[6]).focus(function () {
               $(this).css('border-color', '#51cbee');
           });
           $(x.elements[6]).blur(function () {
               $(this).css('border-color', '#ddd');
           });
       }

       /** if((x.elements[1].value !=="")&& ((x.elements[3].value!=="")||(x.elements[4].value!=="")) 
        &&(x.elements[5].value!=="Message type...")&&(x.elements[6].value!=="")&&((x.elements[7].checked && x.elements[3].value!=="" && validatePhoneNo(x.elements[3].value))
        ||(x.elements[8].checked && x.elements[4].value!=="" && validateEmail(x.elements[4].value))))
        {
            return true;
        }else{
        document.getElementById("warning").innerHTML = "<p style=\"color:red; text-align:center;\">All information must be correct.</p>";
        return false;
        }**/
       return bool;
}

function validateForm1() {
    var bool=true;
   var x = document.getElementById("login");
   if(x.elements[0].value ==="" || !validateUsername(x.elements[0].value)){
       bool = false;
       x.elements[0].style.borderColor = "red";
       $(x.elements[0]).focus(function () {
           $(this).css('border-color', '#51cbee');
       });
    $(x.elements[0]).blur(function () {
        $(this).css('border-color', '#000');
    });
   }
   if(x.elements[1].value ==="" || !validateUsername(x.elements[1].value)){
       bool = false;
       x.elements[1].style.borderColor = "red";
       $(x.elements[1]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[1]).blur(function () {
        $(this).css('border-color', '#000');
    });
   }

        return bool;
}

function validateForm2() {
    var bool=true;
   var x = document.getElementById("regist");
   if(x.elements[0].value =="" || !validateUsername(x.elements[0].value)){
       bool = false;
       x.elements[0].style.borderColor = "red";
       $(x.elements[0]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[0]).blur(function () {
        $(this).css('border-color', '#000');
    });
  }

   if(x.elements[1].value =="" || !validateEmail(x.elements[1].value)){
       bool = false;
       x.elements[1].style.borderColor = "red";
       $(x.elements[1]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[1]).blur(function () {
        $(this).css('border-color', '#000');
    });
  }

  if(x.elements[2].value =="" || !validateUsername(x.elements[2].value)){
       bool = false;
       x.elements[2].style.borderColor = "red";
       $(x.elements[2]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[2]).blur(function () {
        $(this).css('border-color', '#000');
    });
  }else if(x.elements[2].value !== x.elements[3].value){
  bool = false;
  x.elements[3].style.borderColor = "red";
       $(x.elements[3]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[3]).blur(function () {
        $(this).css('border-color', '#000');
    });
  }

  if(x.elements[4].value =="" || !validatePhoneNo(x.elements[4].value)){
       bool = false;
       x.elements[4].style.borderColor = "red";
       $(x.elements[4]).focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $(x.elements[4]).blur(function () {
        $(this).css('border-color', '#000');
    });
  }
        return bool;

}