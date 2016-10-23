function clicked(){
    var valid = false;
    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var userList = ["timmy", "ymmit"];
    var passList = ["a", "b"];

    for (var i=0; i < userList.length; i++){
        if (userList[i] == user.value){
            if(passList[i] == pass.value){
                valid = true;
                break;
            }
        }
    }
if (valid){window.location.href = "index.html";}
else {alert("ll");}

}