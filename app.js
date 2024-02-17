let boxes = document.querySelectorAll(".box");                              
let resetbtn = document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let newGamebtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");

let turnO=true;                                              //player-x, player-O turn                           

const winPattern=[                                           // winning Possibility         
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach(box => {                                           //click O-X function           
    box.addEventListener("click",()=>{
        // console.log("clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner = () => {                                         //check winner function         
    for(let pattern of winPattern){
        // console.log(pattern);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner=(winner)=>{                                             // winner function              
    msg.innerText=`Congratualation, Winner is- ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

let disableBoxes = () =>{                                               //after winneing all boxes disable            
    for(let box of boxes){
        box.disabled = true;
    }
};

const resetGame = () =>{                                                 // Reset game function                  
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

let enableBoxes = () =>{                                                   
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

newGamebtn.addEventListener("click",resetGame);                          //click on new button       
resetbtn.addEventListener("click",resetGame);                            //click on Reset button     



