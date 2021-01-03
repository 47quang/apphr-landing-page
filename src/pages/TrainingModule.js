import React from 'react';
import Container from '../common/Container';
import ScrollToTop from '../common/ScrollToTop';
import MiddleBlock from '../components/MiddleBlock';
import Quotation from '../components/Quotation';
import Customer from '../components/Customer';
import HeaderOnPage from '../components/HeaderOnPage';
import ContactForm from '../components/ContactForm';
import Introduction from '../components/IntroductionTraining';


import { useTranslation } from 'react-i18next';

const menu = ['Introduction', 'Quotation', 'Customer', 'Contact'];



const TrainingModule = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <ScrollToTop />
        <HeaderOnPage menu={menu}></HeaderOnPage>
      </Container>
      <div style={{width: '100%', background: '#e7e7e7', paddingBottom: '50px'}}>
      <MiddleBlock id="Introduction" title={t('Managing the staff training becomes easier')} />
      <Introduction></Introduction>
      </div>
      <Container>
        <MiddleBlock id="Quotation" title={t('Quotation')} />
        <Quotation></Quotation>
      </Container>
      <MiddleBlock id="Customer" title={t('Customer')} />
      <Customer></Customer>
      <MiddleBlock id="Contact" title={t('Contact')} />
      <ContactForm></ContactForm>
    </>
  );
};

export default TrainingModule;
