import * as React from "react";

const DEFAULT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScAv8REJhNIK1eqBW0AWRw6HY9pRvmqED2sbOU_-C4Cgq5sHQ/viewform?usp=dialog";

export function RegistrationPopup({
  children,
  formUrl = DEFAULT_FORM_URL,
}: {
  children: React.ReactNode;
  formUrl?: string;
}) {
  // When any wrapped element is clicked, open the registration form in a new tab.
  const openForm = (e?: React.MouseEvent) => {
    e?.preventDefault();
    try {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      // fallback
      window.location.href = formUrl;
    }
  };

  if (React.isValidElement(children)) {
    const existingOnClick = (children as any).props?.onClick;
    const onClick = (e: React.MouseEvent) => {
      if (typeof existingOnClick === "function") existingOnClick(e);
      openForm(e);
    };

    return React.cloneElement(children as React.ReactElement, { onClick });
  }

  // Fallback for non-element children
  return (
    <button type="button" onClick={openForm} className="inline-block">
      {children}
    </button>
  );
}