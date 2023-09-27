import React from 'react'
import { Container } from '../../components/Box/Container'
import { Text } from '../../components/Typography/Text'
import { Header } from '../../components/Box/Header'
import { Heading } from '../../components/Typography/Heading'
import { Form } from '../../components/Form/Form'
import { Button, MultiStep, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default function register() {
  return (
    <>
      <Container
        component="main"
        sx={{
          maxWidth: '35.75rem',
          margin: '7rem auto auto auto',
          padding: '0rem 0.25rem',
        }}
      >
        <Header sx={{ padding: '0rem 0.375rem' }}>
          <Heading component="strong" text="Bem-Vindo ao Ignite Call!" />
          <Text
            text="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
            sx={{ marginBottom: '0.375rem' }}
          />
        </Header>
        <Form component="form">
          <label>
            <Text sx={{ fontSize: 'sm' }} text="Nome de usuário" />
            <TextInput crossOrigin={Form} placeholder="Seu nome" />
          </label>
          <Button type="submit">
            Próximo passo <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
