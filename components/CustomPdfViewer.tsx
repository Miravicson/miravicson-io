import { Fragment, useCallback, useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import { download } from '@lib/download';
import { useRouter } from 'next/router';
import styles from './CustomPdfViewer.module.css';
import Loader from './Loader';
import ViewAllButton from './ViewAllButton';

const CustomPdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState(null);
  const router = useRouter();
  const { download: shouldDownload } = router.query;

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  const handleDownload = useCallback(() => {
    download('./pdf/resume.pdf', 'Victor Ughonu Resume.pdf');
  }, []);

  useEffect(() => {
    if (shouldDownload === 'true') {
      handleDownload();
    }
  }, [handleDownload, shouldDownload]);

  return (
    <div>
      <div className={`py-8 flex justify-center`}>
        <ViewAllButton onClick={handleDownload}>Download Resume</ViewAllButton>
      </div>
      <div>
        <Document
          file="./pdf/resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Loader text="Building resume" />}
        >
          {Array.from({ length: numPages }, (_, index) => (
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
    </div>
  );
};

export default CustomPdfViewer;
