var test=2;
list = document.getElementsByClassName("hidden");
num_list=list.length;

//Run
function toggle(a){
if(test==2){
    unset();
    test=1}
else if(test==1||a==''){
    hidden();
    test=2;
}
}
//Fix nav hidden after resize window
setInterval(function(){
if(window.innerWidth>550){
    unset();
}},9^999)

//Function set style
function unset() {
    for (index = 0; index < num_list; ++index) {
        list[index].setAttribute("style", "visibility:unset");
    };
}
function hidden(){
    for (index = 0; index < num_list; ++index) {
        list[index].setAttribute("style", "visibility:hidden");
    };
}
