const contactUsModal = document.querySelector(".modal-contact-us");
const contactUsModalWindow = document.querySelector(".modal-contact-us__wrapper");
const contactUsBtn = document.querySelector("#contactUsBtn");
const modalCloseBtn = document.querySelector(".btn-close");

const modalContactUsClose = () => {
    document.body.style.overflow = 'visible';
    contactUsModal.classList.remove("active");
    contactUsModalWindow.classList.remove("active");
};

if (contactUsModal) {

    contactUsBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactUsModal.classList.add("active");
        contactUsModalWindow.classList.add("active");

        if (contactUsModal.classList.contains("active")) {
            document.body.style.overflow = 'hidden'
        } else {
           document.body.style.overflow = 'visible'
        }
    });

    modalCloseBtn.addEventListener("click", function (e) {
        modalContactUsClose();
    });


    contactUsModal.addEventListener("click", function (event) {
        if (event.target.closest(".modal-contact-us__wrapper")) {
            return;
        }
        else {
            modalContactUsClose();
        }
    });
};
