let productsHTML = ''
$.ajax({
    url: "https://api.airtable.com/v0/appMFhQYk3enF4dBV/Products",
    method: "GET",
    headers: {
        Authorization: "Bearer key8t1xm4Q4SxZklw"
    },
    success: function (data) {
        //console.log(data)
        data.records.forEach(product => {
            console.log("product log: ", product);
            if (Object.keys(product.fields).length !== 0 ) {
                productsHTML += `
                <div class="mx-3">
                    <div class="card" style="width: 18rem;">
                       <img src="${product.fields.Picture[0].url}" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">${product.fields.Product}</h5>
                                <p class="card-text">${product.fields.Description}</p>
                                <a href="#" class="btn btn-info">RM${product.fields.Price}</a>
                            </div>
                    </div>
                </div>
                `
            }
        })
        $('#product-container').html(productsHTML)
    }
})