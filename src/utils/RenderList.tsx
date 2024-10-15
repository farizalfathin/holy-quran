import { Children, ReactNode } from "react";

export default function RenderList({
  of,
  status = "success",
  loadingElement,
  failedElement,
  render,
}: {
  of: object[];
  status: "loading" | "fail" | "success";
  loadingElement?: ReactNode;
  failedElement?: ReactNode;
  render: (item: any, index: number) => ReactNode;
}) {
  if (status === "loading") {
    return loadingElement;
  }

  if (status === "fail") {
    return failedElement;
  }

  return Children.toArray(of.map((item, index) => render(item, index)));
}
