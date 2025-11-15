// Đợi cho toàn bộ trang web tải xong
document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu__item");
    
    const currentPagePath = window.location.pathname;

    menuItems.forEach(function(item) {
        item.classList.remove("menu__item--active");
    });

    menuItems.forEach(function(item) {
        const link = item.querySelector(".menu__link");

        if (link) {
            const linkPath = new URL(link.href).pathname;

            let isMatch = (currentPagePath === linkPath);

            if (!isMatch) {
                if ((currentPagePath === "/" && linkPath.endsWith("/index.html")) ||
                    (currentPagePath.endsWith("/index.html") && linkPath === "/")) {
                    isMatch = true;
                }
            }
            if (isMatch) {
                item.classList.add("menu__item--active");
            }
        }
    });
});


// Tìm kiếm
document.addEventListener("DOMContentLoaded", function() {
    
    const searchContainer = document.getElementById("search-container");
    const searchToggle = document.getElementById("search-toggle");
    const searchBar = document.getElementById("search-bar");

    if (!searchContainer || !searchToggle || !searchBar) {
        console.error("Không tìm thấy các phần tử ID của thanh tìm kiếm!");
        return; 
    }

    searchToggle.addEventListener("click", function(event) {
        searchContainer.classList.toggle("is-active");
        
        // Tự động focus vào ô input khi nó hiện ra
        if (searchContainer.classList.contains("is-active")) {
            searchBar.focus();
        }
    });

    document.addEventListener("click", function(event) {
        
        // Kiểm tra xem cú click có nằm NGOÀI .search-container không  
        const isClickInside = searchContainer.contains(event.target);
        
        if (!isClickInside) {
            // Nếu click ra ngoài VÀ thanh search đang mở
            if (searchContainer.classList.contains("is-active")) {
                // ẩn
                searchContainer.classList.remove("is-active");
            }
        }
    });
});

// chuyển ảnh
const swiper = new Swiper('.home-slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// // nút sidebar
// document.addEventListener('DOMContentLoaded', function() {
    
//     // 1. Tìm nút bấm (toggle) và menu (nav)
//     const menuToggle = document.getElementById('menu-toggle');
//     const mainNav = document.getElementById('main-nav');

//     // 2. Đảm bảo là đã tìm thấy cả hai
//     if (menuToggle && mainNav) {
        
//         // 3. Thêm sự kiện click cho nút
//         menuToggle.addEventListener('click', function() {
            
//             // 4. Bật/tắt class "is-active" trên menu
//             mainNav.classList.toggle('is-active');
//         });
//     }
// });