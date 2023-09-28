import React, { useEffect } from 'react'
import { Container } from '../../components/Box/Container'
import { Text } from '../../components/Typography/Text'
import { Header } from '../../components/Box/Header'
import { Heading } from '../../components/Typography/Heading'
import { Form } from '../../components/Form/Form'
import { ArrowRight } from 'phosphor-react'
import { Step } from '../../components/Step/Step'
import { Button, TextInput } from '@ignite-ui/react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { FormError } from '../../components/Form/FormError'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { api } from '../../lib/axios'
import { AxiosError } from 'axios'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O username precisa ter pelo menos 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Username pode ter apenas letras e hífens',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 caracteres' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const query = useSearchParams()

  useEffect(() => {
    const username = query.get('username')
    if (username) {
      setValue('username', username)
    }
  }, [query, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      const user = await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      console.log('Usuário criado:', user)
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }
      console.error(err)
    }
  }

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '30rem',
        margin: '7rem auto auto auto',
      }}
    >
      <Header sx={{ padding: '0.35rem' }}>
        <Heading
          sx={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}
          component="strong"
          text="Bem-Vindo ao Ignite Call"
        />
        <Text
          text="Precisamos de algumas informações para criar seu perfil!"
          sx={{ fontSize: '0.8rem' }}
        />
        <Text
          text="Ah, você pode editar essas informações depois."
          sx={{ fontSize: '0.8rem', marginBottom: '1rem' }}
        />
        <Step size={4} currentStep={1} />
      </Header>
      <Form
        component="form"
        sx={{
          padding: '0.35rem',
          borderRadius: '5px',
          background: '#302e2e',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
        onSubmit={handleSubmit(handleRegister)}
      >
        <label
          style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}
        >
          <Text sx={{ fontSize: '0.9rem' }} text="Nome de usuário" />
          <TextInput
            crossOrigin={Form}
            prefix="ignite.com/"
            placeholder="seu-usuario"
            {...register('username')}
          />
          {errors.username && <FormError>{errors.username.message} </FormError>}
        </label>
        <label
          style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}
        >
          <Text sx={{ fontSize: '0.9rem' }} text="Nome completo" />
          <TextInput
            crossOrigin={Form}
            placeholder="Seu nome"
            {...register('name')}
          />
          {errors.name && <FormError>{errors.name.message} </FormError>}
        </label>
        <Button type="submit" disabled={isSubmitting}>
          Próximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
