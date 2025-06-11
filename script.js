document.addEventListener("DOMContentLoaded", function () {
    let imgList = [
        "images/img1.jpeg",
        "images/img2.jpeg",
        "images/img3.jpeg",
        "images/img4.jpeg",
        "images/final.jpeg"
    ];
    let noTexts = ["不要", "对不起，我知道错了", "狗狗币都给你", "给个台阶嘛", "喜欢你 (>ω<)"];
    let currentIndex = 0;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const dogImg = document.getElementById("dog-img");
    const mainText = document.getElementById("main-text");
    const buttons = document.querySelector(".buttons");

    yesBtn.addEventListener("click", function () {
        dogImg.src = imgList[imgList.length - 1];
        mainText.innerText = "！！喜欢你！！(>ω<)";
        buttons.style.display = "none";
    });

    noBtn.addEventListener("click", function () {
        if (noBtn.innerText === "给个台阶嘛") {
            // 直接跳转到撒娇页
            dogImg.src = imgList[imgList.length - 1];
            mainText.innerText = "！！喜欢你！！(>ω<)";
            buttons.style.display = "none";
            return;
        }
        currentIndex++;
        if (currentIndex >= imgList.length - 1) {
            currentIndex = imgList.length - 2;
        }
        dogImg.src = imgList[currentIndex];
        noBtn.innerText = noTexts[currentIndex];
    });
});
