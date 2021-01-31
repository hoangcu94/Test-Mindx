// const numb = document.getElementById("numb").value;
const spin = document.getElementById("spin")
// if (numb > 10 || numb <1) {
//     alert(`moi ban nhap lai so tu 1-10`);
// } else {
    spin.onclick = function () {
        let random = Math.ceil(Math.random()*10);
        console.log(random);
    }
// }