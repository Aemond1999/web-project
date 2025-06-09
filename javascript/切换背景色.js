
    // 滑动窗口移动
    let oldIndex = 1

    function shiftMode(index) {
    let mobileBox = document.getElementById("mobile-box")
    mobileBox.style.transform = "translateX(" + (index - oldIndex) * 100 + "%)"
    let main = document.getElementById("main")
    let modeBtns = document.getElementById("mode-btns")
    let modeBtnItems = document.getElementsByClassName("mode-btn-item")
    let icons = document.getElementsByClassName("icon")

    if (index === 1) {
    main.classList.remove("dark-mode")
    main.classList.add("light-mode")
    modeBtns.classList.remove("mode-btns-dark-mode")
    modeBtns.classList.add("mode-btns-light-mode")
    mobileBox.classList.remove("mobile-box-dark-mode")
    mobileBox.classList.add("mobile-box-light-mode")
    for (let i = 0; i < modeBtnItems.length; i++) {
    modeBtnItems[i].classList.remove("mode-btn-item-dark-mode")
    modeBtnItems[i].classList.add("mode-btn-item-light-mode")
    icons[i].classList.remove("svg-dark-mode")
}
} else {
    main.classList.remove("light-mode")
    main.classList.add("dark-mode")
    modeBtns.classList.remove("mode-btns-light-mode")
    modeBtns.classList.add("mode-btns-dark-mode")
    mobileBox.classList.remove("mobile-box-light-mode")
    mobileBox.classList.add("mobile-box-dark-mode")
    for (let i = 0; i < modeBtnItems.length; i++) {
    modeBtnItems[i].classList.remove("mode-btn-item-light-mode")
    modeBtnItems[i].classList.add("mode-btn-item-dark-mode")
    icons[i].classList.add("svg-dark-mode")
}

}

}


