
    function validateform(){
        var name=document.myform.name.value;
        var password=document.myform.password.value;

        if ( name==null || name=="") {
            alert ("Name Can't be blank");
            return fales;
        }   
            else if (password.length<6){
            alert("The Password must be atleast 6 character");
            return fales;
        
        }

    }
