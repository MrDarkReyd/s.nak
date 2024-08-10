document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-switcher button');
    
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.id;
            loadLanguage(language);
        });
    });

    function loadLanguage(language) {
        fetch(`${language}.json`)
            .then(response => response.json())
            .then(translations => {
                document.querySelectorAll('[data-translate-key]').forEach(element => {
                    const key = element.getAttribute('data-translate-key');
                    if (translations[key]) {
                        element.textContent = translations[key];
                    }
                });
            })
            .catch(err => console.error('Error loading language file:', err));
    }

    // Load default language (English) on page load
    loadLanguage('en');
});
