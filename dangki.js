function signup(e)
{
   event.preventDefault();
   var username =document.getElementById("username").values;
   var email =document.getElementById("email").values;
   var password =document.getElementById("password").values;
   
    var use={
        username : username,
        email : email,
        password:password,
    }
    var json=JSON.stringify(use);
    localStorage.setItem(username,json);
    alert("Đăng Ký Thành Công ")
}

function login(e)
{
    event.preventDefault();
   var username =document.getElementById("username").values;
   var email =document.getElementById("email").values;
   var password =document.getElementById("password").values;
   var use=localStorage.getItem(username);
   var data=JSON.parse(user);
   if(user==null)
   {
    alert("Vui Long Nhập username password");

   }
   else if(username==data.username && email== data.email && password==data.password)
   {
    alert("Bạn Đã Đăng Nhập Thành Công ");
    window.location.href="todolist.html"
   }

   else{
    alert("Đăng Nhập Thất Bại")
   }
}


function check() {
    
    
    var data = new Array();
    data[0] = document.getElementById('name').value;
    data[1] = document.getElementById('email').value;
    data[2] = document.getElementById('password').value;
    data[3] = document.getElementById('cpassword').value;
    
    var myerror = new Array();
    myerror[0] = "<span style='color:red,font-weight:bold'>Vui lòng nhập tên của bạn</span>";
    myerror[1] = "<span style='color:red,font-weight:bold'>Vui lòng nhập email của bạn</span>";
    myerror[2] = "<span style='color:red,font-weight:bold'>Vui lòng nhập mật khẩu của bạn</span>";
    myerror[3] = "<span style='color:red,font-weight:bold'>Mật khẩu của bạn chưa khớp</span>";
    
    var nearby = new Array("z-name", "z-email", "z-password", "z-cpassword");
    
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
        
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "OK!";
        }
    }

    
        var fpw = document.getElementById("password").value;
        var spw = document.getElementById("cpassword").value;
        
        if (fpw==spw) {
            document.getElementById('z-cpassword').innerHTML = "Mật khẩu đã khớp";
        } else {
            document.getElementById('z-cpassword').innerHTML = "<span color='red'>Mật khẩu chưa khớp</span>";
        }
    
    
}
