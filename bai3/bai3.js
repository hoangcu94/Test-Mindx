const numb = document.getElementById("numb");
const spin = document.getElementById("spin");
const error = document.getElementById("error");
const win = document.getElementById("win");
const lost = document.getElementById("lost");
const again = document.getElementById("again");
const soLan = document.getElementById("soLan");
let randomNumber = Math.ceil(Math.random()*10);
console.log(randomNumber);
win.style.display = "none";
lost.style.display = "none";
again.style.display = "none";

spin.onclick = function () {
    let numbe = numb.value;
    let dem = 3;
    // console.log(numbe);
    if( numbe<1 || numbe >10 ) {
        error.style.display = "block";
    } else {   
        error.style.display = "none";
        if (numbe != randomNumber) {
            dem = dem - 1;
            soLan.innerHTML = `Bạn còn ${dem} lượt chơi`;
            numb.value = "";
            if (dem == 0) {
                lost.style.display = "flex";
                soLan.innerHTML = ` Bạn đã hết lượt chơi`;
            }
        } else {
            win.style.display = "flex"; 
            again.style.display = "block";

        }
    }
}
again.onclick = function () {
    let randomNumber = Math.ceil(Math.random()*10);
    console.log(randomNumber);
    let dem = 3;
    win.style.display = "none";
    lost.style.display = "none";
    again.style.display = "none";
    numb.value = "";
    soLan.innerHTML = `Bạn còn ${dem} lượt chơi`;
    spin.onclick = function () {
        let numbe = numb.value;
        // console.log(numbe);
        if( numbe<1 || numbe >10 ) {
            error.style.display = "block";
        } else {            
            if (numbe != randomNumber) {
                dem = dem - 1;
                soLan.innerHTML = `Bạn còn ${dem} lượt chơi`;
                numb.value = "";
                if (dem == 0) {
                    lost.style.display = "flex";
                    soLan.innerHTML = ` Bạn đã hết lượt chơi`;
                again.style.display = "block";

                }
            } else {
                win.style.display = "flex";  
                again.style.display = "block";

            }
        }
    }
}