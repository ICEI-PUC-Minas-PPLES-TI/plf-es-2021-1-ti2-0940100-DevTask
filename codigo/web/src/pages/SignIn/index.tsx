import React, { useState, useCallback } from 'react';

import { Helmet } from 'react-helmet-async';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../contexts/auth';

import {
  Wrapper,
  Container,
  Card,
  Title,
  ForgotPassword,
  SignUpContainer,
  SignUpButton,
} from './styles';

import { Modal } from '../../components/Modal';

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Email é um campo obrigatório'),
  password: yup.string().required('Senha é um campo obrigatório'),
});

export const SignIn: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (signInCredentials) => {
      try {
        await signIn(signInCredentials);
      } catch (err) {
        const { status } = err.response;

        if (status === 404 || status === 401) {
          toast.error('Falha ao realizar o login (credenciais inválidas).');
          return;
        }

        toast.error('Erro interno de servidor.');
      }
    },
    [signIn],
  );

  const handleForgotPassword = () => {
    setShowModal(!showModal);
  };

  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Entrar | DevTask</title>
          <meta
            name="description"
            content="Faça login da plataforma e comece a usá-la para divulgar seus trabalhos ou suas vagas."
          />
        </Helmet>

        <Card>
          <Title>Login</Title>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              label="Email"
              labelFor="email"
              type="email"
              placeholder="Digite seu email"
              error={errors.email}
              {...register('email')}
            />

            <Input
              label="Senha"
              labelFor="password"
              type="password"
              placeholder="Digite sua senha"
              error={errors.password}
              {...register('password')}
              passwordInput
              style={{ marginBottom: '0.4rem' }}
            />

            <ForgotPassword type="button" onClick={handleForgotPassword}>
              Esqueci minha senha
            </ForgotPassword>

            <Button
              buttonType="solid"
              variant="secundary"
              text="Entrar"
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              style={{ marginTop: '2rem' }}
            />
          </form>
          <SignUpContainer>
            Ainda não possui uma conta?&nbsp;
            <SignUpButton to="/register">Cadastre-se</SignUpButton>
          </SignUpContainer>
        </Card>
      </Container>

      <Modal
        modalIsOpen={showModal}
        toggleModalFunction={handleForgotPassword}
      />
    </Wrapper>
  );
};
