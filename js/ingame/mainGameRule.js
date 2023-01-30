/*
0. 로그인 하고 옴 (나중에)
1. 게임화면 + "Game Start" 버튼 누르면 실행
2. 랜덤 숫자 생성(= 답 ) + "게임을 시작합니다. " + "4자리 숫자를 입력해주세요."
2-1 플레이어가 숫자 4개 입력
3. 답과 비교 후 1s2b 출력
4. 4s가 되면 "정답입니다." 출력, 겜 종료
5. 다시 1번으로 
*/

const gameStartForm = document.querySelector("#strat");
const gameStartButton = document.querySelector("#start input");

const IngameForm = document.querySelector('#Ingame');
const IngameInput = document.querySelector('#Ingame input');
const records = document.querySelector('#records')


function handleOnInput(el, maxlength) {
    if(el.value.length > maxlength)  {
      el.value 
        = el.value.substr(0, maxlength);
    }
  }

function eventGameStartButton () {
    gameStartButton.classList.add('hidden');
    alert("게임을 시작합니다.");
    IngameForm.classList.remove('hidden');
 //   console.log(compare());
}


function getNumber() {
    numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    randomArray = [];
    for (var i = 0; i < 4; i++) {
        const randomNum = numArray.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
            randomArray.push(randomNum);
        // if( i == 0 ) {
        //     const randomNum = numArray.splice(Math.floor(Math.random() * (9 - i) + 1), 1)[0];
        //      randomArray.push(randomNum);
        // } else {
        //     const randomNum = numArray.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
        //      randomArray.push(randomNum);

        // }  맨 앞자리 숫자가 0이 없는 버젼
    }
    console.log(randomArray);
    return randomArray;
}



function list(comparelist) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText = comparelist;
    records.appendChild(li);
}


const getnumber = getNumber();

function handleInput(event) {
    event.preventDefault();
    const inputnumber = IngameInput.value;
    IngameInput.value = "";
    
    let strike = 0;
    let ball = 0;
    for (let i=0; i<4; i++) {
        for (let j=0; j<4; j++) {
            if(i == j) {
                if(getnumber[i] == inputnumber[j]){
                    strike++;
                }
            } else if(i != j) {
                if(getnumber[i] == inputnumber[j]) {
                    ball++;
                }
            }
        }
    } 
    if(inputnumber.length < 4 || inputnumber[0] == 0) {
        alert(`4자리 숫자로 다시 입력하십시요.`);
    } else if (strike == 4) {
        list(`정답입니다. 3초 뒤 시작됩니다.`)
        setTimeout(() => {
            setTimeout(regame(), 3000);
        }, 3000);
    } else if(strike == 0 && ball == 0){
        list(`${inputnumber} 아웃입니다.`);
    } else if (ball == 0) {
        list(`${inputnumber} ${strike}S`);
    } else if (strike == 0) {
        list(`${inputnumber} ${ball}B`);
    } else {
        list(`${inputnumber} ${strike}S${ball}B`);
    }

}


IngameForm.addEventListener('submit',handleInput);


function regame() {
    location.reload(true);
    location.href = location.href;
    history.go(0);
}

