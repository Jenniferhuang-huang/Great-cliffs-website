//Function to generate combination of characters
function generateCode(){
    //Creat variables to store generated codes and the type of the charaters we want to show as codes
    var code = ' '; //initialize to null value
    var fetCode = ' ';
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    for (i=1; i <= 8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML=generateCode();

function disableButton(btnvalue){
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true){
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119,209, 0.3)";
        document.getElementById("submit").style.Color = "rgba(225, 225,225, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor =
          "rgba(73, 119,209, 1)";
        document.getElementById("submit").style.Color =
          "rgba(225, 225,225, 1)";
    }
} 

disableButton();