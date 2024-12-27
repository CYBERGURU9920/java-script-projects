const input = document.getElementById("input");

function check() {
    const str = input.value;
    let i = 0;
    let j = str.length - 1;
    while(i<j){
        if(str[i] !== str[j]){
            alert("Not a palindrome");
            return;
        }
        i++;
        j--;
    }
    alert("palindrome");
}