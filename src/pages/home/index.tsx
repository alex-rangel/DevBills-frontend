import { Logo } from '../../components/logo';
import { Button } from '../../components/button';
import { Filters, Header, InputGroup, Main, Section } from './style';
import { Title } from '../../components/title';
import { Input } from '../../components/input';

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
            <InputGroup>
              <Input variant='dark' label='Inicio' placeholder="dd/mm/yyyy"/>
              <Input variant='dark' label='Fim' placeholder="dd/mm/yyyy"/>
            </InputGroup>
          </Filters>
          
        </Section>
      </Main>
    </>
  );
}
