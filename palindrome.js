function palindrome(string){
    let i = 0;
    while(i < string.length/2){
        if(string[i] !== string[string.length - i -1]){
            return false
        }
        i++
    }
    return true
}

console.log(palindrome("kak"))