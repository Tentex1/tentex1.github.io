const translations = {
    tr: {
        "nav-home": "Ana Sayfa",
        "nav-projects": "Projeler",
        "nav-about": "Hakkımda",
        "nav-contact": "İletişim",
        "footer-rights": "&copy; 2026 Duran \"Tentex\". Tüm hakları saklıdır.",
        "hero-title": "Merhaba, ben <span class=\"highlight\">Duran 👋</span>",
        "hero-desc": "🚀 <strong>Yazılım Geliştirici & Açık Kaynak Katkıcısı</strong><br><br>Masaüstü uygulamaları geliştirmeye odaklanan ve Android ekosistemini keşfeden tutkulu bir yazılımcıyım. Şu sıralar C# ve modern arayüz (UI) kütüphanelerine odaklonıyorum.",
        "hero-btn": "Projelerimi Gör",
        "projects-title": "Projelerim",
        "projects-loading": "GitHub'dan projeler yükleniyor...",
        "about-title": "Hakkımda",
        "hero-desc": "Bilişim lisesinde eğitim gören ve <strong>.NET ekosistemine</strong> odaklanmış tutkulu bir yazılımcıyım. <strong>C# & XAML</strong> kullanarak modern masaüstü ve mobil deneyimler geliştiriyor, yeni nesil arayüz kütüphaneleri ve bulut çözümleriyle çalışıyorum.",        "skill-dotnet": ".NET Ekosistemi & Framework'ler",
        "skill-langs": "Programlama Dilleri",
        "skill-db": "Veritabanları",
        "skill-platforms": "Platformlar",
        "skill-editors": "Editör & IDE",
        "stats-title": "📊 Performans & İstatistikler",
        "contact-title": "İletişime Geçin",
        "contact-desc": "Projeler hakkında konuşmak veya tanışmak için bana aşağıdaki platformlardan ulaşabilirsiniz."
    },
    en: {
        "nav-home": "Home",
        "nav-projects": "Projects",
        "nav-about": "About",
        "nav-contact": "Contact",
        "footer-rights": "&copy; 2026 Duran \"Tentex\". All rights reserved.",
        "hero-title": "Hello, I'm <span class=\"highlight\">Duran 👋</span>",
        "hero-desc": "I am a passionate software developer studying IT in high school and heavily focused on the <strong>.NET ecosystem</strong>. I craft modern desktop and mobile experiences using <strong>C# & XAML</strong>, while exploring next-gen UI frameworks and cloud backends.",        "hero-btn": "See My Projects",
        "projects-title": "My Projects",
        "projects-loading": "Loading projects from GitHub...",
        "about-title": "About Me",
        "about-desc": "Born in 2010, my fascination with computers started at a very young age, which naturally led me to study Information Technology in a vocational high school today.<br><br>I am heavily invested in the <strong>.NET ecosystem</strong>, crafting desktop and mobile experiences using C#. My UI toolbox includes <strong>WPF, WinForms, and MAUI</strong>. And honestly, since C# and XAML are already running through my veins, picking up <strong>WinUI</strong> is just another Tuesday for me!<br><br>On the data side of things, I enjoy building flexible backends. I work with <strong>T-SQL</strong> and local SQL Server databases (classic high school memories included!), <strong>SQLite</strong> for lightweight local needs, and <strong>Supabase</strong> for modern, cloud-backed applications.",
        "skills-title": "🛠️ Technologies & Skills",
        "skill-dotnet": ".NET Ecosystem & Frameworks",
        "skill-langs": "Programming Languages",
        "skill-db": "Databases",
        "skill-platforms": "Platforms",
        "skill-editors": "Editors & IDEs",
        "stats-title": "📊 Performance & Stats",
        "contact-title": "Get in Touch",
        "contact-desc": "You can reach out to me on the following platforms to discuss projects or just to connect."
    }
};

const getLanguage = () => {
    const hash = window.location.hash;
    if (hash === '#en') return 'en';
    if (hash === '#tr') return 'tr';

    try {
        const savedLang = localStorage.getItem('language');
        if (savedLang === 'en' || savedLang === 'tr') return savedLang;
    } catch (e) {}

    return 'en';
};

