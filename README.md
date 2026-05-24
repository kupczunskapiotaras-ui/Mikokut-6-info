[index.html](https://github.com/user-attachments/files/28193156/index.html)
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mikołaj Kutrzuba: 6 z Info - Visionary AI Education</title>
    <!-- SEO Meta Tags -->
    <meta name="description" content="Projekt edukacyjny na ocenę celującą (6) z informatyki: futurystyczna wizja rozwoju sztucznej inteligencji w ciągu najbliższych 20 lat (2025-2045). Autor: Mikołaj Kutrzuba.">
    <meta name="author" content="Mikołaj Kutrzuba">
    <meta name="robots" content="index, follow">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Background Animated Glow Blobs -->
    <div class="glow-bg-blob blob-1"></div>
    <div class="glow-bg-blob blob-2"></div>
    <div class="glow-bg-blob blob-3"></div>

    <!-- Header Navigation -->
    <header class="site-header">
        <div class="container header-container">
            <a href="#home" class="brand" id="header-brand-logo">
                Mikołaj Kutrzuba: <span class="brand-accent">6 z Info</span>
                <span class="live-indicator"><span class="live-dot"></span></span>
            </a>
            <button class="nav-toggle" id="menu-toggle-btn" aria-label="Otwórz menu">
                <span class="hamburger"></span>
            </button>
            <nav class="main-nav" id="navigation-bar">
                <ul class="nav-list">
                    <li><a href="#home" class="nav-link active">Home</a></li>
                    <li><a href="#timeline" class="nav-link">Oś Czasu</a></li>
                    <li><a href="#verdict" class="nav-link highlighted-nav-link">Werdykt AI</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="container hero-container">
                <div class="pill-tag-wrapper">
                    <span class="pill-tag" id="hero-vision-tag">Wizja na nadchodzące dekady</span>
                </div>
                <h1 class="hero-title" id="main-hero-heading">
                    Przyszłość AI:<br>
                    <span class="gradient-text">Następne 20 Lat</span>
                </h1>
                <p class="hero-subtitle">
                    Sztuczna inteligencja przestaje być narzędziem, a staje się fundamentem nowej cywilizacji. Zobacz, jak w ciągu dwóch dekad AI przedefiniuje edukację, medycynę, a nawet nasze miejsce we wszechświecie.
                </p>
                <div class="hero-actions">
                    <a href="#timeline" class="btn btn-primary" id="explore-timeline-btn">Eksploruj Oś Czasu</a>
                    <a href="#verdict" class="btn btn-secondary" id="learn-more-btn">Dowiedz się więcej</a>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section class="timeline-section" id="timeline">
            <div class="container">
                
                <!-- Era 2025-2030 (Education & Health) -->
                <div class="timeline-block reveal-on-scroll">
                    <!-- Main Card -->
                    <div class="timeline-card main-card card-blue" id="card-2025-2030">
                        <div class="card-meta">
                            <span class="badge badge-primary">2025-2030</span>
                            <span class="badge-icon" aria-hidden="true">🎓</span>
                        </div>
                        <h2 class="card-title">Personalizacja nauki i asystenci zdrowia</h2>
                        <p class="card-text">
                            W najbliższych latach AI stanie się osobistym tutorem każdego ucznia. Algorytmy będą dostosowywać tempo i styl nauczania do indywidualnych predyspozycji mózgu, eliminując braki w edukacji. Równolegle, mobilni asystenci zdrowia będą monitorować nasze parametry życiowe w czasie rzeczywistym, przewidując choroby na lata przed wystąpieniem pierwszych objawów.
                        </p>
                        <div class="card-media">
                            <img src="assets/dna_helix.png" alt="Futurystyczny monitor analizy DNA i zdrowia" loading="lazy" class="card-img">
                        </div>
                    </div>
                    
                    <!-- Side Cards -->
                    <div class="side-cards">
                        <div class="timeline-card highlight-card purple-card" id="card-erazm">
                            <h3 class="highlight-title">Erazm Cyfrowy</h3>
                            <p class="highlight-text">
                                Sztuczna Inteligencja przestaje być tylko kodem – staje się partnerem w kreatywności i rozwiązywaniu problemów.
                            </p>
                        </div>
                        <div class="timeline-card highlight-card dotted-card" id="card-accuracy-stat">
                            <div class="stat-number">95%</div>
                            <div class="stat-label">Trafność diagnoz medycznych do 2028</div>
                        </div>
                    </div>
                </div>

                <!-- Era 2030-2035 (Autonomous Cities) -->
                <div class="timeline-block reveal-on-scroll">
                    <!-- Main Card -->
                    <div class="timeline-card main-card card-purple" id="card-2030-2035">
                        <div class="card-meta">
                            <span class="badge badge-secondary">2030-2035</span>
                            <span class="badge-icon" aria-hidden="true">🏢</span>
                        </div>
                        <h2 class="card-title">Autonomiczne miasta</h2>
                        <p class="card-text">
                            Inteligentne sieci energetyczne (Smart Grids) zoptymalizują zużycie prądu w skali całych aglomeracji, drastycznie redukując emisję CO2. Transport stanie się w pełni autonomiczny i współdzielony, uwalniając przestrzeń zajmowaną dotąd przez parkingi na rzecz parków i rekreacji.
                        </p>
                        <div class="icon-chips-wrapper">
                            <div class="icon-chip chip-blue" id="chip-electricity" title="Inteligentna Energia">
                                <span class="chip-icon">⚡</span>
                            </div>
                            <div class="icon-chip chip-mint" id="chip-eco" title="Eko Zrównoważenie">
                                <span class="chip-icon">🍃</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Era 2035-2045 (Space Exploration) -->
                <div class="timeline-block reveal-on-scroll">
                    <!-- Main Card -->
                    <div class="timeline-card main-card card-mint" id="card-2035-2045">
                        <div class="card-meta">
                            <span class="badge badge-tertiary">2035-2045</span>
                            <span class="badge-icon" aria-hidden="true">🚀</span>
                        </div>
                        <h2 class="card-title">Eksploracja kosmosu</h2>
                        <p class="card-text">
                            AI przejmie rolę głównych inżynierów w kolonizacji Marsa i księżyców Jowisza. Zrobotyzowane bazy będą budowane przez roje inteligentnych maszyn przed przybyciem ludzi. Na Ziemi, AI rozwiąże kryzys klimatyczny poprzez precyzyjne sterowanie geoinżynierią i fuzją jądrową.
                        </p>
                        <div class="card-media">
                            <img src="assets/space_outpost.png" alt="Futurystyczna zrobotyzowana baza na Marsie" loading="lazy" class="card-img">
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Special Section -->
        <section class="special-section reveal-on-scroll" id="verdict">
            <div class="container special-container">
                <h2 class="special-section-title">Sekcja Specjalna</h2>
                <h3 class="special-section-subtitle">Pytanie do Pana Jerzego</h3>
                
                <div class="interactive-verdict-wrapper">
                    <!-- Glow pulse background for the interactive button card -->
                    <div class="btn-glow-pulse"></div>
                    <div class="verdict-interactive-card">
                        <button id="check-grade-btn" class="verdict-btn" aria-haspopup="dialog">Czy dostanę 6?</button>
                    </div>
                </div>
                
                <p class="verdict-caption">
                    Kliknij powyższy przycisk, aby poznać werdykt sztucznej (i naturalnej) inteligencji.
                </p>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container footer-container">
            <h3 class="footer-title">Mikołaj Kutrzuba: 6 z Info</h3>
            <p class="footer-copyright">&copy; 2026 Mikołaj Kutrzuba: 6 z Info. Wszystkie prawa zastrzeżone.</p>
            <div class="footer-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <span class="footer-icon">🔗</span> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="footer-link">
                    <span class="footer-icon">💻</span> GitHub
                </a>
                <a href="#" class="footer-link">
                    <span class="footer-icon">👤</span> Portfolio
                </a>
            </div>
        </div>
    </footer>

    <!-- Futuristic AI Evaluation Laser Scanner Modal Overlay -->
    <div id="scan-modal" class="modal-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-card">
            <button class="modal-close-btn" id="close-modal-btn" aria-label="Zamknij okno">&times;</button>
            
            <!-- Phase 1: Scanning Mode -->
            <div class="scanner-view-container" id="scanner-view">
                <h3 class="scanner-title" id="modal-title">PROTOCOL: GRADE_EVALUATION_AI</h3>
                
                <div class="avatar-scanner-frame">
                    <div class="avatar-scanner-container">
                        <!-- Holographic Target Grid -->
                        <div class="scanner-grid"></div>
                        <!-- User Portrait Picture -->
                        <img id="avatar-image" src="assets/mikolaj.png" alt="Analizowany uczeń: Mikołaj Kutrzuba" class="scanner-portrait">
                        <!-- Moving Laser bar -->
                        <div class="scanner-laser-line"></div>
                        <!-- Cybernetic crosshair points -->
                        <div class="corner-bracket top-left"></div>
                        <div class="corner-bracket top-right"></div>
                        <div class="corner-bracket bottom-left"></div>
                        <div class="corner-bracket bottom-right"></div>
                    </div>
                </div>

                <!-- Scanning Progress & Diagnostics -->
                <div class="scanner-progress-info">
                    <div class="scanner-status-text">STAN SKANOWANIA: <span id="scan-status-label" class="blink-text">INICJALIZACJA...</span></div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" id="scan-progress-bar"></div>
                    </div>
                    <div class="console-logs" id="diagnostic-console">
                        <div class="console-line text-mint">> [SYS] Łączenie z siecią neuronową Mikołaj_Brain_v6...</div>
                    </div>
                </div>
            </div>

            <!-- Phase 2: Beautiful Golden Grade Certificate -->
            <div class="certificate-view-container hidden" id="certificate-view">
                <div class="certificate-ribbon">🏆</div>
                <h3 class="cert-main-title">OFICJALNY WERDYKT AI</h3>
                <p class="cert-intro">Sztuczna Inteligencja dokonała wnikliwej analizy parametrów i kodu projektu.</p>
                
                <div class="cert-card">
                    <div class="cert-brand">Visionary AI Education</div>
                    <div class="cert-recipient-name">Mikołaj Kutrzuba</div>
                    <div class="cert-separator"></div>
                    
                    <div class="cert-metrics">
                        <div class="metric-row">
                            <span class="metric-name">Struktura kodu HTML5:</span>
                            <span class="metric-value font-gradient">Perfekcyjna</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-name">Stylistyka & Design (CSS3):</span>
                            <span class="metric-value font-gradient">Zjawiskowa</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-name">Responsywność (RWD):</span>
                            <span class="metric-value font-gradient">100% Sprawna</span>
                        </div>
                        <div class="metric-row">
                            <span class="metric-name">Kreatywność i Interakcja:</span>
                            <span class="metric-value font-gradient">Celująca</span>
                        </div>
                    </div>
                    
                    <div class="cert-final-verdict-box">
                        <span class="cert-verdict-title">WERDYKT KOŃCOWY:</span>
                        <div class="cert-grade">OCENA 6 (CELUJĄCY) 🎓</div>
                    </div>
                </div>
                
                <p class="cert-footer-comment">
                    "Projekt wykazuje wybitną staranność, unikalną estetykę i perfekcyjne wykorzystanie nowoczesnych technik webowych. Panie Jerzy, ten uczeń w pełni zasługuje na 6!"
                </p>
                
                <button class="btn btn-primary" id="reset-scanner-btn">Skanuj ponownie</button>
            </div>
        </div>
    </div>

    <!-- Background Confetti Container -->
    <div id="confetti-canvas-container" class="confetti-container"></div>

    <!-- Script file -->
    <script src="script.js"></script>
</body>
</html>
