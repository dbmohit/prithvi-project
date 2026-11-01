/**
 * PRITHVI Website - Interactive Logic
 * Flowchart filtering, modals, smooth navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Work Package Filter & Flowchart Highlight
  const filterBtns = document.querySelectorAll('.flowchart-btn');
  const wpBoxes = document.querySelectorAll('.wp-box');
  const sectorCards = document.querySelectorAll('.sector-flow-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      wpBoxes.forEach(box => {
        const boxWp = box.getAttribute('data-wp');
        if (filter === 'all' || boxWp === filter) {
          box.style.opacity = '1';
          box.classList.add('active-filter');
        } else {
          box.style.opacity = '0.35';
          box.classList.remove('active-filter');
        }
      });

      // Highlight sectoral cards if WP3 is selected
      if (filter === 'wp3') {
        sectorCards.forEach(sc => {
          sc.style.borderColor = 'var(--prithvi-gold)';
          sc.style.boxShadow = '0 0 15px rgba(255, 190, 11, 0.3)';
        });
      } else {
        sectorCards.forEach(sc => {
          sc.style.borderColor = '';
          sc.style.boxShadow = '';
        });
      }
    });
  });

  // Proposal Schematic Modal
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const schematicModal = document.getElementById('schematicModal');

  if (openModalBtn && schematicModal) {
    openModalBtn.addEventListener('click', () => {
      schematicModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        schematicModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }

    schematicModal.addEventListener('click', (e) => {
      if (e.target === schematicModal) {
        schematicModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
});