const isSameDomain = (url) => {
    if (url.startsWith('file:///')) return true;
    return url.startsWith(window.location.origin);
};

const updateLinkHashes = (lang) => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const url = link.href;
        if (!url) return;
        if (link.target === '_blank') return;
        if (url.includes('github.com') || url.includes('instagram.com') || url.includes('discord.com')) return;
        
        if (isSameDomain(url)) {
            const baseUrl = url.split('#')[0];
            link.href = `${baseUrl}#${lang}`;
        }
    });
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if (!burger || !nav) return;
    const navLinks = nav.querySelectorAll('li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            link.style.animation ? link.style.animation = '' : link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        });
        burger.classList.toggle('toggle');
    });
};

const pageTransition = () => {
    const body = document.querySelector('body');
    const navLoader = document.querySelector('.nav-loader');

    body.classList.remove('fade-out');
    
    const currentLang = getLanguage();
    updateLinkHashes(currentLang);

    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const url = link.href;
            if (url.includes('#') && !url.includes('#en') && !url.includes('#tr')) return;
            if (link.target === '_blank' || e.ctrlKey || e.metaKey) return;

            if (isSameDomain(url) && url !== window.location.href) {
                e.preventDefault();

                if (navLoader) {
                    navLoader.classList.add('loading');
                }
                body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = url;
                }, 400);
            }
        });
    });
};

const themeHandler = () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    if (!toggleButton) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') body.classList.add('light-theme');
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
    });
};

const translatePage = (lang) => {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
};

const languageHandler = () => {
    const langToggle = document.getElementById('lang-toggle');
    if (!langToggle) return;

    let currentLang = getLanguage();
    
    langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
    translatePage(currentLang);
    updateLinkHashes(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        
        try {
            localStorage.setItem('language', currentLang);
        } catch (e) {}

        window.location.hash = currentLang;
        langToggle.textContent = currentLang === 'tr' ? 'EN' : 'TR';
        translatePage(currentLang);
        updateLinkHashes(currentLang);
        
        if (document.querySelector('.project-grid')) {
            fetchGitHubProjects();
        }
    });
};

