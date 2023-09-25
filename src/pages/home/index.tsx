import { Container } from '../../components/Box/Container';
import { Hero } from '../../components/Box/Hero';
import { Preview } from '../../components/Box/Preview';
import { Heading } from '../../components/Typography/Heading';
import { Text } from '../../components/Typography/Text';
import Image from 'next/image';
import previewImage from '../../assets/preview-image.png';
import { styled } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading sx={{ fontSize: '2rem' }} text="Agendamento descomplicado" />
        <Text text="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre" />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          alt="Calendar aplication"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}
