async function newFormHandler(event) {
  event.preventDefault();
const form = document.getElementById('form')
const formData = new FormData(form);


   const res = await fetch('api/products',{
     method: 'POST',
     body: formData
   })
   if(res.ok) {
     alert('Thanks For Choosing Auction House')
   } else {
     alert(res.statusText);
   }
}

document
  .querySelector("#form")
  .addEventListener("submit", newFormHandler);
