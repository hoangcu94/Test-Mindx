let n = Number(prompt(`nhap vao so nguyen duong tu 4 đến 20`));
let inputNumber = Number(prompt(`Nhập số cần kiểm tra`));
function findOppositeNumber(n, inputNumber) {
    if (4<=n && n<=20 && n%2 == 0) {
        let outputNumber;
        if (inputNumber < n/2) {
            outputNumber = n/2 + inputNumber;
            console.log(outputNumber);
        } else {
            outputNumber = inputNumber - n/2;
            console.log(outputNumber);
        }
    } else {
        alert(`nhap lai n`);
    }
}
findOppositeNumber(n, inputNumber);


