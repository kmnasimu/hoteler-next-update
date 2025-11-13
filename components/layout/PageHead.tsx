import React from 'react';

type PageHeadProps = {
    headTitle?: React.ReactNode;
};

// Note: In App Router, metadata should be handled via metadata export in page files
// This component is kept for backward compatibility but does nothing in App Router
const PageHead: React.FC<PageHeadProps> = () => {
    // In App Router, metadata is handled via metadata export, not Head component
    return null;
};

export default PageHead;
