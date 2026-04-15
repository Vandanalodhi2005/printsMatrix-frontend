import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import IssueSelector from './IssueSelector';
import FooterSetup from './FooterSetup';

const SetupSelect = () => {
  return (
    <>
      <Helmet>
        <title>HP Smart App - Easy HP Printer Installation & Support</title>
      </Helmet>
      <Hero />
      <IssueSelector />
      <FooterSetup />
    </>
  );
};

export default SetupSelect;
