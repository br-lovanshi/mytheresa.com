


// signup code

var arr = JSON.parse(localStorage.getItem("userDetails")) || []

var btn=document.getElementById('signbtn')
btn.addEventListener('click',myfunc)

function myfunc(event){
    event.preventDefault(); 
    userDetails = null 
    var obj = {
        Ms:Ms.value,
        Mrs:Mrs.value,
        Mr:Mr.value,
        select:select.value,
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }
    arr.push(obj)
// console.log(arr)
localStorage.setItem("userDetails",JSON.stringify(arr))
window.location.reload()
}




//  login code


var user = JSON.parse(localStorage.getItem("userDetails")) || []
// console.log(user)
var bttn = document.getElementById('loginbtn')
bttn.addEventListener("click", func)

function func(){
    event.preventDefault()

   
    var userdata = {
        user_email:user_email.value,
        user_password:user_password.value
    }
    // console.log(userdata)
    
var exist = user.findIndex(function(ele){
    return userdata.user_email == ele.email
    // console.log(userdata.user_email)
})

    console.log(exist)
    flag = false;
    if(exist==-1){
        alert('Create account please')
    }else{
        user.findIndex(function(ele){
            if(userdata.user_email===ele.email && userdata.user_password === ele.password){
                alert("Account login Successfull")
                flag=true;
                localStorage.setItem("userdata",JSON.stringify(ele))
               window.location.href="../index.html"
            }
            
        })
        if(!flag){
            alert("Login ceredential wrong!!")
        }
    }
}


