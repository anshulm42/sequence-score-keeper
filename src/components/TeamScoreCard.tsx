import { Stack, Title, Grid, Button } from '@mantine/core'
import '../styles/ScoreBoard.css'

interface TeamScoreCardProps {
  teamName: string
  score: number
  fontFamily?: string
}

function TeamScoreCard({ teamName, score, fontFamily }: TeamScoreCardProps) {
  return (
    <Stack maw={'600px'} miw={'400px'}>
      <Title ff={fontFamily} size={'54px'}>
        {teamName}
      </Title>
      <Grid columns={10} align="center" content={'center'}>
        <Grid.Col span={3}>
          <Button h={50} w={70} bg={'red'} fz={'40'} m={10}>
            -
          </Button>
        </Grid.Col>
        <Grid.Col span={4}>
          <Title size={'64px'}>{score}</Title>
        </Grid.Col>
        <Grid.Col span={3}>
          <Button h={50} w={70} bg={'green'} fz={'40'} m={10}>
            +
          </Button>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
export default TeamScoreCard
