window.addEventListener("load", function(event) {
    // lấy ra query string from url
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    if (id) {
        const product = store.getById(id);
        if (product) {
            document.getElementById('image').src = product.image
            document.getElementById('price').textContent = 'Giá :  ' + product.price + 'đ'
            document.getElementById('product-name').textContent = product.name
            document.getElementById('description').textContent = product.description
        }
    }
})