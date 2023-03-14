'use strict'
const btn = document.getElementById('update');
console.log(btn);
let isReversing = false; // 適用を逆順にするためのフラグを初期化
const targetElement = document.getElementById('main');
console.log(targetElement);

let currentIndex = 0; // 現在適用中のクラス名のインデックスを初期化
const classes = ["Aframe", "Bframe", "Cframe", "Dframe", "Eframe", "Gframe"]; // 適用するクラス名を配列で定義
btn.addEventListener('click', function() {
  targetElement.classList.remove(classes[currentIndex]);
  currentIndex = (currentIndex + 1) % classes.length;
  targetElement.classList.add(classes[currentIndex]);
});


// btn.addEventListener('click', function() {
//   targetImg.classList.remove(classes[currentClassIndex]); // 現在適用中のクラス名を削除
//   currentClassIndex++;
//   if (currentClassIndex >= classes.length) {
//     currentClassIndex = 0;
//   }
//   targetImg.classList.add(classes[currentClassIndex]); // 次のクラス名を適用
// });


  // if (!isReversing) {
  //   currentClassIndex++; // インデックスをインクリメント
  //   if (currentClassIndex === classes.length) {
  //     isReversing = true; // インデックスが最後まで達したらフラグを立てる
  //     currentClassIndex--; // インデックスをデクリメントして逆順にする
  //   }
  // } else {
  //   currentClassIndex--; // インデックスをデクリメント
  //   if (currentClassIndex === -1) {
  //     isReversing = false; // インデックスが最初に戻ったらフラグを解除
  //     currentClassIndex++; // インデックスをインクリメントして元に戻す
  //   }
  // }
//   targetImg.classList.add(classes[currentClassIndex]); // 次のクラス名を適用
// });

const resetbtn = document.getElementById('reset');
console.log(resetbtn);
resetbtn.addEventListener('click', function() {
targetElement.classList.add("Aframe");
classes.forEach(function (className) {
targetElement.classList.remove(className) 
});
currentIndex = 0;
isReversing = false;
console.log(targetElement);
});
  
  // startとendが逆転っしたら終わり
  // if(end<=start){
  //   return start;
  // }
