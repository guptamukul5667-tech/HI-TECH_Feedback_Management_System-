```javascript
/* =========================================================
   HITECH INSTITUTE
   FEEDBACK MANAGEMENT SYSTEM
   CUSTOM JAVASCRIPT
   ========================================================= */


/* =========================================================
   GLOBAL VARIABLES
   ========================================================= */

let selectedRole = "";
let selectedRating = 0;


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


/* =========================================================
   SET LOGIN ROLE
   ========================================================= */

function setRole(role) {

    selectedRole = role;

    const title = document.getElementById("loginModalTitle");

    if (!title) {
        return;
    }


    if (role === "student") {

        title.innerHTML =
            '<i class="bi bi-person text-primary me-2"></i>' +
            'Student Login';

    }

    else if (role === "teacher") {

        title.innerHTML =
            '<i class="bi bi-person-workspace text-success me-2"></i>' +
            'Faculty Login';

    }

    else if (role === "admin") {

        title.innerHTML =
            '<i class="bi bi-shield-lock text-dark me-2"></i>' +
            'Admin Login';

    }

}


/* =========================================================
   LOGIN
   ========================================================= */

function executeLogin() {

    const loginId =
        document.getElementById("loginId").value.trim();

    const loginPass =
        document.getElementById("loginPass").value.trim();


    if (loginId === "") {

        alert("Please enter your User ID or Email.");

        return;
    }


    /*
        Demo mode:
        Any User ID is accepted.
    */

    showDashboard();

}


/* =========================================================
   SHOW DASHBOARD
   ========================================================= */

function showDashboard() {

    const sidebar =
        document.getElementById("sidebarContainer");

    const dashboard =
        document.getElementById("dashboardMainContent");


    if (!sidebar || !dashboard) {
        return;
    }


    sidebar.style.display = "block";
    dashboard.style.display = "block";


    document.body.classList.add("dashboard-mode");


    /*
        Hide normal website sections
    */

    const elementsToHide = [
        document.querySelector("nav"),
        document.getElementById("heroSection"),
        document.getElementById("featuresSection"),
        document.getElementById("feedbackSection"),
        document.querySelector(".profile-section"),
        document.querySelector("footer")
    ];


    elementsToHide.forEach(element => {

        if (element) {
            element.style.display = "none";
        }

    });


    updateDashboard();
}


/* =========================================================
   UPDATE DASHBOARD
   ========================================================= */

function updateDashboard() {

    const title =
        document.getElementById("sidebarPortalTitle");

    const links =
        document.getElementById("sidebarLinksList");

    const content =
        document.getElementById("dashboardMainContent");


    if (!links || !content) {
        return;
    }


    let portalTitle = "Dashboard";


    if (selectedRole === "student") {
        portalTitle = "Student Portal";
    }

    else if (selectedRole === "teacher") {
        portalTitle = "Faculty Portal";
    }

    else if (selectedRole === "admin") {
        portalTitle = "Admin Portal";
    }


    if (title) {
        title.textContent = portalTitle;
    }


    /* =====================================================
       STUDENT DASHBOARD
       ===================================================== */

    if (selectedRole === "student") {

        links.innerHTML = `

            <a href="#" class="sidebar-link active">
                <i class="bi bi-speedometer2 me-3"></i>
                Dashboard
            </a>

            <a href="#studentFeedback" class="sidebar-link">
                <i class="bi bi-send me-3"></i>
                Give Feedback
            </a>

            <a href="#studentHistory" class="sidebar-link">
                <i class="bi bi-clock-history me-3"></i>
                My Feedback
            </a>

            <a href="#studentProfile" class="sidebar-link">
                <i class="bi bi-person me-3"></i>
                Profile
            </a>

        `;


        content.innerHTML = `

            <div class="container-fluid">

                <div class="mb-4">

                    <h2 class="fw-bold">
                        Student Dashboard
                    </h2>

                    <p class="text-muted">
                        Welcome to the Hitech Institute feedback portal.
                    </p>

                </div>


                <div class="row g-4">

                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-star-fill fs-1 text-warning"></i>

                            <h3 class="fw-bold mt-3">
                                4.7 / 5
                            </h3>

                            <p class="text-muted mb-0">
                                Average Campus Rating
                            </p>

                        </div>

                    </div>


                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-send-fill fs-1 text-primary"></i>

                            <h3 class="fw-bold mt-3">
                                12
                            </h3>

                            <p class="text-muted mb-0">
                                Feedback Submitted
                            </p>

                        </div>

                    </div>


                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-check-circle-fill fs-1 text-success"></i>

                            <h3 class="fw-bold mt-3">
                                Active
                            </h3>

                            <p class="text-muted mb-0">
                                Student Account
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }


    /* =====================================================
       FACULTY DASHBOARD
       ===================================================== */

    else if (selectedRole === "teacher") {

        links.innerHTML = `

            <a href="#" class="sidebar-link active">
                <i class="bi bi-speedometer2 me-3"></i>
                Dashboard
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-bar-chart me-3"></i>
                Feedback Analytics
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-chat-square-text me-3"></i>
                Student Comments
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-person me-3"></i>
                Faculty Profile
            </a>

        `;


        content.innerHTML = `

            <div class="container-fluid">

                <div class="mb-4">

                    <h2 class="fw-bold">
                        Faculty Dashboard
                    </h2>

                    <p class="text-muted">
                        View your teaching performance and student feedback.
                    </p>

                </div>


                <div class="row g-4">

                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-star-fill fs-1 text-warning"></i>

                            <h3 class="fw-bold mt-3">
                                4.8 / 5
                            </h3>

                            <p class="text-muted mb-0">
                                Overall Rating
                            </p>

                        </div>

                    </div>


                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-people-fill fs-1 text-primary"></i>

                            <h3 class="fw-bold mt-3">
                                128
                            </h3>

                            <p class="text-muted mb-0">
                                Student Responses
                            </p>

                        </div>

                    </div>


                    <div class="col-md-4">

                        <div class="card-glass p-4">

                            <i class="bi bi-graph-up-arrow fs-1 text-success"></i>

                            <h3 class="fw-bold mt-3">
                                92%
                            </h3>

                            <p class="text-muted mb-0">
                                Teaching Performance
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }


    /* =====================================================
       ADMIN DASHBOARD
       ===================================================== */

    else {

        links.innerHTML = `

            <a href="#" class="sidebar-link active">
                <i class="bi bi-speedometer2 me-3"></i>
                Dashboard
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-people me-3"></i>
                Students
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-person-workspace me-3"></i>
                Faculty
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-chat-left-text me-3"></i>
                Feedback
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-bar-chart-line me-3"></i>
                Analytics
            </a>

            <a href="#" class="sidebar-link">
                <i class="bi bi-gear me-3"></i>
                Settings
            </a>

        `;


        content.innerHTML = `

            <div class="container-fluid">

                <div class="mb-4">

                    <h2 class="fw-bold">
                        Administrator Dashboard
                    </h2>

                    <p class="text-muted">
                        Manage institute feedback and academic performance.
                    </p>

                </div>


                <div class="row g-4">

                    <div class="col-md-3">

                        <div class="card-glass p-4">

                            <i class="bi bi-chat-square-text fs-1 text-primary"></i>

                            <h3 class="fw-bold mt-3">
                                2,410
                            </h3>

                            <p class="text-muted mb-0">
                                Total Feedback
                            </p>

                        </div>

                    </div>


                    <div class="col-md-3">

                        <div class="card-glass p-4">

                            <i class="bi bi-people fs-1 text-success"></i>

                            <h3 class="fw-bold mt-3">
                                1,850
                            </h3>

                            <p class="text-muted mb-0">
                                Active Students
                            </p>

                        </div>

                    </div>


                    <div class="col-md-3">

                        <div class="card-glass p-4">

                            <i class="bi bi-person-workspace fs-1 text-warning"></i>

                            <h3 class="fw-bold mt-3">
                                60+
                            </h3>

                            <p class="text-muted mb-0">
                                Faculty Members
                            </p>

                        </div>

                    </div>


                    <div class="col-md-3">

                        <div class="card-glass p-4">

                            <i class="bi bi-star-fill fs-1 text-info"></i>

                            <h3 class="fw-bold mt-3">
                                4.7
                            </h3>

                            <p class="text-muted mb-0">
                                Average Rating
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutPortal() {

    selectedRole = "";

    const sidebar =
        document.getElementById("sidebarContainer");

    const dashboard =
        document.getElementById("dashboardMainContent");


    if (sidebar) {
        sidebar.style.display = "none";
    }

    if (dashboard) {
        dashboard.style.display = "none";
    }


    /*
        Show normal website again
    */

    const elementsToShow = [
        document.querySelector("nav"),
        document.getElementById("heroSection"),
        document.getElementById("featuresSection"),
        document.getElementById("feedbackSection"),
        document.querySelector(".profile-section"),
        document.querySelector("footer")
    ];


    elementsToShow.forEach(element => {

        if (element) {
            element.style.display = "";
        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   STAR RATING
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const stars =
        document.querySelectorAll(".rating-star");

    const ratingInput =
        document.getElementById("ratingValue");

    const ratingText =
        document.getElementById("ratingText");


    stars.forEach(star => {

        star.addEventListener("click", function () {

            selectedRating =
                parseInt(this.dataset.val);


            if (ratingInput) {
                ratingInput.value = selectedRating;
            }


            stars.forEach(item => {

                const value =
                    parseInt(item.dataset.val);

                if (value <= selectedRating) {
                    item.classList.add("active");
                }

                else {
                    item.classList.remove("active");
                }

            });


            if (ratingText) {

                const messages = {
                    1: "Very Poor",
                    2: "Needs Improvement",
                    3: "Average",
                    4: "Good",
                    5: "Excellent"
                };

                ratingText.textContent =
                    messages[selectedRating];

            }

        });

    });


    /* =====================================================
       RANGE SLIDERS
       ===================================================== */

    setupSlider("tq", "tqVal");
    setupSlider("pun", "punVal");
    setupSlider("doubt", "doubtVal");


    /* =====================================================
       FEEDBACK FORM
       ===================================================== */

    const feedbackForm =
        document.getElementById("feedbackForm");


    if (feedbackForm) {

        feedbackForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (selectedRating === 0) {

                    alert("Please select an overall rating.");

                    return;
                }


                const department =
                    document.getElementById("dept").value;

                const semester =
                    document.getElementById("sem").value;

                const faculty =
                    document.getElementById("teacherSelect").value;

                const subject =
                    document.getElementById("subject").value.trim();

                const comments =
                    document.getElementById("feedbackText").value.trim();


                if (
                    department === "" ||
                    semester === "" ||
                    faculty === "" ||
                    subject === "" ||
                    comments === ""
                ) {

                    alert(
                        "Please complete all required fields."
                    );

                    return;
                }


                /*
                    Demo submission
                */

                alert(
                    "Thank you! Your feedback has been submitted successfully."
                );


                feedbackForm.reset();


                selectedRating = 0;


                stars.forEach(star => {
                    star.classList.remove("active");
                });


                if (ratingInput) {
                    ratingInput.value = "";
                }


                if (ratingText) {
                    ratingText.textContent =
                        "Select your rating";
                }


                /*
                    Reset slider display values
                */

                resetSlider("tq", "tqVal", 8);
                resetSlider("pun", "punVal", 9);
                resetSlider("doubt", "doubtVal", 8);

            }
        );

    }

});


/* =========================================================
   SLIDER FUNCTION
   ========================================================= */

function setupSlider(sliderId, valueId) {

    const slider =
        document.getElementById(sliderId);

    const value =
        document.getElementById(valueId);


    if (!slider || !value) {
        return;
    }


    slider.addEventListener("input", function () {

        value.textContent = this.value;

    });

}


/* =========================================================
   RESET SLIDER
   ========================================================= */

function resetSlider(sliderId, valueId, defaultValue) {

    const slider =
        document.getElementById(sliderId);

    const value =
        document.getElementById(valueId);


    if (slider) {
        slider.value = defaultValue;
    }

    if (value) {
        value.textContent = defaultValue;
    }

}
```