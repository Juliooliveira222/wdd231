const params =
    new URLSearchParams(window.location.search);

document.querySelector("#fname").textContent =
    params.get("fname") || "";

document.querySelector("#lname").textContent =
    params.get("lname") || "";

document.querySelector("#email").textContent =
    params.get("email");

document.querySelector("#phone").textContent =
    params.get("phone");

document.querySelector("#organization").textContent =
    params.get("organization");

document.querySelector("#timestamp").textContent =
    params.get("timestamp");