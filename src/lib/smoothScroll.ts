/**
 * Smooth scrolling utility functions
 * Fixed to provide consistent, pixel-perfect section navigation
 */

/**
 * Scroll to an element with a specific offset
 * @param elementId - The ID of the element to scroll to
 * @param offset - Offset in pixels from the top (default: 0)
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

/**
 * Scroll to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Scroll to a section with optimized offset for clean section isolation
 * 
 * Strategy: Scroll to section top with small negative offset to show clean background
 * Ensures previous sections are completely hidden from viewport
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Get the section wrapper's absolute position
  const currentScroll = window.pageYOffset;
  const elementPosition = element.getBoundingClientRect().top;
  const absoluteElementTop = currentScroll + elementPosition;

  // Scroll slightly past the section top to completely hide previous section
  // This ensures the previous section's bottom padding/margin is fully hidden  
  const CLEAN_OFFSET = 10; // Scroll 10px past section top for clean isolation
  
  const targetScrollPosition = absoluteElementTop + CLEAN_OFFSET;
  
  window.scrollTo({
    top: targetScrollPosition,
    behavior: 'smooth'
  });
};
