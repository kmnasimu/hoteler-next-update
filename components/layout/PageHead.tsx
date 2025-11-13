import Head from 'next/head';
import React from 'react';

type PageHeadProps = {
    headTitle?: React.ReactNode;
};

const PageHead: React.FC<PageHeadProps> = ({ headTitle }) => {
    return (
        <Head>
            <title>{headTitle ? headTitle : "Hoteler - Hotel Booking React Next JS Template"}</title>
            <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
        </Head>
    );
};

export default PageHead;
