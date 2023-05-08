function showMe(it, elem){
    var elems = document.getElementsByClassName("cb");
    var currentState = elem.checked;
    var elemsLength = elems.length;

    for(i=0; i<elemsLength; i++){
        if(elems[i].type === "checkbox"){
            elems[i].checked = false;   
        }
    }
    elem.checked = currentState;

    if(elem.checked = true){
        document.getElementById(it).style.display = 'block';
    }
    else{
        document.getElementById(it).style.display = 'none';
    }
}