function show_cat(categoria){
    let item = document.getElementsByClassName("veiculo");
    for(var i = 0; i < item.length;i++){
        console.log(item[i].id)
        if(categoria == item[i].id){
            item[i].style = "display:inline-block";
        }else{
            item[i].style= "display:none";
        }
    }
}
function show_all(){
    let item = document.getElementsByClassName("veiculo");
    for(var i = 0; i < item.length;i++){
    item[i].style = "display:inline-block";
    }
}
function aumentar_img(imagem){
    console.log(imagem);
    if(imagem.width == 220){
        imagem.width = 320;
    }
   
    else{
        imagem.width = 220;
    }
    
}