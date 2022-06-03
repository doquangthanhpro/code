function searchTable(products, value) {
    let content = "";
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        if (value == item.id || value == item.name) {
            content += `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.name}</td>
                                <td>${item.description}</td>
                                <td>${item.price}</td>
                                <td><img class="img-sp" src="${item.image}" alt="lỗi ảnh"></td>
                                <td>
                                    <button onclick='onEdit(${item.id})' type="button" class="btn btn-primary">edit</button>
                                    <button onclick='onRemove(${item.id})' type="button" class="btn btn-danger">remove</button>
                                    <a class="btn-view" href="../../../../src/components/products_detail/products.html?id=${item.id}">xem</a>
                                  
                                </td>
                            </tr>
                        `;
        }
    }


    document.getElementById("tableBody").innerHTML = content;
}
renderTable(store.getProduct());

document.getElementById("search-btn").addEventListener("click", function (e) {
    let value = document.getElementById("search-item").value;
    searchTable(store.getProduct(), value);
});

document.getElementById("resert").addEventListener("click", function (e) {
    renderTable(store.getProduct());
});