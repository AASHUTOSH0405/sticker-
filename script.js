let x=document.getElementById("main");
let arr=["https://rukminim2.flixcart.com/image/300/300/l0cr4i80/poster/h/p/o/small-motu-patlu-poster-for-wall-all-motu-patlu-character-a3-original-imagc59qqtufz9wz.jpeg","https://i.pinimg.com/474x/81/35/e6/8135e6653e676c48da024eb8896381e4.jpg","https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png","https://i.pinimg.com/474x/4f/ee/b3/4feeb375d2b007cd90cd5df8bb7a0249.jpg"," https://pbs.twimg.com/media/F41XPgsbcAAAuDX.jpg"]
let s="";
for(let i=0;i<50;i++){
    let r=Math.floor(Math.random()*5)
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s;