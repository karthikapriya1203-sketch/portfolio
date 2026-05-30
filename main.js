document.addEventListener('DOMContentLoaded', () => {
    // ===============================
    // ASSIGNMENTS DATA (15 ITEMS)
    // ===============================
    const assignmentsData = [
        { title: "Scratch Project", cert: "https://drive.google.com/file/d/1AJCLgBxq05DA15i7rNrk8l8oxUD9iIzg/view?usp=sharing" },
        { title: "TinkerCAD Simulation Project", cert: "https://drive.google.com/file/d/1neZWjnqEfHKTyK6SjeebHrEJ_vXK3GK-/view?usp=drive_link" },
        { title: "MIT App Inventor Project", cert: "https://drive.google.com/file/d/1se02QPXA195_Phs0AZm00CLfNrbPT3Nl/view?usp=drive_link" },
        { title: "Fusion360 Autocad Project", cert: "https://drive.google.com/file/d/1OhA6VzuBLgsythkm6VkeV_etD_Kbcj1M/view?usp=drive_link" },
        { title: "System Thinking", cert: "https://docs.google.com/presentation/d/1l6L3dDx0uL3SGIN5-RGtsPll30Cls9u-/edit?usp=sharing&ouid=117700077634656397693&rtpof=true&sd=true" },
        { title: "Laser Cutting", cert: "https://drive.google.com/file/d/1kEKzYCecxfTaO2VZDHsLsgQ_VE9OYGS5/view?usp=sharing", cert1: "https://drive.google.com/drive/folders/1E8blCKK_BL4uUnb79RD58sl7mC40YPvg?usp=sharing" },
        { title: "3D Printing", cert: "https://drive.google.com/drive/folders/1iWUJOA88V5EX5mx5Q3g8DkI8xbrxiNSo?usp=sharing" },
        { title: "Embedded System", cert: "https://drive.google.com/file/d/1C7EKYq1pBnEr2L_jflIVR2voYnrOun5l/view?usp=sharing" },
        { title: "Raindrop Sensor & EAP Actuator", cert: "https://drive.google.com/file/d/1xweJRwsFC4niZsT56QutkBqJ3lvcnNTw/view?usp=sharing" },
        { title: "Raindrop Sensor & EAP Actuator", cert: "https://drive.google.com/file/d/1xweJRwsFC4niZsT56QutkBqJ3lvcnNTw/view?usp=sharing" },
        { title: "Django App Development", cert: "https://drive.google.com/drive/folders/11zXebY9RHNbxeG1hPc9MLOREHAnQF38Z?usp=sharing" },
        { title: "IOT-Assignment", cert: "https://docs.google.com/document/d/1HhtA4qYYbTyQvMh-4x76sx1pM2ymN2wR/edit?usp=sharing&ouid=117700077634656397693&rtpof=true&sd=true" },
        { title: "Calculator Application", cert: "https://drive.google.com/drive/folders/1ur3_MWV78aCBCv-u_6i_UZNDV__REt0v?usp=sharing" },
        { title: "SOS Application", cert: "https://drive.google.com/drive/folders/1g-LIG-eXcdIf-CTWqSIzj8F8D3I8Clop?usp=sharing" }
    ];

    // ===============================
    // POPULATE ASSIGNMENTS
    // ===============================
    const assignmentsContainer = document.getElementById('assignments-container');

    if (assignmentsContainer) {
        assignmentsData.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card assignment-card show-card';

            // Staggered entrance
            card.style.animation = `cardEnter 0.9s ease forwards`;
            card.style.animationDelay = `${index * 0.12}s`;

            let buttonsHtml = `<button class="btn-sm btn-view" data-cert="${item.cert}">View Report</button>`;
            if (item.cert1) {
                buttonsHtml += `<button class="btn-sm btn-view" data-cert="${item.cert1}">View Files </button>`;
            }

            card.innerHTML = `
                <div class="card-icon"><i class="fas fa-file-alt"></i></div>
                <h4>${item.title}</h4>
                <p style="font-size:0.85rem;color:var(--text-muted);">
                    Assignment ${index + 1}
                </p>
                <div style="margin-top:1.2rem;display:flex;gap:0.5rem;flex-wrap:wrap;">
                    ${buttonsHtml}
                </div>
            `;
            assignmentsContainer.appendChild(card);

            // 3D Tilt Effect
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = -(y / rect.height - 0.5) * 14;
                const rotateY = (x / rect.width - 0.5) * 14;

                card.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.05)
                `;

                // Set CSS variables for spotlight effect
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                card.style.setProperty('--x', `${xPercent}%`);
                card.style.setProperty('--y', `${yPercent}%`);
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    scale(1)
                `;
            });
        });
    }

    // ===============================
    // BUTTON CLICK HANDLER (DELEGATED)
    // ===============================
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-view')) {
            const cert = e.target.dataset.cert;
            if (cert && cert !== "undefined") {
                window.open(cert, '_blank');
            }
        }
        if (e.target.classList.contains('btn-site')) {
            const site = e.target.dataset.site;
            if (site && site !== "undefined") {
                window.open(site, '_blank');
            }
        }

        // Experience Certificate Modal
        if (e.target.classList.contains("btn-view") && e.target.closest('#experience')) {
            const itemName = e.target.getAttribute('data-item');
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            if (modal && modalBody) {
                modalBody.innerHTML = `
                    <h2 class="section-title" style="font-size: 1.8rem;">${itemName}</h2>
                    <div style="aspect-ratio: 16/9; background: #f3f4f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-top: 2rem; border: 2px dashed var(--border-color);">
                        <p style="color: var(--text-muted);"><i class="fas fa-image" style="font-size: 3rem; display: block; margin: 0 auto 1rem; text-align: center;"></i>Certificate/Document Placeholder for ${itemName}</p>
                    </div>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: flex-end;">
                         <a href="#" class="btn btn-primary">Download PDF</a>
                    </div>
                `;
                modal.style.display = 'flex';
            }
        }
    });

    // ===============================
    // INTERSECTION OBSERVER
    // ===============================
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // ===============================
    // ACTIVE LINK HIGHLIGHTING
    // ===============================
    const navLinks = document.querySelectorAll('.nav-item a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // ===============================
    // MODAL CLOSE LOGIC
    // ===============================
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // ===============================
    // MAGIC MOUSE MOVE EFFECT
    // ===============================
    const projectSection = document.getElementById("projects");
    const magicCursor = document.querySelector(".magic-cursor");

    if (projectSection && magicCursor) {
        projectSection.addEventListener("mousemove", (e) => {
            const rect = projectSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            magicCursor.style.left = `${x}px`;
            magicCursor.style.top = `${y}px`;
            magicCursor.style.opacity = "1";
        });

        projectSection.addEventListener("mouseleave", () => {
            magicCursor.style.opacity = "0";
        });
    }
});
