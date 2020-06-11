// http: //flexboxgrid.com/

// JS Pop-up box for email https://www.youtube.com/watch?v=MBaw_6cPmAw
// MailChimp API for sending out emails https://mailchimp.com/developer/guides/get-started-with-mailchimp-api-3/#Authentication_methods
// Mailchimp API https://www.youtube.com/watch?v=Gjk25N7WFkI

// Add a lightbox slideshow when a photo is clicked
// https://www.w3schools.com/howto/howto_js_lightbox.asp

// Variable Declarations
const photos = document.querySelectorAll('.grid-photo');
const postCount = document.getElementById('post-count');
const postCount2 = document.getElementById('post-count-2');
const followButton = document.getElementById('follow-button');
const emailForm = document.getElementById('email-form');
const closeEmailFormButton = document.getElementById('close-email-form');
const body = document.getElementById('body');
const mainSection = document.getElementById('main-section');

// Functions
const onLoad = () => {
    postCount.innerHTML = photos.length;
    postCount2.innerHTML = photos.length;
}

const openEmailForm = () => {
    emailForm.classList.remove('hidden');
    //mainSection.classList.add("dimmer");

}

const closeEmailForm = () => {
    emailForm.classList.add('hidden');
    //mainSection.classList.remove("dimmer");
}

// Event Listeners
// Click Follow Button
followButton.addEventListener('click', openEmailForm);

// Click button to x out of email form
closeEmailFormButton.addEventListener('click', closeEmailForm);

// On Load
onLoad();