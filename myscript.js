function my_func(){
    var btn = document.querySelector("#my_btn");
    var drop_down = document.querySelector("#drop");
    drop_down._ghhpldhs_344 = 1;
    function active(){
        if(drop_down._ghhpldhs_344){
            drop_down.style.opacity =1;
            drop_down._ghhpldhs_344 =0;
        }
        else{
            drop_down.style.opacity =0;
            drop_down._ghhpldhs_344 = 1;
        }
    }
        
    btn.addEventListener("click",active,false);
}

