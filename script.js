document.addEventListener("DOMContentLoaded", () => {
    // 1. Lightbox functionality for images
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const triggers = document.querySelectorAll(".lightbox-trigger");
    const closeBtn = document.querySelector(".close-modal");

    if (modal) {
        triggers.forEach(img => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    // 2. Order Form Validation & Submission simulation
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const meal = document.getElementById("meal-select").value;
            const feedback = document.getElementById("form-feedback");

            if (name === "" || phone === "" || meal === "") {
                alert("Please fill in all required fields.");
                return;
            }

            feedback.textContent = `Thank you, ${name}! Your order for ${meal} has been received and sent successfully.`;
            orderForm.reset();
        });
    }

    // 3. Contact Form Validation & Submission simulation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const cName = document.getElementById("contact-name").value.trim();
            const cEmail = document.getElementById("contact-email").value.trim();
            const cMsg = document.getElementById("contact-msg").value.trim();
            const cFeedback = document.getElementById("contact-feedback");

            if (cName === "" || cEmail === "" || cMsg === "") {
                alert("Please fill out all contact fields.");
                return;
            }

            cFeedback.textContent = `Thank you ${cName}, your message has been sent successfully!`;
            contactForm.reset();
        });
    }
});