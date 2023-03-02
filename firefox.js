'use strict'    
const targetImg = document.getElementById(`main`);
console.log(targetImg);
const btn = document.getElementById('update');
console.log(btn);
const classes = ["Aframe", "Bframe", "Cframe", "Dframe", "Eframe", "Gframe"]; // 適用するクラス名を配列で定義

let currentClassIndex = 0; // 現在適用中のクラス名のインデックスを初期化
let isReversing = false; // 適用を逆順にするためのフラグを初期化

btn.addEventListener("click", function() {
  targetImg.classList.remove(classes[currentClassIndex]); // 現在適用中のクラス名を削除

  if (!isReversing) {
    currentClassIndex++; // インデックスをインクリメント
    if (currentClassIndex === classes.length) {
      isReversing = true; // インデックスが最後まで達したらフラグを立てる
      currentClassIndex--; // インデックスをデクリメントして逆順にする
    }
  } else {
    currentClassIndex--; // インデックスをデクリメント
    if (currentClassIndex === -1) {
      isReversing = false; // インデックスが最初に戻ったらフラグを解除
      currentClassIndex++; // インデックスをインクリメントして元に戻す
    }
  }
  targetImg.classList.add(classes[currentClassIndex]); // 次のクラス名を適用
});

let rebtn = document.getElementById(`reset`);
console.log(rebtn);
rebtn.addEventListener( `click`, function reset(clsClean) {
    var clsClean = document.getElementById('main');
    clsClean.removeAttribute(`class`);
    console.log(clsClean);
});
  
  // startとendが逆転っしたら終わり
  // if(end<=start){
  //   return start;
  // }
