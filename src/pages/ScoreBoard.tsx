// pages/Home.tsx

import { Grid, Image, Text } from '@mantine/core'
import logo from '../assets/sequence_logo_solid.png'
import '../styles/ScoreBoard.css'

export default function ScoreBoard() {
  return (
    <Grid columns={14} style={{ minHeight: '80vh' }}>
      <Grid.Col span={4} className="scoreboard-col">
        <Image h={100} src={logo} fit="contain" alt="Sequence Logo" />
      </Grid.Col>
      <Grid.Col span={5} ta={'center'} className="scoreboard-col">
        <Text>Current Score</Text>
      </Grid.Col>
      <Grid.Col span={5} ta={'center'} className="scoreboard-col">
        <Text>Tournament Score</Text>
      </Grid.Col>
    </Grid>
  )
}
