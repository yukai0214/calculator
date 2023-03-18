function calculator() {

    var process = document.getElementById("process");
    process.innerText = prompt("初期値（数字）を入力してください",0);/*「+1+2」というような不自然な表示を避けるために、while文から抜き出しています。*/
    var value = Number(process.innerText);/*上で入力された数値はそのままだと「a,bのような文字列扱い」になってしまうので数値に変換しています*/

    var finish = 0; /*「1」が代入されると計算終了を意味するフラグ変数*/
    var value_count = 0; /*計算式に出てきた数字の個数を数える変数*/

    while(finish != 1) {/*「=」が入力されるまで無限に計算し続けられるようにしています*/

        var operator= prompt("行う演算または「＝」コマンドを入力してください。\n(＋:「+」,ー:「-」,×:「*」,÷:「/」,＝:「=」"+" 現在の値：" + value);

        switch(operator) {/*入力された演算子についての場合分けです*/

            case '+':
                var plus_value = prompt("加える値を入力してください",0);

                if (Number(plus_value) < 0)/*「+-1」というような不自然な表示を避けるための場合分けです。*/
                process.innerText += "+" + '(' + plus_value + ')';
                else
                process.innerText += "+" + plus_value;

                value += Number(plus_value);
                break;

            case '-':

                var minus_value = prompt("差分の値を入力してください",0);

                if (Number(minus_value < 0))/*「--1」というような不自然な表示を避けるための場合分けです。*/
                process.innerText += "-" + '(' + minus_value + ')';
                else
                process.innerText += "-" + minus_value;

                value -= Number(minus_value);
                break;
            
            case '*':

                var times_value =prompt("掛ける値を入力してください",1);

                if (value_count == 0) {/*この場合分けは「(2)×2」というような不自然な表示を避けるために行っています*/

                    if(Number(times_value) < 0) /*「×-1」というような不自然な表示を避けるための場合分けです。*/
                        process.innerText =  process.innerText + "×" + '(' + times_value + ')';
                    else
                        process.innerText = process.innerText + "×" + times_value;
                }
                else {
                    if(Number(times_value) < 0)
                        process.innerText = "(" + process.innerText + ")" + "×" + '(' + times_value + ')';
                    else
                        process.innerText = "(" + process.innerText + ")" + "×" + times_value;
                }

                value *= Number(times_value);
                break;

            case '/':

                var divide_value = prompt("除数(a÷bのbの値)を入力してください",1);

                if (divide_value == '0') {
                    alert("0では割れません！");
                    break;
                }
                else {
                    if (value_count == 0) {/*このvalue_countの場合分けもかけ算と同じ理由で行っています。*/

                        if (Number(divide_value) < 0)/*「÷-1」というような不自然な表示を避けるための場合分けです。*/
                            process.innerText = process.innerText + "÷" + '(' + divide_value + ')';
                        else
                            process.innerText = process.innerText + "÷" + divide_value;
                    }
                    else {
                        if (Number(divide_value) < 0)
                            process.innerText = '(' + process.innerText + ')' + "÷" + '(' + divide_value + ')';
                        else
                            process.innerText = '(' + process.innerText + ')' + "÷" + divide_value;
                    }
                    value /= Number(divide_value);
                    break;
                }
          
            case '=':
                finish = 1;/*これがwhile文脱出条件です。*/
                break;

            default:

                alert("「＋,ー,×,÷,＝」の中から行う演算を選択して下さい！");/*無効な演算子入力への対応です*/
                break;
        }

        ++value_count;/*「case '*':」の部分を参照*/
    }

    var result = document.getElementById("result");
        result.innerText = "=" + value;
}