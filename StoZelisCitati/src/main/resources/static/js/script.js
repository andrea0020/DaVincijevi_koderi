window.onload = function(){
    const menu_btn = document.querySelector('.hamburger')
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle("is-active")
    })
}

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    }
}