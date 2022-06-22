/**
 * thông tin từ form
 * name, username, password, email, role
 */

class User {
    constructor(name, username, email, password, role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    xuatThongTin() {
        console.log(`Name: ${this.name}`);
        console.log(`Username: ${this.username}`);
        console.log(`Password: ${this.password}`);
        console.log(`Email: ${this.email}`);
        console.log(`Role: ${this.role}`);
    }
}

class StoreUsers {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        /**
         * tk tồn tại nếu có username thì không thêm vào
         */
        //c1
        let check = false;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getUsername() === user.getUsername()) {
                return check;
            }
        }
        if (!check) {
            this.users.push(user);
            check = true;
            return check;
        }
        //c2
        // const isExist = this.users.filter(currentUser =>
        //   currentUser.getUsername() === user.getUsername())
        //   console.log('isExist',isExist)
        //c3
        //  const isExist = this.users.find(currentUser =>
        // currentUser.getUsername() === user.getUsername())
        // console.log('isExist',isExist)
    }
    login(username, password) {
        let user = null;
        for (let i = 0; i < this.users.length; i++) {
            if (
                this.users[i].getUsername() === username &&
                this.users[i].getPassword() === password
            ) {
                user = this.users[i];
            }
        }
        return user;
    }
    getListUsers() {
        return this.users;
    }
    save() {
        const data = JSON.stringify(this.users);

        localStorage.setItem("users", data);
    }

    getData() {
        const data = localStorage.getItem("users");
        if (data) {
            const arrUser = JSON.parse(data);
            const listUsers = [];
            for (let i = 0; i < arrUser.length; i++) {
                const UserTemp = new User(
                    arrUser[i].name,
                    arrUser[i].username,
                    arrUser[i].email,
                    arrUser[i].password,
                    arrUser[i].role
                );
                listUsers.push(UserTemp);
            }
            this.users = listUsers;
        }
    }
}

const listUsers = new StoreUsers();
// const user1 = new User('A', 'admin', '123456', 'admin@gmail.com', 'admin')
// const user2 = new User('A', 'admin1', '123456', 'admin@gmail.com', 'admin')
// listUsers.addUser(user1)
// listUsers.addUser(user2)
// console.log(listUsers)
// console.log(listUsers.getListUsers())
// console.log(listUsers.login('admin', '12345'))
// for(let i=0; i<listUsers.getListUsers().length; i++){
//   listUsers.getListUsers()[i].xuatThongTin()
// }
listUsers.getData();
console.log(listUsers);

