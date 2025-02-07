var q = 4;
var arr = document.getElementsByClassName("element")
init()
window.onload = init()
var arr = document.getElementsByClassName("element")


function right(){
    var can = false
    var access = false;
    var k;
    var score = getElementsByClassName("score")

    for (let i=14; i>0; i-=4){
        for (let j=i; j>=i-2; j--){
            if (arr[j].innerHTML !==""){
                k=j
                while(k<i+1 && (parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) || arr[k + 1].innerHTML === "")){
                    if (parseInt(arr[k+1].innerHTML) === parseInt(arr[k].innerHTML) && access === false){
                        arr[k+1].innerHTML = (parseInt(arr[k-1].innerHTML)+parseInt(arr[k].innerHTML))
                        arr[k].innerHTML=""
                        can = true
                        access = true
                        score.innerHTML = parseInt(arr[k - 1].innerHTML) + parseInt(score.innerHTML);
                    }
                    else if ( parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) && access === true){
                        access = false
                    }
                    else if (arr[k-1].innerHTML === ""){
                        arr[k-1].innerHTML = parseInt(arr[k].innerHTML)
                        arr[k].innerHTML = ""
                        can = true
                    }
                    k-=1
                }
            }
        }
    }
    if (can){
        av()
    }
}

function left(){
    var can = false
    var access = false
    var k;
    var score = getElementsByClassName("score")

    for (let i=13; i>0; i-=4){
        access = false
        for (var j = i; j <= i + 2; j++) {
            if (arr[j].innerHTML !== "") {
                k = j;
                while (k > i - (i % 4) && (parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) || arr[k - 1].innerHTML === "")){
                    if (
                        parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
                        access === false
                    ) {
                        arr[k - 1].innerHTML =
                            parseInt(arr[k - 1].innerHTML) + parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        can = true;
                        access = true;
                        score.innerHTML =
                            parseInt(arr[k - 1].innerHTML) + parseInt(score.innerHTML);
                    } else if (
                        parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) &&
                        access === true
                    ) {
                        access === false;
                    } else if (arr[k - 1].innerHTML === "") {
                        arr[k - 1].innerHTML = parseInt(arr[k].innerHTML);
                        arr[k].innerHTML = "";
                        can = true;
                    }
                    k -= 1;
                }
            }
        }
    }
}