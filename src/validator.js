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