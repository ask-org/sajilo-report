import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void; // Optional for link behavior
  href?: string; // Optional for link behavior
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  href,
  variant = "primary",
  size = "medium",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50";

  const variantStyles = {
    primary: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  // Decide whether to render a button or a link
  const content = (
    <span className={disabled ? "pointer-events-none" : ""}>{children}</span>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href} // Prevent link action if disabled
        className={styles}
        target="_blank" // Optional: use if you want to open in a new tab
        rel="noopener noreferrer" // Recommended for external links
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={styles}
      onClick={disabled ? () => {} : onClick} // Prevent onClick if disabled
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
