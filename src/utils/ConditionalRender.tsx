import { ReactNode } from "react";

export default function ConditionalRender({
  status,
  loadingElement,
  failedElement,
  render,
}: {
  status: "loading" | "fail" | "success";
  loadingElement?: ReactNode;
  failedElement?: ReactNode;
  render: ReactNode | null;
}) {
  if (status === "loading") {
    return loadingElement;
  }

  if (status === "fail") {
    return failedElement;
  }

  return render;
}
