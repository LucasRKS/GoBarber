import React from 'react';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input name="email" icon={FiMail} placeholder="Informe seu E-mail" />
        <Input name="name" icon={FiUser} placeholder="Informe seu Nome" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Informe sua senha"
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="back">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignUp;
