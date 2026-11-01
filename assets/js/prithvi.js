/**
 * PRITHVI Website - Minimalist Scientific Interactive Logic
 * Pipeline filtering, modal viewer, and mobile navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Work Package Pipeline Filter
  const filterBtns = document.querySelectorAll('.filter-btn, .flowchart-btn');
  const wpCards = document.querySelectorAll('.wp-card, .wp-box');
  const sectorNodes = document.querySelectorAll('.sector-mini-node, .sector-flow-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      wpCards.forEach(card => {
        const cardWp = card.getAttribute('data-wp');
        if (filter === 'all' || cardWp === filter) {
          card.style.opacity = '1';
          card.classList.add('active-filter');
        } else {
          card.style.opacity = '0.35';
          card.classList.remove('active-filter');
        }
      });

      // Highlight sectoral cards if WP3 is selected
      if (filter === 'wp3') {
        sectorNodes.forEach(node => {
          node.style.borderColor = 'var(--c-teal)';
          node.style.backgroundColor = '#f0fdfa';
        });
      } else {
        sectorNodes.forEach(node => {
          node.style.borderColor = '';
          node.style.backgroundColor = '';
        });
      }
    });
  });

  // Schematic Modal (Figure 1)
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
