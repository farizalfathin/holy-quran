import { ReactNode } from "react";

export default function Tooltip({
  children,
  text,
  position = "right",
}: {
  children: ReactNode;
  text: string;
  position?: "left" | "top" | "right" | "bottom";
}) {
  return (
    <div className="relative group">
      {children}
      <span
        className={`absolute ${
          position === "right"
            ? "left-10 bottom-1/2 transform translate-y-1/2"
            : position === "left"
            ? "right-10 bottom-1/2 transform translate-y-1/2"
            : position === "top"
            ? "left-1/2 bottom-10 transform -translate-x-1/2"
            : "left-1/2 top-10 transform -translate-x-1/2"
        } hidden group-hover:block bg-secondary-700 text-white text-xs py-1 px-2 rounded`}>
        {text}
      </span>
    </div>
  );
}