async function fetchGitHubProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    const githubUsername = "Tentex1";
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`;

    const languageColors = {
        "C#": "#178600", "Python": "#3572A5", "JavaScript": "#f1e05a", "HTML": "#e34c26",
        "CSS": "#563d7c", "TypeScript": "#2b7489", "Java": "#b07219", "Shell": "#89e051",
        "default": "#6e7681"
    };

    const isEn = getLanguage() === 'en';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`GitHub API hatası: ${response.status}`);
        const repos = await response.json();

        const portfolioRepos = repos.filter(repo => 
            (repo.topics && (repo.topics.includes('portfolio-project') || repo.topics.includes('portfolio'))) || 
            repo.name === 'ADBFastbootGUI' || 
            repo.name === 'SystemInfo'
        );
        projectGrid.innerHTML = '';

        if (portfolioRepos.length === 0) {
            projectGrid.innerHTML = `<p>${isEn ? 'No projects found to showcase. Please tag your repositories with "portfolio".' : 'Gösterilecek proje bulunamadı. Projelerinize "portfolio" etiketini eklediğinizden emin olun.'}</p>`;
            return;
        }

        portfolioRepos.forEach(repo => {
            const repoName = repo.name.replaceAll('-', ' ');
            const repoDescription = repo.description || (isEn ? "No description provided." : "Açıklama eklenmemiş.");
            const repoUrl = repo.html_url;
            const liveSiteUrl = repo.homepage;
            const language = repo.language;

            const escapedRepoName = repoName.replaceAll("'", "\\'").replaceAll('"', '\\"');
            const escapedDescription = repoDescription.replaceAll("'", "\\'").replaceAll('"', '\\"').replaceAll('\n', ' ').replaceAll('\r', '');
            const escapedUrl = repoUrl.replaceAll("'", "\\'").replaceAll('"', '\\"');
            const escapedLiveSiteUrl = (liveSiteUrl || '').replaceAll("'", "\\'").replaceAll('"', '\\"');
            const escapedLanguage = (language || '').replaceAll("'", "\\'").replaceAll('"', '\\"');

            let languageHTML = '';
            if (language) {
                const color = languageColors[language] || languageColors.default;
                languageHTML = `
                    <div class="project-language">
                        <span class="language-color-dot" style="background-color: ${color};"></span>
                        <span>${language}</span>
                    </div>
                `;
            }

            const codeText = isEn ? 'Code' : 'Kodlar';
            const liveText = isEn ? 'Live Demo' : 'Siteyi Gör';

            let projectCard = `
                <div class="project-card" style="cursor: pointer;" onclick="openProjectModal('${repo.name}', '${escapedRepoName}', '${escapedDescription}', '${escapedUrl}', '${escapedLiveSiteUrl}', '${escapedLanguage}', ${repo.stargazers_count || 0}, ${repo.forks_count || 0})">
                    <div class="card-content">
                        <h3>${repoName}</h3>
                        <p>${repoDescription}</p>
                    </div>
                    <div class="card-footer">
                        ${languageHTML} 
                        <div class="project-links" onclick="event.stopPropagation()">
                            <a href="${repoUrl}" target="_blank"><i class="fab fa-github"></i> ${codeText} </a>`;

            if (liveSiteUrl) {
                projectCard += `<a href="${liveSiteUrl}" target="_blank"><i class="fas fa-external-link-alt"></i> ${liveText}</a>`;
            }

            projectCard += `</div></div></div>`;
            projectGrid.innerHTML += projectCard;
        });

    } catch (error) {
        console.error("Projeler çekilirken bir hata oluştu:", error);
        projectGrid.innerHTML = `<p>${isEn ? 'An error occurred while loading projects. Please check Developer Console (F12).' : 'Projeler yüklenirken bir hata oluştu. Lütfen Geliştirici Konsolu\'nu (F12) kontrol edin.'}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    pageTransition();
    themeHandler();
    languageHandler();
    fetchGitHubProjects();
});

window.openProjectModal = (repoId, repoName, description, repoUrl, liveSiteUrl, language, stars, forks) => {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    
    document.getElementById('modal-title').innerText = repoName;
    document.getElementById('modal-description').innerText = description;
    
    const langBadge = document.getElementById('modal-lang');
    if (language && language !== 'null' && language !== 'undefined' && language !== '') {
        langBadge.style.display = 'flex';
        langBadge.innerHTML = `<i class="fas fa-code"></i> ${language}`;
    } else {
        langBadge.style.display = 'none';
    }
    
    const isEn = getLanguage() === 'en';
    
    document.getElementById('modal-stars').innerHTML = `<i class="fas fa-star"></i> ${stars} ${isEn ? 'Stars' : 'Yıldız'}`;
    document.getElementById('modal-forks').innerHTML = `<i class="fas fa-code-branch"></i> ${forks} ${isEn ? 'Forks' : 'Fork'}`;
    
    document.getElementById('modal-github-link').href = repoUrl;
    document.getElementById('modal-github-link').innerHTML = `<i class="fab fa-github"></i> ${isEn ? 'View on GitHub' : 'GitHub\'da Gör'}`;
    
    const liveLink = document.getElementById('modal-live-link');
    if (liveSiteUrl && liveSiteUrl !== 'null' && liveSiteUrl !== 'undefined' && liveSiteUrl !== '') {
        liveLink.style.display = 'inline-flex';
        liveLink.href = liveSiteUrl;
        liveLink.innerHTML = `<i class="fas fa-external-link-alt"></i> ${isEn ? 'Live Site' : 'Canlı Site'}`;
    } else {
        liveLink.style.display = 'none';
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
};

window.closeProjectModal = () => {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) {
        closeProjectModal();
    }
});

//
// Designed & Developed with Premium Neon Tech by Antigravity AI
// Google DeepMind - Advanced Agentic Coding Team
// Specially crafted for Duran "Tentex" (2026)
//