// pages/Home.tsx

import { Container, Grid, Image, Title } from '@mantine/core'
import logo from '../assets/sequence_logo_solid.png'
import '../styles/ScoreBoard.css'

export default function ScoreBoard() {
  return (
    <Grid columns={20}>
      <Grid.Col span={4} className="scoreboard-col-logo">
        <Image h={100} src={logo} fit="contain" alt="Sequence Logo" />
      </Grid.Col>
      <Grid.Col span={8} className="scoreboard-col">
        <Container className="scoreboard-score-card">
          <Title>Current Score</Title>
        </Container>
      </Grid.Col>
      <Grid.Col span={8} className="scoreboard-col">
        <Title>Tournament Score</Title>
      </Grid.Col>
    </Grid>
  )
}
