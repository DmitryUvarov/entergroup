// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener('load', pageLoad)

function pageLoad() {
    // const htmlTag = document.documentElement

    // document.addEventListener('click', e => {
    //     const targetElement = e.target

    //     if (targetElement.closest('.class')) {
    //         console.log('1');
    //     }
    // })

    document.addEventListener("afterPopupOpen", function (e) {
        // Попап
        const currentPopup = e.detail.popup;
        const popup = currentPopup.targetOpen.element;
        const inputServise = popup.querySelector('[data-servise]');
        const currentButtonTitle = currentPopup.previousActiveElement.getAttribute('data-popup-title');

        if (inputServise) {
            inputServise.value = currentButtonTitle ? currentButtonTitle : '';
        }
        });
}