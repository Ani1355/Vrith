/**
 * Smooth scrolling utility functions
 */

export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const scrollToSection = (sectionId: string) => {
  // For process section, scroll to show only the process section with clean background
  if (sectionId === 'process') {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to the top of the process section with extra offset to hide hero
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  } else {
    // For other sections, use normal offset
    smoothScrollTo(sectionId, 80);
  }
};
