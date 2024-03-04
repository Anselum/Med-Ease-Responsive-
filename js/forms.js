const serviceID = 'service_8k2u11u';
const contact_templateID = 'template_trp24nc';

let contact_name = document.getElementById('contact_name');
let contact_email = document.getElementById('contact_email');
let contact_phone = document.getElementById('contact_phone');
let contact_msg = document.getElementById('contact_msg');

let appointment_name = document.getElementById('appointment_name');
let appointment_age = document.getElementById('appointment_age');
let appointment_phone = document.getElementById('appointment_phone');
let appointment_time = document.getElementById('appointment_time');
let appointment_msg = document.getElementById('appointment_msg');

let contact_button = document.getElementById('contact-submit');
let appointment_button = document.getElementById('appointment-submit');

function ContactForm() {

    let contact_param = {
        form_name: contact_name.value,
        form_email: contact_email.value,
        form_phone: contact_phone.value,
        form_msg: contact_msg.value,
    }

    try {
        emailjs.send(serviceID, contact_templateID, contact_param).then(
            (response) => {
                alert("Success!");
            },
            (error) => {
                alert("Failed!");
            },
        );
    } catch (e) {
    }
}


function AppointmentForm() {

    let appointment_param = {
        form_name: appointment_name.value,
        form_age: appointment_age.value,
        form_phone: appointment_phone.value,
        form_time: appointment_time.value,
        form_msg: appointment_msg.value,
    }

    try {
        emailjs.send(serviceID, contact_templateID, appointment_param).then(
            (response) => {
                alert("Success!");
            },
            (error) => {
                alert("Failed!");
            },
        );
    } catch (e) {
    }
}


