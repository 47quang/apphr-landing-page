import React from 'react';
import Container from '../common/Container';
import ScrollToTop from '../common/ScrollToTop';
import ContentBlock from '../components/ContentBlock';
import Introduction from '../content/introduction.json';
import MiddleBlock from '../components/MiddleBlock';
import SecondBlock from "../content/secondBlock.json";
import ThirdBlock from "../content/thirdBlock.json";
import FourthBlock from "../content/fourthBlock.json";


const HomePage = () => {
  return (
    <Container>
      <ScrollToTop />

      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="designer_1.svg"
      />
      <MiddleBlock title="Dịch vụ" />
      <ContentBlock
        type="right"
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
        title={FourthBlock.title}
        content={FourthBlock.text}
        button={FourthBlock.button}
        icon="work_time.svg"
      />
    </Container>
  );
};

export default HomePage;
