import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Container from '@mui/material/Container'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { SelectChangeEvent } from '@mui/material/Select'
import Job from '@/components/Jobs/Job'
import axios from 'axios'
import { IJob } from '@/interfaces/job.interface'
import { GetStaticProps } from 'next';


type Props = {
  jobs: IJob[]
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { data: jobs } = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/jobs')

//   console.log('jobs: ', jobs)

//   return {
//     props: {
//       jobs,
//     }
//   }
// }

export default function Home({ jobs }: Props) {
  const [searchingTerm, setSearchingTerm] = useState<string>('')
  const [level, setLevel] = useState<string>('')
  const [employmentType, setEmploymentType] = useState<string>('')

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value)
  }

  const handleEmploymentTypeChange = (event: SelectChangeEvent) => {
    setEmploymentType(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitted !!!')
  }

  return (
    <Container sx={{ padding: '10px' }}>
      <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={9} xs={12}>
            <TextField
              fullWidth
              id='searching-term'
              label='Search Term'
              name='searching-term'
              autoComplete='searching-term'
              autoFocus
              color='secondary'
              helperText='Job title'
              size='small'
              sx={{ marginBottom: '15px' }}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                console.log('aha')
                setSearchingTerm(event.target.value)
              }}
            />

            <Grid container spacing={2}>
              <Grid item>
                <FormControl color='secondary' size='small'>
                  <InputLabel id='level-select-label' color='secondary'>
                    Level
                  </InputLabel>
                  <Select
                    color='secondary'
                    labelId='level-select-label'
                    id='demo-simple-select'
                    value={level}
                    label='Level'
                    sx={{ width: '200px' }}
                    onChange={handleLevelChange}
                  >
                    <MenuItem value={'junior'}>Junior</MenuItem>
                    <MenuItem value={'senior'}>Senior</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl color='secondary' size='small'>
                  <InputLabel id='salary-range-label' color='secondary'>
                    Employment Type
                  </InputLabel>
                  <Select
                    color='secondary'
                    labelId='salary-range-label'
                    id='demo-simple-select'
                    value={employmentType}
                    label='Employment Type'
                    sx={{ width: '200px' }}
                    onChange={handleEmploymentTypeChange}
                  >
                    <MenuItem value={'full-time'}>Full-time</MenuItem>
                    <MenuItem value={'part-time'}>Part-time</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} xs={12}>
            <Button
              type='submit'
              color='secondary'
              variant='contained'
              startIcon={<SearchIcon />}
              sx={{ textTransform: 'capitalize', height: '40px' }}
              disableElevation
            >
              Search Jobs
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Job List */}
      {
        // jobs.map((job) => {
        //   return <Job job={job} key={job.id} />
        // })
      }
    </Container>
  )
}
