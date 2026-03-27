// pages/Home.tsx

import { Container, Grid, Image, Space, Title } from '@mantine/core'
import logo from '../assets/sequence_logo_solid.png'
import '../styles/ScoreBoard.css'
import confetti from 'canvas-confetti'

const celebrate = () => {
  var duration = 10 * 1000
  var animationEnd = Date.now() + duration
  var defaults = { startVelocity: 25, spread: 360, ticks: 60, zIndex: 0, scalar: 2 }

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    var particleCount = 30 * (timeLeft / duration)
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0, 0.3), y: Math.random() - 0.2 },
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.2 },
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.8, 1.0), y: Math.random() - 0.2 },
    })
  }, 250)
}

export default function ScoreBoard() {
  return (
    <Grid columns={20}>
      <Grid.Col span={4} className="scoreboard-col-logo">
        <Image h={100} src={logo} fit="contain" alt="Sequence Logo" />
      </Grid.Col>
      <Grid.Col span={8} className="scoreboard-col">
        <Container className="scoreboard-score-card">
          <Title size={'84px'}>Current Score</Title>
          <Space h="lg" />
          <Grid columns={2} className="scoreboard-score-grid">
            <Grid.Col span={1} className="scoreboard-score-col">
              <Title ff={'Henny Penny'} size={'64px'}>
                Da Boys
              </Title>
              <Title size={'64px'}>10</Title>
            </Grid.Col>
            <Grid.Col span={1} className="scoreboard-score-col">
              <Title ff={'Imperial Script'} size={'64px'}>
                Ladies
              </Title>
              <Title size={'64px'}>15</Title>
            </Grid.Col>
          </Grid>
        </Container>
      </Grid.Col>
      <Grid.Col span={8} className="scoreboard-col">
        <Title>Tournament Score</Title>
      </Grid.Col>
    </Grid>
  )
}
