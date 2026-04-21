function login() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

function toggleLang() {
    const html = document.documentElement;
    const isArabic = html.lang === 'ar';
    
    html.lang = isArabic ? 'en' : 'ar';
    html.dir = isArabic ? 'ltr' : 'rtl';

    document.querySelectorAll('[data-en]').forEach(el => {
        el.innerText = isArabic ? el.getAttribute('data-en') : el.getAttribute('data-ar');
    });
}
