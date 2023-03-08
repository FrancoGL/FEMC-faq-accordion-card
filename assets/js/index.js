const $summary = document.querySelector(".main__text");
const $arrow = document.querySelector(".icon-arrow");

$summary.addEventListener("click", () => {

    if (!$arrow.classList.contains("arrow-rotate")) {
        $arrow.classList.add("arrow-rotate")
    } else {
        $arrow.classList.remove("arrow-rotate")
    }
})