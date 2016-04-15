function validatePhoneNo(pNumberInput)  
   {  
      var phoneNumber = /^[0-9\+]{7,20}$/;  
      return phoneNumber.test(pNumberInput);
   }   

   function validateName(nameInput)  
   {
       var name = /^[a-zA-Z0-9\_-]{5,15}$/;
      return name.test(nameInput);
   }   


function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


function validateForm() {
   var x = document.getElementById("form");
        if((x.elements[1].value !=="")&& ((x.elements[3].value!=="")||(x.elements[4].value!=="")) 
        &&(x.elements[5].value!=="Message type...")&&(x.elements[6].value!=="")&&((x.elements[7].checked && x.elements[3].value!=="" && validatePhoneNo(x.elements[3].value))
        ||(x.elements[8].checked && x.elements[4].value!=="" && validateEmail(x.elements[4].value))))
        {
            return true;
        }else{
        document.getElementById("warning").innerHTML = "<p style=\"color:red; text-align:center;\">All information must be correct.</p>";
        return false;
        }
}

function validateForm1() {
    var bool=true;
   var x = document.getElementById("login");
   if(x.elements[0].value ==="" || !validateName(x.elements[0].value)){
       bool = false;
       document.getElementById("name").style.borderColor = "red";
       $("#name").focus(function () {
        $(this).css('border-color', '#51cbee');
    $("#name").blur(function () {
        $(this).css('border-color', '#000');
    });
   }
   if(x.elements[1].value ==="" || !validateName(x.elements[1].value)){
       bool = false;
       document.getElementById("password").style.borderColor = "red";
       $("#password").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#password").blur(function () {
        $(this).css('border-color', '#000');
    });
   }

  /** // select all desired input fields and attach tooltips to them
      $("#login :input").tooltip({
 
      // place tooltip on the left edge
      position: "center left",
      
      // a little tweaking of the position
      offset: [-2, 10],
 
      // use the built-in fadeIn/fadeOut effect
      effect: "fade",
 
      // custom opacity setting
      opacity: 0.6
 
      });**/
        return bool;
}

function validateForm2() {
    var bool=true;
   var x = document.getElementById("regist");
   if(x.elements[0].value =="" || !validateName(x.elements[0].value)){
       bool = false;
       document.getElementById("namee").style.borderColor = "red";
       $("#namee").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#namee").blur(function () {
        $(this).css('border-color', '#000');
    });
  }

   if(x.elements[1].value =="" || !validateEmail(x.elements[1].value)){
       bool = false;
       document.getElementById("email").style.borderColor = "red";
       $("#email").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#email").blur(function () {
        $(this).css('border-color', '#000');
    });
  }

  if(x.elements[2].value =="" || !validateName(x.elements[2].value)){
       bool = false;
       document.getElementById("password1").style.borderColor = "red";
       $("#password1").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#password1").blur(function () {
        $(this).css('border-color', '#000');
    });
  }else if(x.elements[2].value !== x.elements[3].value){
  bool = false;
  document.getElementById("password2").style.borderColor = "red";
       $("#password2").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#password2").blur(function () {
        $(this).css('border-color', '#000');
    });
  }

  if(x.elements[4].value =="" || !validatePhoneNo(x.elements[4].value)){
       bool = false;
       document.getElementById("phone").style.borderColor = "red";
       $("#phone").focus(function () {
        $(this).css('border-color', '#51cbee');
    });
    $("#phone").blur(function () {
        $(this).css('border-color', '#000');
    });
  }
   
        return bool;
}