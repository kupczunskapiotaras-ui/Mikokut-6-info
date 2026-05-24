/* ==========================================================================
   VISIONARY AI EDUCATION - JAVASCRIPT CONTROLLER
   Author: Mikołaj Kutrzuba (Project for Grade 6)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initMobileNav();
    initScrollReveal();
    initGradeScanner();
});

/* 1. Header Scroll Effects */
function initScrollEffects() {
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* 2. Mobile Responsive Navigation Menu */
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle-btn');
    const navBar = document.getElementById('navigation-bar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navBar) {
        menuToggle.addEventListener('click', () => {
            const isOpen = menuToggle.classList.toggle('open');
            navBar.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navBar.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
}

/* 3. Reveal Cards on Scroll (Intersection Observer) */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observerOptions = {
        root: null, // Viewport
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Offset trigger a bit
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/* 4. Futuristic AI Grade Evaluation Skaner */
function initGradeScanner() {
    const checkGradeBtn = document.getElementById('check-grade-btn');
    const scanModal = document.getElementById('scan-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const resetScannerBtn = document.getElementById('reset-scanner-btn');
    
    const scannerView = document.getElementById('scanner-view');
    const certificateView = document.getElementById('certificate-view');
    const progressBarFill = document.getElementById('scan-progress-bar');
    const statusLabel = document.getElementById('scan-status-label');
    const consoleLogs = document.getElementById('diagnostic-console');

    // Diagnostic console messages in Polish
    const diagnosticMessages = [
        { text: '> [SYS] Inicjalizacja skanowania biometrycznego...', delay: 400, color: 'text-mint' },
        { text: '> [SYS] Łączenie z siecią neuronową Mikołaj_Brain_v6.0... Połączono.', delay: 800, color: 'text-mint' },
        { text: '> [AI] Analizowanie obrazu kamery...', delay: 1300, color: 'text-primary' },
        { text: '> [AI] Wykryto ucznia: Mikołaj Kutrzuba. Poziom skupienia: Wybitny.', delay: 1800, color: 'text-primary' },
        { text: '> [SYS] Weryfikacja struktury kodu źródłowego strony...', delay: 2300, color: 'text-purple' },
        { text: '> [SYS] HTML5: Semantyka idealna, brak błędów. Standard W3C zachowany.', delay: 2800, color: 'text-mint' },
        { text: '> [SYS] CSS3: Paleta barw z DESIGN.md wdrożona. Ambient Shadows aktywne.', delay: 3300, color: 'text-mint' },
        { text: '> [SYS] RWD: Test responsywności mobilnej... Wynik: 100% RWD sprawny.', delay: 3800, color: 'text-primary' },
        { text: '> [AI] Skanowanie poziomu kreatywności... Wykryto wbudowany Skaner AI.', delay: 4300, color: 'text-purple' },
        { text: '> [AI] Ocena kreatywności projektu: Celująca (Szóstka z Info).', delay: 4800, color: 'text-primary' },
        { text: '> [SYS] Kompilowanie raportu końcowego i generowanie certyfikatu...', delay: 5300, color: 'text-mint' },
        { text: '>> [SYS] PROCES ZAKOŃCZONY SUKCESEM. ODCZYT GOTOWY.', delay: 5800, color: 'text-mint' }
    ];

    let scanInterval = null;
    let logTimeouts = [];

    if (checkGradeBtn && scanModal && closeModalBtn) {
        // Open Modal and Start Scanner
        checkGradeBtn.addEventListener('click', () => {
            scanModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Lock background scroll
            startScan();
        });

        // Close Modal
        closeModalBtn.addEventListener('click', () => {
            closeScanModal();
        });

        // Close Modal on clicking outside the modal content card
        scanModal.addEventListener('click', (e) => {
            if (e.target === scanModal) {
                closeScanModal();
            }
        });

        // Reset and Scan Again
        if (resetScannerBtn) {
            resetScannerBtn.addEventListener('click', () => {
                startScan();
            });
        }
    }

    function closeScanModal() {
        scanModal.classList.add('hidden');
        document.body.style.overflow = ''; // Unlock scrolling
        stopScan();
    }

    function stopScan() {
        clearInterval(scanInterval);
        logTimeouts.forEach(t => clearTimeout(t));
        logTimeouts = [];
        clearConfetti();
    }

    function startScan() {
        stopScan(); // Clear any existing running processes

        // Reset Views
        scannerView.classList.remove('hidden');
        certificateView.classList.add('hidden');
        progressBarFill.style.width = '0%';
        statusLabel.textContent = 'ANALIZA AI W TOKU...';
        statusLabel.className = 'blink-text';
        consoleLogs.innerHTML = '';

        const totalScanDuration = 6000; // 6 seconds total
        const updateInterval = 50; // Update progress every 50ms
        let elapsed = 0;

        // Progress Bar Increment Loop
        scanInterval = setInterval(() => {
            elapsed += updateInterval;
            const percentage = Math.min((elapsed / totalScanDuration) * 100, 100);
            progressBarFill.style.width = `${percentage}%`;

            if (elapsed >= totalScanDuration) {
                clearInterval(scanInterval);
                finishScan();
            }
        }, updateInterval);

        // Schedule Diagnostic Console Messages
        diagnosticMessages.forEach(msg => {
            const timeout = setTimeout(() => {
                printConsoleLine(msg.text, msg.color);
            }, msg.delay);
            logTimeouts.push(timeout);
        });
    }

    function printConsoleLine(text, colorClass) {
        const line = document.createElement('div');
        line.className = `console-line ${colorClass || ''}`;
        line.textContent = text;
        consoleLogs.appendChild(line);
        
        // Auto scroll console to bottom
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }

    function finishScan() {
        statusLabel.textContent = 'UKOŃCZONO';
        statusLabel.className = 'text-mint';
        
        // Brief delay before switching to Certificate for suspense
        const switchTimeout = setTimeout(() => {
            scannerView.classList.add('hidden');
            certificateView.classList.remove('hidden');
            triggerConfettiExplosion();
        }, 600);
        logTimeouts.push(switchTimeout);
    }
}

/* 5. Custom Digital Confetti Explosion Engine */
function triggerConfettiExplosion() {
    const container = document.getElementById('confetti-canvas-container');
    if (!container) return;

    clearConfetti(); // Reset any existing particles

    const themeColors = [
        '#0040e0', // Electric Blue
        '#8127cf', // Neon Purple
        '#007b6a', // Soft Mint
        '#ff7a00', // Warm Orange
        '#ffd700', // Gold
        '#ffffff'  // White
    ];

    const particleCount = 120;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        
        // Randomize dimensions
        const size = Math.random() * 8 + 6; // 6px to 14px
        particle.style.width = `${size}px`;
        particle.style.height = `${size * (Math.random() * 0.5 + 0.75)}px`; // slight rectangle
        
        // Randomize color
        particle.style.backgroundColor = themeColors[Math.floor(Math.random() * themeColors.length)];
        
        // Starting Position (spread across horizontal width, mostly centered)
        const startX = Math.random() * viewportWidth;
        particle.style.left = `${startX}px`;
        particle.style.top = `-20px`; // start offscreen
        
        container.appendChild(particle);

        // Animation attributes
        const fallDuration = Math.random() * 3 + 2.5; // 2.5s to 5.5s
        const fallDelay = Math.random() * 0.5; // Up to 0.5s stagger
        const horizontalDrift = (Math.random() - 0.5) * 200; // -100px to 100px drift
        const spinRotation = Math.random() * 720 - 360; // rotation angle
        
        // Animate using CSS transitions
        particle.style.transition = `transform ${fallDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${fallDelay}s, opacity ${fallDuration}s ease-in ${fallDelay}s`;
        
        // Trigger position update in next frame
        requestAnimationFrame(() => {
            setTimeout(() => {
                particle.style.transform = `translate(${horizontalDrift}px, ${viewportHeight + 40}px) rotate(${spinRotation}deg)`;
                particle.style.opacity = '0';
            }, 50);
        });
    }
}

function clearConfetti() {
    const container = document.getElementById('confetti-canvas-container');
    if (container) {
        container.innerHTML = '';
    }
}
