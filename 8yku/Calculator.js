/**
 * Create a calculator using conditional structures.
*/

function calculator (a,b, op){
    if(isNaN(a)||isNaN(b)){
        var answer = null;
    }
    else{
        switch(op){
            case '+':
                answer =  a + b; 
                break;
            case '-':
                answer =  a-b;
                break;
            case '*':
                answer = a * b;
                break;
            case '/':
                answer = b!=0 ? a/b : null;
            case '%':
                answer = b!=0 ? a%b : null;
                break;
            default:
                answer = null;
        }
    }
    return answer;
}

console.log(calculator(2,5,''));