document.querySelector("#frmDangKy") &&
    document.querySelector("#frmDangKy").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const tenTaiKhoan = document.querySelector("#username").value;
        const email = document.querySelector("#email").value;
        const matKhau = document.querySelector("#password").value;
        const role = document.querySelector("#role").value;
        let xacNhan0 = true;
        let xacNhan1 = true;
        let xacNhan2 = true;
        let xacNhan3 = true;
        let xacNhan4 = true;

        if (name.length === 0) {
            document.querySelector(
                ".error-name"
            ).innerHTML = `Tên tài khoản không được để trống`;
            document.querySelector("#name").classList.add("border-red");
            xacNhan0 = false;
        } else {
            document.querySelector(".error-name").innerHTML = ``;
            document.querySelector("#name").classList.remove("border-red");
            xacNhan0 = true;
        }

        if (tenTaiKhoan.length === 0) {
            document.querySelector(
                ".error-user"
            ).innerHTML = `Tên tài khoản không được để trống`;
            document.querySelector("#username").classList.add("border-red");
            xacNhan1 = false;
        } else {
            document.querySelector(".error-user").innerHTML = ``;
            document.querySelector("#username").classList.remove("border-red");
            xacNhan1 = true;
        }

        if (email.length === 0) {
            document.querySelector(
                ".error-email"
            ).innerHTML = `Email không được để trống`;
            document.querySelector("#email").classList.add("border-red");
            xacNhan2 = false;
        } else if (!email.includes("@gmail.com")) {
            document.querySelector(".error-email").innerHTML = `Lỗi cuốn pháp`;
            document.querySelector("#email").classList.add("border-red");
            xacNhan2 = false;
        } else {
            document.querySelector(".error-email").innerHTML = ``;
            document.querySelector("#email").classList.remove("border-red");
            xacNhan2 = true;
        }

        if (matKhau.length == 0) {
            document.querySelector(
                ".error-password"
            ).innerHTML = `Mất khẩu không được để trống`;
            document.querySelector("#password").classList.add("border-red");
            xacNhan3 = false;
        } else {
            document.querySelector(".error-password").innerHTML = ``;
            document.querySelector("#password").classList.remove("border-red");
            xacNhan3 = true;
        }

        // let roleItem = role.options[role.selectedIndex].text;
        console.log(role);
        if (role != "select role") {
            xacNhan4 = true;
            document.querySelector(".error-role").innerHTML = ``;
            document.querySelector("#role").classList.remove("border-red");
        } else {
            xacNhan4 = false;
            document.querySelector(".error-role").innerHTML = `Hãy chọn một role`;
            document.querySelector("#role").classList.add("border-red");
        }
        //
        if (
            xacNhan0 == true &&
            xacNhan1 == true &&
            xacNhan2 == true &&
            xacNhan3 == true &&
            xacNhan4 == true
        ) {
            const createUser = new User(name, tenTaiKhoan, email, matKhau, role);
            const isCheck = listUsers.addUser(createUser);
            console.log("isCheck", isCheck);
            if (isCheck) {
                listUsers.save();
                document.querySelector(
                    ".success"
                ).innerHTML = `Đăng ký thành công`;
                setTimeout(() => {
                    window.location = "../../../../src/components/auth/logins.html";
                }, 1000);
            } else {
                document.querySelector(
                    ".error-user"
                ).innerHTML = `Tên đăng nhập đã tồn tại`;
                document.querySelector("#username").classList.add("border-red");
                xacNhan1 = false;
            }
        }
        //
    });

document.querySelector("#frmLogin") &&
    document.querySelector("#frmLogin").addEventListener("submit", function (e) {
        e.preventDefault();

        const username1 = document.querySelector("#username").value;
        const password1 = document.querySelector("#password").value;
        let xacNhan1 = true;
        let xacNhan2 = true;
        // document.querySelector('.admin-user').innerHTML = username1



        if (username1.length === 0) {
            docu=ent.querySelector(
                ".error-user"
            ).innerHTML = `Tên tài khoản không được để trống`;
            document.querySelector("#username").classList.add("border-red");
            xacNhan1 = false;
        } else {
            document.querySelector(".error-user").innerHTML = ``;
            document.querySelector("#username").classList.remove("border-red");
            xacNhan1 = true;
        }

        if (password1.length == 0) {
            document.querySelector(
                ".error-password"
            ).innerHTML = `Mất khẩu không được để trống`;
            document.querySelector("#password").classList.add("border-red");
            xacNhan2 = false;
        } else {
            document.querySelector(".error-password").innerHTML = ``;
            document.querySelector("#password").classList.remove("border-red");
            xacNhan2 = true;
        }

        if (!(username1 === "" || password1 === "")) {
            // listUsers.getData()
            const isLogin = listUsers.login(username1, password1);
            console.log("login", isLogin);
            if (isLogin) {
                document.querySelector(
                    ".success"
                ).innerHTML = `Đăng nhập thành công `;
                setTimeout(() => {
                    if (isLogin.getRole() == "admin") {
                        window.location = "../../../../src/components/home_admin/homes_amin.html";

                    } else if (isLogin.getRole() == "user") {
                        window.location = "../../../../src/components/home_users/home_users.html";
                    }
                }, 1000);
            } else {
                document.querySelector(
                    ".error-password"
                ).innerHTML = `Tên tài khoản hoặc mật khẩu không đúng`;
            }
            // listUsers.save();
        }
    });