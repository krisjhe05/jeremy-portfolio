document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Module
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark Theme';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light Theme';
            }
        });
    }

    // 2. Counter Module
    let count = 0;
    const countBtn = document.getElementById('countBtn');
    const counterVal = document.getElementById('counterVal');
    if (countBtn && counterVal) {
        countBtn.addEventListener('click', () => {
            count++;
            counterVal.textContent = count;
        });
    }

    // 3. Dynamic Filtering Controls Module
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Viewport Adapter Tracking
    const deviceInfoBox = document.getElementById('deviceInfoBox');
    function updateMetrics() {
        if (!deviceInfoBox) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        let type = "Desktop Frame";
        if(w <= 480) type = "Mobile Phone Browser (iOS/Android)";
        else if(w <= 768) type = "Tablet Device Grid";
        
        deviceInfoBox.innerHTML = Active Viewport: <span style="color:#2563eb;">${w}px × ${h}px</span><br><small style="color:var(--text-muted); font-weight:500;">Detected Frame: ${type}</small>;
    }
    window.addEventListener('resize', updateMetrics);
    updateMetrics();

    // 5. Async API Sim
    const apiSimBtn = document.getElementById('apiSimBtn');
    const apiTargetText = document.getElementById('apiTargetText');
    if (apiSimBtn && apiTargetText) {
        apiSimBtn.addEventListener('click', () => {
            apiTargetText.style.display = 'block';
            apiTargetText.textContent = "Connecting to Data Stream...";
            
            setTimeout(() => {
                apiTargetText.textContent = "Data Package loaded successfully! [Status: 200 OK]";
                apiTargetText.style.color = "#22c55e";
            }, 1200);
        });
    }

    // 6. Form Parsing Validation
    const form = document.getElementById('showcaseForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const name = document.getElementById('clientName');
            const email = document.getElementById('clientEmail');
            const message = document.getElementById('clientMessage');
            
            if(!name || !name.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('nameError').style.display = 'none'; }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!email || !emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('emailError').style.display = 'none'; }
            
            if(!message || !message.value.trim()) {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else { document.getElementById('messageError').style.display = 'none'; }
            
            const successBox = document.getElementById('formSuccess');
            if(isValid && successBox) {
                successBox.textContent = Excellent! Secure Form verified under engineer Jeremy Medina.;
                successBox.style.display = 'block';
                form.reset();
                setTimeout(() => { successBox.style.display = 'none'; }, 5000);
            }
        });
    }
});
