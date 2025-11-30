"use client";
import Header from "@/components/header";
import dynamic from "next/dynamic";

const CustomPdfViewer = dynamic(
  () => import("@/components/custom-pdf-viewer/index"),
  {
    ssr: false,
  }
);

export default function Resume() {
  return (
    <>
      <Header>
        <h1 className={`font-bold leading-[1] text-[1em] m-0`}>Resume</h1>
      </Header>
      <CustomPdfViewer />
    </>
  );
}
