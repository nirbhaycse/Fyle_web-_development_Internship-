document.addEventListener("DOMContentLoaded", function() {
    const currentPageIndex = 1; // Assume current page is 1
    const totalPages = 9; // Total number of pages

    const prevPageBtn = document.getElementById("prevPageBtn");
    const nextPageBtn = document.getElementById("nextPageBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevPageBtn.addEventListener("click", function() {
        if (currentPageIndex > 1) {
            navigateToPage(currentPageIndex - 1);
        }
    });

    nextPageBtn.addEventListener("click", function() {
        if (currentPageIndex < totalPages) {
            navigateToPage(currentPageIndex + 1);
        }
    });

    prevBtn.addEventListener("click", function() {
        if (currentPageIndex > 1) {
            navigateToPage(currentPageIndex - 1);
        }
    });

    nextBtn.addEventListener("click", function() {
        if (currentPageIndex < totalPages) {
            navigateToPage(currentPageIndex + 1);
        }
    });

    function navigateToPage(pageIndex) {
        console.log("Navigating to page:", pageIndex);
    }
});
