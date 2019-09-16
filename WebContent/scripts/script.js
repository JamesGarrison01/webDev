function verName(name) {
    var nameLen = name.value.length;
    if (nameLen === 0) {
        document.getElementById("validation").innerHTML = "Please Enter A Name";
        name.focus();
        return false;
    }
    return true;
}
function verPhone(phonenum) {
    var phoneLen = phonenum.value.length;
    var letters = /^[0-9]+$/;
    
    if (phoneLen !== 10) {
        document.getElementById("validation").innerHTML = "Phone Number Invalid";
        phonenum.focus();
        return false;
    }
    if(phonenum.value.match(letters)) {
        return true;
    }
    else
    {
        document.getElementById("validation").innerHTML = "Phone Number most contain numbers only";
        return false;
    }
    return true;
}

function verAddress(address) {
    var addressLen = address.value.length;
    if(addressLen > 80){
        document.getElementById("validation").innerHTML = "Address must be less than 80 characters";
        return false;
    }
    return true;
}

function formValidation() {
    document.getElementById("validation").innerHTML = "";
    document.getElementById("verified").innerHTML = "";
    
    var name = document.registration.name;
    var selectClass = document.registration.selectClass;
    var phonenum = document.registration.phonenum;
    var selectClass2 = document.registration.selectClass2;
    var rhFact = document.registration.rhFact;
    var address = document.registration.address;
    
    if(verName(name)) {
        if(verPhone(phonenum)) {
            if(verAddress(address)){
                document.getElementById("validation").innerHTML = ""
                document.getElementById("verified").innerHTML = "User Added"
            }
        }
    }
    
    return false;
}


