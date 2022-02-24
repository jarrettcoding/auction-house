async function signupFormHandler(event) {
  event.preventDefault();
  const firstname = document.querySelector("#firstname-signup").value.trim();
  const lastname = document.querySelector("#lastname-signup").value.trim();
  const address = document.querySelector("#address-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (firstname && lastname && address && username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        firstname,
        lastname,
        address,
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);