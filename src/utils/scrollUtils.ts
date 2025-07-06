/**
 * Smooth scroll to a section with navbar height offset
 * @param targetId - The ID of the target section (without #)
 * @param offset - Additional offset in pixels (default: 0)
 * @param mobileTargetId - (Optional) The ID of the mobile-specific target section (without #)
 */
export function scrollToSection(
  targetId: string,
  offset: number = 0,
  mobileTargetId?: string
): void {
  // Detect if on mobile (simple check)
  const isMobile = window.innerWidth <= 900
  const finalTargetId = isMobile && mobileTargetId ? mobileTargetId : targetId
  const targetElement = document.getElementById(finalTargetId)
  if (!targetElement) {
    console.warn(`Element with id "${finalTargetId}" not found`)
    return
  }

  // Get navbar height (assuming it's fixed positioned)
  const navbar = document.querySelector('nav[role="navigation"]') as HTMLElement
  const navbarHeight = navbar ? navbar.offsetHeight + 20 : 100 // 20px extra padding
  const additionalOffset = 16 // 1rem = 16px

  // Calculate target position
  let targetPosition = targetElement.offsetTop - navbarHeight - additionalOffset - offset
  // Add another 1rem for mobile
  if (isMobile) {
    targetPosition -= 16
  }

  // Smooth scroll to target
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  })
}

/**
 * Handle click on anchor links with smooth scrolling
 * @param event - The click event
 * @param targetId - The target section ID (without #)
 * @param offset - Additional offset in pixels (default: 0)
 * @param mobileTargetId - (Optional) The ID of the mobile-specific target section (without #)
 */
export function handleAnchorClick(
  event: Event,
  targetId: string,
  offset: number = 0,
  mobileTargetId?: string
): void {
  event.preventDefault()
  scrollToSection(targetId, offset, mobileTargetId)
}
