// 获取左侧标题元素
const categories = document.querySelectorAll(".category");

// 给每个左侧标题元素绑定点击事件
categories.forEach((category) => {
  category.addEventListener("click", () => {
    // 获取右侧内容元素
    const rightPanel = document.querySelector(".right-panel");
    // 设置内容为“操作成功”
    rightPanel.innerHTML = "<p>操作成功</p>";
  });
});
// 获取所有的左侧菜单项
var menuItems = document.querySelectorAll('.menu-item');

// 遍历所有菜单项，为其添加点击事件
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function(event) {
    // 阻止默认行为
    event.preventDefault();

    // 获取对应的内容
    var content = this.querySelector('.sub-category').innerHTML;

    // 将内容显示在右侧区域
    var contentArea = document.getElementById('content-area');
    contentArea.innerHTML = content;
  });
});

