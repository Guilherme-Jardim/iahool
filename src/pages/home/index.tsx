import { Container } from '../../components/Box/Container'
import { Hero } from '../../components/Box/Hero'
import { Preview } from '../../components/Box/Preview'
import { Heading } from '../../components/Typography/Heading'
import { Text } from '../../components/Typography/Text'
import Image from 'next/image'
import previewImage from '../../assets/preview-image.png'
import { ClaimUsernameForm } from '../../components/ClaimUsernameForm/ClaimUsernameForm'

export default function Home() {
  return (
    <Container
      sx={{
        maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
        height: '100vh',
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
      }}
    >
      <Hero
        sx={{
          maxWidth: 480,
          padding: '0 0.5rem',
        }}
      >
        <Heading
          sx={{ fontSize: { xs: '1rem', sm: '1.5rem', fontSize: '2rem' } }}
          text="Agendamento descomplicado"
        />
        <Text text="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre" />
        <ClaimUsernameForm />
      </Hero>
      <Preview
        sx={{
          paddingRight: '0.5rem',
          overflow: 'hidden',
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <Image
          src={previewImage}
          alt="Calendar aplication"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
