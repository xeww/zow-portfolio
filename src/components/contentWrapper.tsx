import type { ReactNode } from "react";

//1280px is usually decent for max width
export default function ContentWrapper({
  children,
  maxWidth,
  px,
  py,
}: {
  children: ReactNode;
  maxWidth: string;
  px: number;
  py: number;
}) {
  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: maxWidth,
        paddingLeft: px,
        paddingRight: px,
        paddingTop: py,
        paddingBottom: py,
      }}
    >
      {children}
    </div>
  );
}
