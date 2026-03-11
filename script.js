tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        deepSpace: '#020617',
                    }
                }
            }
        }
    


        // --- DATA ---
        const SKILLS = [
            { name: 'HTML', icon: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.316-.002.692 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414H5.405l-1.13-1.25h15.458l-1.182 13.35-5.145 1.44-5.149-1.44-.33-4.35h2.61l.18 2.11 2.95.81 2.91-.804.326-3.426H8.531z' },
            { name: 'CSS', icon: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.316-.002.692 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414H5.405l-1.13-1.25h15.458l-1.182 13.35-5.145 1.44-5.149-1.44-.33-4.35h2.61l.18 2.11 2.95.81 2.91-.804.326-3.426H8.531z' },
            { name: 'JavaScript', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.78-5.74c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l3.54-3.54c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L9.22 14.26z' },
            { name: 'Java', icon: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z' },
            { name: 'Python', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z' },
            { name: 'SQL', icon: 'M12 2C9.24 2 7 3.79 7 6v12c0 2.21 2.24 4 5 4s5-1.79 5-4V6c0-2.21-2.24-4-5-4zm0 2c2.21 0 4 1.34 4 3s-1.79 3-4 3-4-1.34-4-3 1.79-3 4-3zm0 14c-2.21 0-4-1.34-4-3V9.67c.88.82 2.32 1.33 4 1.33s3.12-.51 4-1.33V15c0 1.66-1.79 3-4 3zm0 2c-2.21 0-4-1.34-4-3v-.33c.88.82 2.32 1.33 4 1.33s3.12-.51 4-1.33V19c0 1.66-1.79 3-4 3z' }
        ];

        const ICONS = {
            npm: 'M20 7h-9L9 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 10H4V9h16v8z',
            web: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
            design: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9s1.5.67 1.5 1.5S7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
        };

        const PROJECTS = [
            { id: 1, category: 'npm', title: 'SkillPlan', description: 'Comprehensive npm package to architect career learning paths.', tools: ['Node.js', 'JSON', 'Terminal UI'], tags: ['NPM', 'Node.js'], icon: 'npm', demoLink: 'https://skill-planner.onrender.com/', codeLink: 'https://github.com/gguhanr/Skill-planner.git' },
            { id: 2, category: 'npm', title: 'QRCode_Secure', description: 'Secure QR code generation utility with encrypted metadata.', tools: ['JavaScript', 'CryptoJS', 'npm'], tags: ['NPM', 'Security'], icon: 'npm', codeLink: 'https://github.com/gguhanr/QRCode_Secure.git' },
            { id: 3, category: 'web', title: 'Web ZIP Utility', description: 'Browser-based tool for compressing and extracting ZIP files.', tools: ['Vanilla JS', 'JSZip', 'File API'], tags: ['Vanilla JS', 'Utility'], icon: 'web', codeLink: '#', demoLink: '#' },
            { id: 4, category: 'web', title: 'Responsive Portfolio', description: 'High-performance portfolio with GSAP animations.', tools: ['HTML5', 'Tailwind', 'Vanilla JS'], tags: ['Tailwind', 'HTML/CSS'], icon: 'web', codeLink: '#', demoLink: '#' },
            { id: 5, category: 'web', title: 'Inventory Management', description: 'Real-time stock tracking dashboard for small businesses.', tools: ['React', 'Firebase', 'Chart.js'], tags: ['React', 'Management'], icon: 'web', codeLink: '#', demoLink: '#' },
            { id: 6, category: 'design', title: 'System Design Samples', description: 'Curated collection of enterprise UI components.', tools: ['Figma', 'UI Kits'], tags: ['Figma', 'UI/UX'], icon: 'design', demoLink: '#' }
        ];

        const canvas = document.getElementById('starCanvas');
        const ctx = canvas.getContext('2d');
        let stars = [];

        function initStars() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            stars = [];
            const count = Math.floor((canvas.width * canvas.height) / 2000);
            for (let i = 0; i < count; i++) {
                stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, size: Math.random() * 2, speed: Math.random() * 0.3 + 0.05, opacity: Math.random() });
            }
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.y -= star.speed;
                if (star.y < 0) star.y = canvas.height;
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animateStars);
        }

        function handleReveal() {
            document.querySelectorAll('.reveal').forEach(el => {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight - 50) el.classList.add('active');
            });
        }

        function renderSkills() {
            const grid = document.getElementById('skillsGrid');
            if (!grid) return;
            grid.innerHTML = SKILLS.map(skill => `
                <div class="glass p-8 md:p-12 rounded-[2rem] hover:border-blue-500 transition-all hover:-translate-y-4 group">
                    <svg class="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-slate-500 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="${skill.icon}"/></svg>
                    <h4 class="font-black tracking-widest text-[10px] md:text-sm uppercase text-slate-900 dark:text-white">${skill.name}</h4>
                </div>
            `).join('');
        }

        function renderProjects(filter = 'all') {
            const grid = document.getElementById('projectsGrid');
            if (!grid) return;
            grid.innerHTML = PROJECTS
                .filter(p => filter === 'all' || p.category === filter)
                .map(p => `
                    <div class="group relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-xl reveal border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 flex flex-col transition-all duration-700 hover:-translate-y-6 rgb-card-glow cursor-default">
                        <div class="absolute top-10 right-10 pointer-events-none opacity-[0.03] dark:opacity-5 transition-opacity duration-700">
                             <svg class="w-40 h-40 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="${ICONS[p.icon]}"/></svg>
                        </div>
                        <div class="p-8 md:p-12 lg:p-14 flex-grow flex flex-col relative z-10">
                            <div class="mb-8 w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/5 border border-blue-500/20 shadow-inner group-hover:scale-110 transition-all duration-500">
                                <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="${ICONS[p.icon]}"/></svg>
                            </div>
                            <div class="flex gap-2 mb-6">
                                ${p.tags.map(t => `<span class="text-[8px] uppercase font-black tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/20">${t}</span>`).join('')}
                            </div>
                            <h4 class="text-3xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-blue-500 transition-all duration-500">${p.title}</h4>
                            <p class="text-slate-600 dark:text-slate-400 text-base mb-10 leading-relaxed font-medium">${p.description}</p>
                            <div class="mt-auto">
                                <div class="flex flex-wrap gap-2 mb-10">
                                    ${p.tools.map(tool => `<span class="text-[10px] font-bold text-slate-700 dark:text-slate-300 py-1.5 px-4 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">${tool}</span>`).join('')}
                                </div>
                                <div class="flex flex-wrap gap-4">
                                    ${p.demoLink ? `<a href="${p.demoLink}" target="_blank" class="flex-1 min-w-[120px] text-center px-6 py-4 bg-blue-600 text-white rounded-[1.25rem] font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-[1.03] active:scale-95 shadow-xl shadow-blue-500/25">Live Demo</a>` : ''}
                                    ${p.codeLink ? `<a href="${p.codeLink}" target="_blank" class="flex-1 min-w-[120px] text-center px-6 py-4 bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-[1.25rem] font-black text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-white/20 transition-all hover:scale-[1.03] active:scale-95">Source</a>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            handleReveal();
        }

        document.addEventListener('DOMContentLoaded', () => {
            initStars();
            animateStars();
            renderSkills();
            renderProjects();
            handleReveal();

            const menuBtn = document.getElementById('menuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            const closeMenu = document.getElementById('closeMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const navbar = document.getElementById('navbar');
            
            const openMobileMenu = () => {
                mobileMenu.classList.add('active');
                menuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            };

            const closeMobileMenu = () => {
                mobileMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            };

            if(menuBtn) menuBtn.onclick = openMobileMenu;
            if(closeMenu) closeMenu.onclick = closeMobileMenu;
            if(menuOverlay) menuOverlay.onclick = closeMobileMenu;
            
            document.querySelectorAll('.mobile-link').forEach(link => link.onclick = closeMobileMenu);

            const toggleTheme = () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                document.getElementById('sunIcon').classList.toggle('hidden', !isDark);
                document.getElementById('moonIcon').classList.toggle('hidden', isDark);
            };
            
            document.getElementById('themeToggle').onclick = toggleTheme;
            document.getElementById('mobileThemeToggle').onclick = toggleTheme;

            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.getElementById('sunIcon').classList.remove('hidden');
                document.getElementById('moonIcon').classList.add('hidden');
            }

            const words = ["Frontend Architect", "NPM Contributor", "UI Designer"];
            let wordIdx = 0, charIdx = 0, deleting = false;
            function type() {
                const curr = words[wordIdx];
                const typewriterEl = document.getElementById('typewriter');
                if (!typewriterEl) return;
                const text = deleting ? curr.substring(0, charIdx--) : curr.substring(0, charIdx++);
                typewriterEl.innerText = text;
                if (!deleting && charIdx === curr.length + 1) { deleting = true; setTimeout(type, 2000); }
                else if (deleting && charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; setTimeout(type, 800); }
                else { setTimeout(type, deleting ? 50 : 100); }
            }
            type();

            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.onclick = () => {
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('active', 'bg-blue-600', 'text-white');
                        b.classList.add('text-slate-400');
                    });
                    btn.classList.add('active', 'bg-blue-600', 'text-white');
                    btn.classList.remove('text-slate-400');
                    renderProjects(btn.dataset.filter);
                };
            });

            const contactForm = document.getElementById('contactForm');
            contactForm.onsubmit = (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                const text = `🚀 New Inquiry from Portfolio\n\n👤 Name: ${name}\n📧 Email: ${email}\n\n💬 Message: ${message}`;
                window.open(`https://t.me/mad_tamizha?text=${encodeURIComponent(text)}`, '_blank');
            };

            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('nav-glass');
                    navbar.classList.remove('py-6', 'md:py-8');
                    navbar.classList.add('py-4', 'md:py-5');
                } else {
                    navbar.classList.remove('nav-glass');
                    navbar.classList.remove('py-4', 'md:py-5');
                    navbar.classList.add('py-6', 'md:py-8');
                }
                handleReveal();
            });

            window.addEventListener('resize', () => {
                initStars();
                if (window.innerWidth >= 768) closeMobileMenu();
            });
        });