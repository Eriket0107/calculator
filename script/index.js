const insert = function(num){
   let numero = document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = numero + num;
};
const clean = function(){
    document.getElementById('result').innerHTML = "";
};
const back = function(){
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
const calcular = function(){
    let result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }
    else{
        document.getElementById('result').innerHTML = 0;
    };
}