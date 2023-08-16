export default function caseStudiesFilter() {
    const filter_btn_all = document.querySelectorAll('.filter__btn');
    const filter_item_all = document.querySelectorAll('.filter__item');

    filter_btn_all.forEach(item => {
        item.addEventListener("click", function () {
            const data_target = item.getAttribute('data-target');
            clickHandler(data_target);
        })
    })

    function hideItems() {
        filter_item_all.forEach(item => {
            item.style.display = "none";
        })
    }

    function btnDisableActive() {
        filter_btn_all.forEach(item => {
            item.classList.remove("active");
        })
    }

    function clickHandler(data_target) {
        btnDisableActive();
        const btn = document.querySelector(`[data-target='${data_target}']`);
        btn.classList.add("active");

        hideItems();
        if (data_target === "") {
            filter_item_all.forEach(item => {
                item.style.display = "block";
            
            })
        } else {
            const filtered_all = document.querySelectorAll(`[data-filter='${data_target}']`);
            filtered_all.forEach(item => {
                item.style.display = "block";
            })
        }
    }
}