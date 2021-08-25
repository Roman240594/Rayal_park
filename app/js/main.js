const menuButton = document.getElementById('menuBtn');
const menuList = document.getElementById('menuList');
const menuLineTop = document.getElementById('menuLineTop');
const menuLineCenter = document.getElementById('menuLineCenter');
const menuLineBottom = document.getElementById('menuLineBottom');

menuButton.onclick = function () {
    menuList.classList.toggle('menu__list_active');
    menuLineTop.classList.toggle('menu__line-top_active');
    menuLineCenter.classList.toggle('menu__line-center_active');
    menuLineBottom.classList.toggle('menu__line-bottom_active');
}
