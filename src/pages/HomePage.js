import React from 'react';
import Container from '../common/Container';
import ScrollToTop from '../common/ScrollToTop';
import ContentBlock from '../components/ContentBlock';
import Introduction from '../content/introduction.json';
import MiddleBlock from '../components/MiddleBlock';
import SecondBlock from '../content/secondBlock.json';
import ThirdBlock from '../content/thirdBlock.json';
import FourthBlock from '../content/fourthBlock.json';
import Quotation from '../components/Quotation';
import Customer from '../components/Customer';
import HeaderOnPage from '../components/HeaderOnPage';
import ContactForm from '../components/ContactForm';

import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const menu = ['Introduction', 'Service', 'Quotation', 'Customer', 'Contact'];
  return (
    <>
      <Container>
        <ScrollToTop />
        <HeaderOnPage menu={menu}></HeaderOnPage>
        <ContentBlock
          id="Introduction"
          type="right"
          first="true"
          title={Introduction.title}
          content={Introduction.text}
          button={Introduction.button}
          icon="designer_1.svg"
        />
        <MiddleBlock id="Service" title={t('Service')} />
        <ContentBlock
          type="right"
          mt="2"
          title={SecondBlock.title}
          content={SecondBlock.text}
          icon="mobile_login.svg"
        />
        <ContentBlock
          type="left"
          content={ThirdBlock.text}
          button={ThirdBlock.button}
          icon="data.svg"
        />
        <ContentBlock
          type="left"
          mt="10"
          title={FourthBlock.title}
          content={FourthBlock.text}
          button={FourthBlock.button}
          icon="training.svg"
        />
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

export default HomePage;
