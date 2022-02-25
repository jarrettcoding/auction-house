async function signupFormHandler(event) {
  event.preventDefault();
  const firstname = document.querySelector("#firstname").value.trim();
  const lastname = document.querySelector("#lastname").value.trim();
  const address = document.querySelector("#address").value.trim();
  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

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
  .querySelector(".signup")
  .addEventListener("submit", signupFormHandler);