var q = 4;
var arr = document.getElementsByClassName("element");
var score = document.getElementById("score");

init();
window.onload = init;

function right() {
    var can = false;
    var access = false;
    var k;

    for (let i = 15; i >= 0; i -= 4) {
        access = false;
        for (let j = i - 1; j >= i - 3; j--) {
            if (arr[j].innerHTML !== "") {
                k = j;
                while (k < i && (arr[k + 1].innerHTML === "" || parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML))) {
                    if (arr[k + 1].innerHTML === "") {
                        arr[k + 1].innerHTML = arr[k].innerHTML;
                        arr[k].innerHTML = "";
                        can = true;
                    } else if (parseInt(arr[k + 1].innerHTML) === parseInt(arr[k].innerHTML) && !access) {
                        arr[k + 1].innerHTML = parseInt(arr[k + 1].innerHTML) * 2;
                        arr[k].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(arr[k + 1].innerHTML);
                        can = true;
                        access = true;
                    }
                    k++;
                }
            }
        }
    }
    if (can) {
        av();
    }
}

function left() {
    var can = false;
    var access = false;
    var k;

    for (let i = 12; i >= 0; i -= 4) {
        access = false;
        for (let j = i + 1; j <= i + 3; j++) {
            if (arr[j].innerHTML !== "") {
                k = j;
                while (k > i && (arr[k - 1].innerHTML === "" || parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML))) {
                    if (arr[k - 1].innerHTML === "") {
                        arr[k - 1].innerHTML = arr[k].innerHTML;
                        arr[k].innerHTML = "";
                        can = true;
                    } else if (parseInt(arr[k - 1].innerHTML) === parseInt(arr[k].innerHTML) && !access) {
                        arr[k - 1].innerHTML = parseInt(arr[k - 1].innerHTML) * 2;
                        arr[k].innerHTML = "";
                        score.innerHTML = parseInt(score.innerHTML) + parseInt(arr[k - 1].innerHTML);
                        can = true;
                        access = true;
                    }
                    k--;
                }
            }
        }
    }
    if (can) {
        av();
    }
}

function down() {
    var can = false;
    var access = false;
    var k;

    for (let i = 11; i >= 0; i--) {
        if (i % 4 === 0) access = false;
        if (arr[i].innerHTML !== "") {
            k = i;
            while (k + 4 <= 15 && (arr[k + 4].innerHTML === "" || parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML))) {
                if (arr[k + 4].innerHTML === "") {
                    arr[k + 4].innerHTML = arr[k].innerHTML;
                    arr[k].innerHTML = "";
                    can = true;
                } else if (parseInt(arr[k + 4].innerHTML) === parseInt(arr[k].innerHTML) && !access) {
                    arr[k + 4].innerHTML = parseInt(arr[k + 4].innerHTML) * 2;
                    arr[k].innerHTML = "";
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(arr[k + 4].innerHTML);
                    can = true;
                    access = true;
                }
                k += 4;
            }
        }
    }
    if (can) {
        av();
    }
}

function up() {
    var can = false;
    var access = false;
    var k;

    for (let i = 4; i < 16; i++) {
        if (i % 4 === 0) access = false;
        if (arr[i].innerHTML !== "") {
            k = i;
            while (k - 4 >= 0 && (arr[k - 4].innerHTML === "" || parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML))) {
                if (arr[k - 4].innerHTML === "") {
                    arr[k - 4].innerHTML = arr[k].innerHTML;
                    arr[k].innerHTML = "";
                    can = true;
                } else if (parseInt(arr[k - 4].innerHTML) === parseInt(arr[k].innerHTML) && !access) {
                    arr[k - 4].innerHTML = parseInt(arr[k - 4].innerHTML) * 2;
                    arr[k].innerHTML = "";
                    score.innerHTML = parseInt(score.innerHTML) + parseInt(arr[k - 4].innerHTML);
                    can = true;
                    access = true;
                }
                k -= 4;
            }
        }
    }
    if (can) {
        av();
    }
}

function end() {
    document.getElementById("end").style.display = "flex";
    document.getElementById("game").style.display = "none";
    document.getElementById("control").style.display = "none";
}

function random() {
    var done = false;
    while (!done) {
        var num = Math.floor(Math.random() * 16);
        if (arr[num].innerHTML === "") {
            arr[num].innerHTML = Math.random() < 0.9 ? "2" : "4";
            arr[num].setAttribute('data-value', arr[num].innerHTML);
            done = true;
        }
    }
}

function av() {
    var empty = false;
    var count = 0;
    
    for (var i = 0; i < 16; i++) {
        if (arr[i].innerHTML === "") {
            empty = true;
            count++;
        }
    }
    
    if (empty) {
        random();
    }
    if (count === 1) {
        check();
    }
}

function check() {
    var canMove = false;
    
    // Check horizontal and vertical neighbors
    for (var i = 0; i < 16; i++) {
        if (arr[i].innerHTML === "") continue;
        
        // Check right neighbor
        if (i % 4 < 3 && arr[i + 1].innerHTML === arr[i].innerHTML) canMove = true;
        // Check down neighbor
        if (i < 12 && arr[i + 4].innerHTML === arr[i].innerHTML) canMove = true;
    }
    
    if (!canMove) {
        end();
    }
}

function init() {
    document.getElementById("splash").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("pause").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementById("control").style.display = "block";
    
    for (var i = 0; i < 16; i++) {
        arr[i].innerHTML = "";
        arr[i].removeAttribute('data-value');
    }
    
    score.innerHTML = "0";
}

function pause() {
    document.getElementById("pause").style.display = "block";
    document.getElementById("control").style.display = "none";
}

function reset() {
    init();
}

function start() {
    document.getElementById("splash").style.display = "none";
    document.getElementById("game").style.display = "block";
    random();
    random();
}

function resume() {
    document.getElementById("pause").style.display = "none";
    document.getElementById("control").style.display = "block";
}

window.addEventListener("keydown", function(e) {
    if (document.getElementById("game").style.display === "block") {
        switch (e.code) {
            case "ArrowLeft":
                e.preventDefault();
                left();
                break;
            case "ArrowRight":
                e.preventDefault();
                right();
                break;
            case "ArrowUp":
                e.preventDefault();
                up();
                break;
            case "ArrowDown":
                e.preventDefault();
                down();
                break;
        }
    }
});