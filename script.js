// Smooth scroll behavior for better UX
document.addEventListener('DOMContentLoaded', function() {
  
  // Register button functionality
  const registerBtn = document.getElementById('registerBtn');
  
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      // Add smooth animation
      registerBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        registerBtn.style.transform = '';
      }, 150);
      
      // Here you can add your registration logic
      // For example: open a form, redirect to a registration page, etc.
      handleRegistration();
    });
  }

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Add hover effects to detail cards
  const detailCards = document.querySelectorAll('.detail-card');
  detailCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Animate numbers or add any other interactive elements
  animateOnScroll();
});

// Registration handler
function handleRegistration() {
  // Redirect to Google Form registration page
  window.open('https://forms.gle/KEpS4oYtcZS1Muo66', '_blank');
}

// Additional scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll('.detail-card, .content-card, .eligibility-card, .privacy-card');
  
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(el);
  });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  // Allow Enter key to trigger register button
  if (e.key === 'Enter' && document.activeElement === document.body) {
    const registerBtn = document.getElementById('registerBtn');
    if (registerBtn) {
      registerBtn.focus();
    }
  }
});
