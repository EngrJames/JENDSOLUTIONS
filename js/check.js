function validateAllNumeric(inputtxt)  
   {  
      var numbers = /^[0-9]+$/;  
      return numbers.test(inputtxt);
   }   


function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


function validateForm() {
   var x = document.getElementById("form");

   
        if((x.elements[1].value !=="")&& ((x.elements[3].value!=="")||(x.elements[4].value!=="")) 
        &&(x.elements[5].value!=="Message type...")&&(x.elements[6].value!=="")&&((x.elements[7].checked && x.elements[3].value!=="" && validateAllNumeric(x.elements[3].value))
        ||(x.elements[8].checked && x.elements[4].value!=="" && validateEmail(x.elements[4].value))))
        {
            
            
            return true;
        }else{
        document.getElementById("warning").innerHTML = "<p style=\"color:red; text-align:center;\">All information must be correct.</p>";
        return false;
        }
    
}