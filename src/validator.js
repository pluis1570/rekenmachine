document.getElementById('deel').addEventListener('click',checkOperatordeel);
document.getElementById('maal').addEventListener('click',checkOperatormaal);
document.getElementById('min').addEventListener('click',checkOperatormin);
document.getElementById('plus').addEventListener('click',checkOperatorplus);


function checkOperatordeel(){
    var elementShow = document.getElementsByName('show')[0];
    var text = elementShow.value;
    var lastChar = text.charAt(text.length-1);

    if(lastChar !== '/'){
        elementShow.value = text + '/'
    }}

    function checkOperatormaal(){
    var elementShow = document.getElementsByName('show')[0];
    var text = elementShow.value;
    var lastChar = text.charAt(text.length-1);

    if(lastChar !== '*'){
        elementShow.value = text + '*'
    }}

    function checkOperatorplus(){
    var elementShow = document.getElementsByName('show')[0];
    var text = elementShow.value;
    var lastChar = text.charAt(text.length-1);

    if(lastChar !== '+'){
        elementShow.value = text + '+'
    }}

    function checkOperatormin(){
    var elementShow = document.getElementsByName('show')[0];
    var text = elementShow.value;
    var lastChar = text.charAt(text.length-1);

    if(lastChar !== '-'){
        elementShow.value = text + '-'
    }}