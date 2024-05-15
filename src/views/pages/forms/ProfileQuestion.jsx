'use client'

// React Imports

// Next Imports

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Components Imports
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import {useState} from "react";

const ProfileQuestion = ({questionItem}) => {
  const [question, setQuestion] = useState(questionItem)

  console.log(question)
  const handleAnswer = e => {
    console.log(e.target)
  }

  return (
    <Grid item xs={12}>
      <form>
        <FormLabel>{question.question}</FormLabel>
        <RadioGroup
          row
          name='radio-buttons-group'
        >
          {
            question.possibleAnswers && question.possibleAnswers.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value='a1'
                  control={question.type === 'simple' ? <Radio/> : <Checkbox/>}
                  label={item}/>
              )
            )
          }
        </RadioGroup>
      </form>
    </Grid>
  )
}
export default ProfileQuestion