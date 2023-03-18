function reset() {
    var check = prompt("本当に初期化しますか？\n(0:いいえ,1:はい");
    var process = document.getElementById("process");
    var result = document.getElementById("result");
    switch (check) {

        case '0':
            break;

        case '1':
            process.innerText = "ここに計算式が表示されます。";
            result.innerText = "ここに最終計算結果が表示されます。";
            break;

        default:
            alert("「0」か「1」を入力してください！");
    }
}