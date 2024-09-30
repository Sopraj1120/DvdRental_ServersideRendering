const Users = JSON.parse(localStorage.getItem('users'))
const CheckUsers = JSON.parse(sessionStorage.getItem('OTP'))
console.log(Users)

document.getElementById("form").addEventListener('submit', function (event) {
    event.preventDefault()

    let pass = document.getElementById('password').value
    let repass = document.getElementById('Repassword').value
    if (pass == repass) {
        let ChangePass = Users.find(user => user.Username == CheckUsers.User)
        ChangePass.Password = pass
        localStorage.setItem('users',JSON.stringify(Users))
        window.location.href="./Signin.html"

    }
    else{
        document.getElementById('message').textContent="Yourpassword not matched"
    }

})