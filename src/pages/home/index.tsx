import { Logo } from '../../components/logo';
import { Button } from '../../components/button';
import { Filters, Header, InputGroup, Main, Section, Balance, ChartContainer, ChartContent} from './style';
import { Title } from '../../components/title';
import { Input } from '../../components/input';
import { InputMask } from '@react-input/mask';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';

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
              <InputMask
                component={Input}
                mask='dd/mm/yyyy'
                replacement={{d: /\d/, m: /\d/, y: /\d/}}
                variant='dark'
                label='Início'
                placeholder='dd/mm/yyyy'
              />
              <InputMask
                component={Input}
                mask='dd/mm/yyyy'
                replacement={{d: /\d/, m: /\d/, y: /\d/}}
                variant='dark'
                label='Fim'
                placeholder='dd/mm/yyyy'
              />
              <ButtonIcon/>
            </InputGroup>
          </Filters>
          <Balance>
            <Card title='Saldo' amount={1000000}/>
            <Card title='Saldo' amount={1000000} variant='incomes'/>
            <Card title='Saldo' amount={1000000} variant='expenses'/>
          </Balance>
          <ChartContainer>
            <header>
              <Title 
              title='Gastos' 
              subtitle='Despesas por categoria no periodo'
              />
            </header>
            <ChartContent>

            </ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Title 
              title='Evolução Financeira' 
              subtitle='Saldo, Receitas e Gastos no ano'
              />
              <div className='divInput'>
                <InputMask
                  component={Input}
                  mask='yyyy'
                  replacement={{y: /\d/}}
                  variant='black'
                  label='ano'
                  placeholder='yyyy'
                />
                <ButtonIcon/>
              </div>
            </header>
            <ChartContent>
              
            </ChartContent>
          </ChartContainer>
        </Section>
      </Main>
    </>
  );
}
