function sendEmail() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:siddiquishoeb7000@gmail.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nMessage: " + message);

    window.location.href = mailtoLink;
}