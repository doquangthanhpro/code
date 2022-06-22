class Product {
    constructor(id, name, price, description, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}
class StoreProduct {
    constructor() {
        this.products = [];
    }
    add(product) {
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                return false;
            }
        }
        this.products.push(product);
        return true;
    }
    update(product) {
        // let vt = -1;
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id === product.id) {
                this.products[i] = product;
                return true;
            }
        }
        return false;
    }

    getById(id) {
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                return currentProduct;
            }
        }
        return null;
    }

    remove(id) {
        console.log(this.products);
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            if (currentProduct.id == id) {
                this.products.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    save() {
        if (this.products.length >= 0) {
            const data = JSON.stringify(this.products);
            localStorage.setItem("products", data);
        }
    }

    getData() {
        const data = JSON.parse(localStorage.getItem("products"));
        if (data) {
            const listProduct = [];
            for (let i = 0; i < data.length; i++) {
                const user = new Product(
                    data[i].id,
                    data[i].name,
                    data[i].price,
                    data[i].description,
                    data[i].image
                );
                listProduct.push(user);
            }
            this.products = listProduct;
        }
    }


    getProduct() {
        return this.products;
    }
}

store = new StoreProduct();
store.getData();
// const Users = store.getUsers();




function renderTable(products) {
    let content = "";
    let content2 = "";
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        // content += `
        //                 <tr>
        //                     <td>${item.id}</td>
        //                     <td>${item.name}</td>
        //                     <td>${item.description}</td>
        //                     <td>${item.price}</td>
        //                     <td><img class="img-sp" src="${item.image}" alt="lỗi ảnh"></td>
        //                     <td>
        //                         <button onclick='onEdit(${item.id})' type="button" class="btn btn-primary">edit</button>
        //                         <button onclick='onRemove(${item.id})' type="button" class="btn btn-danger">remove</button>
        //                     </td>
        //                 </tr>
        //             `;
        content2 +=
            `
            <a class="btn-view" href="../../../../src/components/products_detail/products.html?id=${item.id}">
            
            <div class="box-item t-al blur-ef img-zoom">
            <div class="img-zoom-box">
                <img class="img-item-2" src="${item.image}" alt="lỗi ảnh">
            </div>
            <div class="pdg-2">
                <a class="tx-14" href="#">${item.name}</a>
                 <div class="list"> 
                 <img src="../../../src/public/img/star.png" alt="" /> 
                 <img src="../../../src/public/img/star.png" alt="" />
                 <img src="../../../src/public/img/star.png" alt="" />
                 <img src="../../../src/public/img/star.png" alt="" /></div>
                 </div>
                <div class="t-al pdg-min">

                    <p class="price">$${item.price}</p>
                  
                </div>
            </div>
        </div>
            
            
            </a>
     
        `
    }
    // document.getElementById("tableBody").innerHTML = content;
    document.getElementById("container-item").innerHTML = content2;
}
renderTable(store.getProduct());

// document.getElementById("frmProductCreate").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const id = document.getElementById("id").value;
//     const name = document.getElementById("name").value;
//     const price = document.getElementById("price").value;
//     const description = document.getElementById("description").value;
//     const image = document.getElementById("image").value;
//     if (
//         id === "" ||
//         name === "" ||
//         price === "" ||
//         description === "" ||
//         image === ""
//     ) {
//         alert("Vui lòng nhập đầy đủ thông tin");
//         return;
//     } else {
//         const product = new Product(id, name, price, description, image);
//         const isCreate = store.add(product);
//         if (isCreate) {
//             alert("Thêm thành công");
//             store.save();
//             renderTable(store.getProduct());
//         } else {
//             alert("Thêm thất bại");
//         }
//     }
// });

// function onRemove(id) {
//     const isRemove = store.remove(id);
//     if (isRemove) {
//         alert("Xóa thành công");
//         store.save();
//         renderTable(store.getProduct());
//     } else {
//         alert("Xóa thất bại");
//     }
// }

// function onEdit(id) {
//     var myModal = new bootstrap.Modal(
//         document.getElementById("modalProductEdit"), {
//             keyboard: false,
//         }
//     );

//     // get detail
//     const product = store.getById(id);
//     document.getElementById("prodId").value = product.id;
//     document.getElementById("prodName").value = product.name;
//     document.getElementById("prodPrice").value = product.price;
//     document.getElementById("prodDescription").value = product.description;
//     document.getElementById("prodImage").value = product.image;
//     myModal.show();
// }

// document
//     .getElementById("frmProductEdit")
//     .addEventListener("submit", function(event) {
//         event.preventDefault();
//         const id = document.getElementById("prodId").value;
//         const name = document.getElementById("prodName").value;
//         const price = document.getElementById("prodPrice").value;
//         const description = document.getElementById("prodDescription").value;
//         const image = document.getElementById("prodImage").value;
//         if (
//             id === "" ||
//             name === "" ||
//             description === "" ||
//             image === "" ||
//             price === ""
//         ) {
//             alert("Vui lòng nhập đầy đủ thông tin");
//             return;
//         } else {
//             const product = new Product(id, name, price, description, image);
//             const isUpdate = store.update(product);
//             if (isUpdate) {
//                 alert("cập nhật  thành công");
//                 store.save();
//                 renderTable(store.getProduct());
//             } else {
//                 alert("cập nhật thất bại");
//             }
//         }
//     });
function dragStart(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}