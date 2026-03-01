export const MOBILE_QUERY = "(max-width: 768px)";
export const MOBILE_ENQUIRY_EVENT = "open-mobile-enquiry";

export function openEnquiryForm({ serviceTitle = "", setDesktopFormData } = {}) {
  const isMobile =
    typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches;

  if (serviceTitle && typeof setDesktopFormData === "function") {
    setDesktopFormData((prev) => ({
      ...prev,
      service: serviceTitle,
    }));
  }

  if (isMobile) {
    window.dispatchEvent(
      new CustomEvent(MOBILE_ENQUIRY_EVENT, {
        detail: { service: serviceTitle },
      })
    );
    return;
  }

  const formContainer = document.querySelector(".callback-form.desktop-form");
  if (!formContainer) return;

  formContainer.scrollIntoView({ behavior: "smooth", block: "center" });
  const firstField = formContainer.querySelector("input, select, textarea");
  firstField?.focus();
}
