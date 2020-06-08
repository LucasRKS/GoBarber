import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrros from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório.'),
        email: Yup.string()
          .required('O e-mail é obrigatório')
          .email('Insira um e-mail válido.'),
        password: Yup.string().min(6, 'A senha deve ter no mínimo 6 dígitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (e) {
      const errors = getValidationErrros(e);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Informe seu Nome" />
          <Input name="email" icon={FiMail} placeholder="Informe seu E-mail" />
          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Informe sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="back">
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
