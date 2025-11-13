import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
  pageName: string;
}

export default function PageTitle({ pageName }: PageTitleProps) {
    return (
        <section className="page-title" style={{ backgroundImage: 'url(images/background/page-title-bg.png)' }}>
            <div className="auto-container">
                <div className="title-outer text-center">
                    <h1 className="title">{pageName}</h1>
                    <ul className="page-breadcrumb">
                        <li><Link href="">Home</Link></li>
                        <li>{pageName}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
