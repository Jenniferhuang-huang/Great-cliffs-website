//Function to generate combination of characters
function generateCode(){
    //Creat variables to store generated codes and the type of the charaters we want to show as codes
    var code = ' '; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
    for (i=1; i <= 8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML=generateCode();

function disableButton(){
    document.getElementById("submit").disabled = true;
} 
disableButton();