'use client';

import React, { useEffect } from 'react';

type PageHeadProps = {
    headTitle?: string;
};

const PageHead: React.FC<PageHeadProps> = ({ headTitle }) => {
    useEffect(() => {
        if (typeof document !== 'undefined' && headTitle) {
            document.title = headTitle;
        }
    }, [headTitle]);

    return null;
};

export default PageHead;
