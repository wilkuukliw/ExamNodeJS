function validateForm() {
    const name = document.forms.applicationSubmit.name.value;
    const email = document.forms.applicationSubmit.email.value;
    const phone = document.forms.applicationSubmit.phone.value;
    const doggo_id = document.forms.applicationSubmit.doggo_id.value;

    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    const numericReg = /^\+?\d*$/


    if (name.length < 2) {
        sweetAlert("Please provide a full name");
        return false;
    }

    if (!emailReg.test(email)) {
        sweetAlert("Wrong e-mail address - please check");
        return false;
    }

    if (phone.length < 6 || phone.length > 12) {
        sweetAlert("Wrong phone number")
        return false;
    }

    if (!numericReg.test(phone)) {
        sweetAlert("Please enter numeric characters only for the phone");
        return false;
    }

    if (!numericReg.test(doggo_id)) {
        sweetAlert("Please enter numeric characters only for the doggo identifier");
        return false;
    }

    return true;
    
}
    