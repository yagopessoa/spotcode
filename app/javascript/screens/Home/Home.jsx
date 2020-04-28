import React from 'react';
import { Columns } from 'react-bulma-components';
import SectionWrapper from '../../components/common/SectionWrapper';
import { MainHeading, DescriptionList, SubscribeButton } from './Home.styles';

const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading>
            SEU APP DE <br />
            <span className="has-text-success">MÚSICA</span>
          </MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column
          mobile={{ size: 8, offset: 1 }}
          desktop={{ size: 4, offset: 2 }}
        >
          <DescriptionList>
            <li>
              Suas músicas <b>Favoritas</b>
            </li>
            <li>
              Seus <b>Podcasts</b>
            </li>
            <li>
              Os <b>Lançamentos</b>
            </li>
            <li>
              As novas <b>Descobertas</b>
            </li>
          </DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
          <a href="users/sign_up">
            <SubscribeButton>CADASTRAR AGORA</SubscribeButton>
          </a>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
