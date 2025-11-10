// Đợi cho toàn bộ trang web tải xong
document.addEventListener("DOMContentLoaded", function() {
    
    //Lấy đường dẫn trang hiện tại (ví dụ: "/gioi-thieu.html")
    const currentPagePath = window.location.pathname;

    const menuLinks = document.querySelectorAll(".menu__link");

    menuLinks.forEach(function(link) {
        const linkPath = link.getAttribute("href");
        if (currentPagePath === linkPath) {
            
            // Nếu TRÙNG NHAU, tìm <li> cha và thêm class "active"
            link.closest(".menu__item").classList.add("menu__item--active");
        }
    });
    if (currentPagePath === "/") {
         document.querySelector('a[href="/"]').closest(".menu__item").classList.add("menu__item--active");
    }
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