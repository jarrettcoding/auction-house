async function bidFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const res = await fetch(`/api/products/${id}`,) 
    .then((res)=>{
        if(res.ok){
            res.json().then((data)=>{
                getPrice(data);
            });
        }else{
            alert(res.statusText)
        }
    })
    
    getPrice = (data) =>{
    let oldPrice = data.price
        bid(oldPrice);
    }

}
async function bid(data) {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    
    const price = document.querySelector('#bid').value.trim();
    let oldPrice = data;
    console.log(oldPrice);
    if(oldPrice > price || oldPrice === price){
        alert('Bidding value must be more than the current bid value 😔 ')
    } else {
    const res = await fetch(`/api/products/${id}`,{
        method: 'put',
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
}
  document.querySelector('.bid-form').addEventListener('submit', bidFormHandler);

