var executed = false;
// {x:"px" ,y:"px", width:"px",height:"px",content:"",custom_style:"",custom_onclick:""},

var block1 = [
            {x: "320px", y: "0px", width:"480px", height:"160px", content:"<p>Welcome to my launcher !</p><br><p>its still in pre alpha tho</p><br><p>for now its more like a proof of concept</p>",custom_style:"display: initial;padding-top: 40px;"},
            {x: "0px",y:"480px", width:"160px",height:"160px",content:"",custom_style:"background-image: url(../images/image3ds.png); background-size:contain;",custom_onclick:"window.location='../systems/index.html';"},
            {x:"320px" ,y:"320px", width:"480px",height:"320px",content:"<video controls width=\"460px\" style=\"border-radius: 20px;\"><source src=\"../videos/video.mp4\" type=\"video/mp4\"></video>",custom_style:"",custom_onclick:""},
            {x:"0px" ,y:"640px", width:"160px",height:"160px",content:"Click above to see a game selection exemple page",custom_style:"text-align: center;",custom_onclick:""},
        ]




function create_blocks(b_list) {
            if (!executed) {
            executed = true;
            console.log("creating blocks")
            b_list.forEach(block => {
                let newblock = document.createElement("div");
                newblock.classList.add("draggable");
                newblock.style.left = block.x;
                newblock.style.top = block.y;
                newblock.style.width = block.width;
                newblock.style.height = block.height;
                newblock.innerHTML = block.content;
                if (block.custom_style) {
                    newblock.style.cssText += block.custom_style;
                }
                newblock.onclick = function() {
                    if (block.custom_onclick) {
                        eval(block.custom_onclick);
                    }
                };
                document.querySelector(".container").appendChild(newblock);
                newblock.addEventListener('mousedown', startDrag);
            });
        }
    }



function single_block(block) {
            console.log("creating single block")
                let newblock = document.createElement("div");
                newblock.classList.add("draggable");
                newblock.style.left = block.x;
                newblock.style.top = block.y;
                newblock.style.width = block.width;
                newblock.style.height = block.height;
                newblock.innerHTML = block.content;
                if (block.custom_style) {
                    newblock.style.cssText += block.custom_style;
                }
                newblock.onclick = function() {
                    if (block.custom_onclick) {
                        eval(block.custom_onclick);
                    }
                };
                document.querySelector(".container").appendChild(newblock);
                newblock.addEventListener('mousedown', startDrag);
    }




function checkAndStoreBlock1() {
    const cookies = document.cookie.split(';');
    let block1Exists = false;
    for (let cookie of cookies) {
        const [name] = cookie.trim().split('=');
        if (name === 'block1') {
            block1Exists = true;
            console.log("block1 already exists in cookies");
            break;
        }
    }
    if (!block1Exists) {
        document.cookie = "block1=" + JSON.stringify(block1);
        console.log("block1 stored in cookies");
    }
}

checkAndStoreBlock1();

create_blocks(block1)