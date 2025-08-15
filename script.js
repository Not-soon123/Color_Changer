var index = 0;
function ChangeColor(){
    var colors = ["red","blue","orange","yellow","green","purple"];
    const name = document.getElementById('colorBtn');
    name.innerText = colors[index];
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    if(index > colors.length -1){
        index = 0;
    }
    
}