import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import getValidationErrros from '../../utils/getValidationErrors';

import { Container, Content, Background, AnimationContainer } from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório.'),
          email: Yup.string()
            .required('O e-mail é obrigatório')
            .email('Insira um e-mail válido.'),
          password: Yup.string().min(
            6,
            'A senha deve ter no mínimo 6 dígitos.',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro finalizado',
          description: 'Você já pode fazer seu logon no GoBarber.',
        });
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErrros(e);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer o cadastro, verifique os dados.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Background />

      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Informe seu Nome" />
            <Input
              name="email"
              icon={FiMail}
              placeholder="Informe seu E-mail"
            />
            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Informe sua senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
