import { Logo } from '../../components/logo';
import { Button } from '../../components/button';
import { Filters, Header, Main, Section } from './style';
import { Title } from '../../components/title';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button>Nova transação</Button>
          <Button>Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title='saldo' subtitle='Receitas e despesas no período'/>
          </Filters>
        </Section>
      </Main>
    </>
  );
}
