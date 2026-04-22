// View Switching Logic
const viewHome = document.getElementById('view-home');
const viewTos = document.getElementById('view-tos');
const navLinks = document.getElementById('nav-links');
const navLogo = document.getElementById('nav-logo');

function showTos(e) {
    if (e) e.preventDefault();
    viewHome.classList.remove('block');
    viewHome.classList.add('hidden');

    viewTos.classList.remove('hidden');
    viewTos.classList.add('block');

    // Hide standard nav links when in ToS
    navLinks.classList.remove('md:flex');
    navLinks.classList.add('hidden');

    window.scrollTo(0, 0);
}

function showHome(e) {
    if (e) e.preventDefault();
    viewTos.classList.remove('block');
    viewTos.classList.add('hidden');

    viewHome.classList.remove('hidden');
    viewHome.classList.add('block');

    // Restore standard nav links
    navLinks.classList.remove('hidden');
    navLinks.classList.add('md:flex');

    window.scrollTo(0, 0);
}

// Attach event listener to logo
navLogo.addEventListener('click', showHome);

// Interactive Sidebar Script for Dashboard Mockup
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.sidebar-nav-item');
    const titleElement = document.getElementById('dashboard-title');

    const panelMap = {
        'Dispatch Calendar': 'content-calendar',
        'Clients': 'content-clients',
        'Tickets': 'content-tickets',
        'Invoices': 'content-invoices',
        'Products & Assets': 'content-products'
    };

    const activeClasses = ['bg-blue-100', 'text-blue-700', 'border-blue-200'];
    const inactiveClasses = ['border-transparent', 'text-slate-600', 'hover:bg-blue-50', 'hover:text-blue-700'];

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => {
                nav.classList.remove(...activeClasses);
                nav.classList.add(...inactiveClasses);
            });

            item.classList.remove(...inactiveClasses);
            item.classList.add(...activeClasses);

            const targetName = item.dataset.target;
            titleElement.textContent = targetName === 'Dispatch Calendar' ? 'Dispatch & Time Calendar' : targetName;

            Object.values(panelMap).forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }
            });

            const activeEl = document.getElementById(panelMap[targetName]);
            if (activeEl) {
                activeEl.classList.remove('hidden');
                activeEl.classList.add('flex');
            }
        });
    });
});
