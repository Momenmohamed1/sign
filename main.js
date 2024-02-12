let fname = document.getElementById('FristName')
let lname = document.getElementById('LastName')
let phone = document.getElementById('phone')
let email = document.getElementById('email')
let password = document.getElementById('password')
let re_password = document.getElementById('re_password')
let creat = document.getElementById('creat')
let datapro = [];
if(localStorage.product != null)
{
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = []
}
creat.onclick = function()
{
    let savedata = {
        fname:fname.value,
        lname:lname.value,
        phone:phone.value,
        email:email.value,
        password:password.value,
        re_password:re_password.value,
    }
    datapro.push(savedata)
    localStorage.setItem('product' , JSON.stringify(datapro))
}
if(datapro == localStorage.product)
{
    console.log('hallo')
}















