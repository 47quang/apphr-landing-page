import React from 'react';
import Container from '../common/Container';
import ScrollToTop from '../common/ScrollToTop';
import MiddleBlock from '../components/MiddleBlock';
import Quotation from '../components/Quotation';
import Customer from '../components/Customer';
import HeaderOnPage from '../components/HeaderOnPage';
import ContactForm from '../components/ContactForm';

import { useTranslation } from 'react-i18next';


const HrModule = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <ScrollToTop />
        <HeaderOnPage></HeaderOnPage>
        
        <MiddleBlock id="quotation" title={t('Quotation')} />
        <Quotation></Quotation>
      </Container>
      <MiddleBlock id="customer" title={t('Customer')} />
      <Customer></Customer>
      <MiddleBlock id="contact" title={t('Contact')} />
      <ContactForm></ContactForm>
    </>
  );
};

export default HrModule;
