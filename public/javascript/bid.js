async function bidFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const price = document.querySelector('#bid').value.trim();
    const res = await fetch(`/api/products/${id}`,{
        method: 'PUT',
        body:JSON.stringify({
            price
        }),
        headers: {
         'Content-Type': 'application/json'
        }
    });
    if(res.ok) {
        document.location.reload();
    } else {
        alert(res.statusText);
    }
  
  }
  
  document.querySelector('.bid-form').addEventListener('submit', bidFormHandler);


  