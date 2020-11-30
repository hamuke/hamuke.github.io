(function () {
  var divSwitch = $(".menu_switch");
  var ulNav = $(".menu_nav");

  // 切换菜单的显示状态
  function toggleNav() {
    // classList 类样式列表 toggle 有此样式则去掉，没有则加上
    divSwitch.classList.toggle("menu_switch--expand");
    ulNav.classList.toggle("menu_nav--expand");
  }

  divSwitch.onclick = toggleNav;

  ulNav.addEventListener("click", function () {
    toggleNav();
  });
})();
