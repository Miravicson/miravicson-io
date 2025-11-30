"use client";
import { Fragment, useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { download } from "@/lib/download";
import { useSearchParams } from "next/navigation";
import styles from "./style.module.css";
import ViewAllButton from "@/components/view-all-button";
import Loader from "../loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const CustomPdfViewer: React.FC = () => {
  const resumeFilePath = "/pdf/resume-2.pdf";
  const [numPages, setNumPages] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const shouldDownload = searchParams.get("download");

  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(nextNumPages);
  };

  const handleDownload = useCallback(() => {
    download(resumeFilePath, "Victor Ughonu Resume.pdf");
  }, []);

  useEffect(() => {
    if (shouldDownload === "true") {
      handleDownload();
    }
  }, [handleDownload, shouldDownload]);

  return (
    <div>
      <div>
        <Document
          file={resumeFilePath}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loader text="Building resume" />}
        >
          {numPages !== null &&
            Array.from({ length: numPages }, (_, index) => (
              <Fragment key={index}>
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  className={` ${styles.Page}`}
                  loading=""
                />
                <br />
              </Fragment>
            ))}
        </Document>
      </div>
      <div className={`py-8 flex justify-center`}>
        <ViewAllButton onClick={handleDownload}>Download Resume</ViewAllButton>
      </div>
    </div>
  );
};

export default CustomPdfViewer;
