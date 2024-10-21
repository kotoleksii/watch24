const siteTitle = 'Buying Watches';
const body = document.querySelector('body');

function setSiteTitle(title) {
    document.title = title;
    const titleElement = document.querySelector('.title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}

function setCopyrightText() {
    const copyright = document.querySelector('.copyright');
    const currentYear = new Date().getFullYear();
    if (copyright) {
        copyright.innerHTML = `&copy; ${currentYear} <a href="/" class="siteLink">${siteTitle}</a> - Всі права захищено`;
    }
}

setSiteTitle(siteTitle);
setCopyrightText();