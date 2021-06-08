import React from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../common/Container';
import ScrollToTop from '../common/ScrollToTop';
import ContactForm from '../components/ContactForm';
import HeaderOnPage from '../components/HeaderOnPage';
import Introduction from '../components/IntroductionHR';
import MiddleBlock from '../components/MiddleBlock';
import Quotation from '../components/Quotation';


const menu = ['Introduction', 'Quotation', 'Contact'];

const HrModule = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <ScrollToTop />
        <HeaderOnPage menu={menu}></HeaderOnPage>
      </Container>
      <div style={{width: '100%', background: '#f1f1f1', paddingBottom: '50px'}}>
      <MiddleBlock id="Introduction" title={t('Employee timekeeping management becomes easier')} />
      <Introduction/>
      </div>
      <Container>
        <MiddleBlock id="Quotation" title={t('Quotation')} />
        <Quotation></Quotation>
      </Container>
      {/* <MiddleBlock id="Customer" title={t('Customer')} />
      <Customer></Customer> */}
      <MiddleBlock id="Contact" title={t('Contact')} />
      <ContactForm></ContactForm>
    </>
  );
};

export default HrModule;
