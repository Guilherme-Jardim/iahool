import React from 'react'
import { Container } from '../../../components/Box/Container'
import { Text } from '../../../components/Typography/Text'
import { Header } from '../../../components/Box/Header'
import { Heading } from '../../../components/Typography/Heading'
import { ArrowRight, Check } from 'phosphor-react'
import { Step } from '../../../components/Step/Step'
import { Button } from '@ignite-ui/react'
import { ConnectBox } from '../../../components/Box/ConnectBox'
import { ConnectItem } from '../../../components/Box/ConnectItem'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { AuthError } from '../../../components/auth/AuthError'

export default function Register() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedId = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }
  return (
    <Container component="main">
      <Header sx={{ padding: '0.35rem' }}>
        <Heading
          sx={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}
          component="strong"
          text="Conecte sua agenda!"
        />
        <Text
          text="Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos a medida em que são agendados"
          sx={{ fontSize: '0.8rem', marginBottom: '1rem' }}
        />
        <Step size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text text="Google Calendar" />
          {isSignedId ? (
            <Button size="sm" disabled>
              Conectado
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Conectar
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && <AuthError />}
        <Button type="submit" disabled={!isSignedId}>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
