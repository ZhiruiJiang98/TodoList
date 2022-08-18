import { TextField, Box, List, Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface Props {
  setArr: (inputText: string, inputInfo: string, priorityLevel: any, priorityList: any) => void
}
export default function TaskInputBar(prop: Props) {
  const [taskTitle, setTaskTitle] = React.useState<string>('')
  const getInputVal: React.ChangeEventHandler<HTMLInputElement> = event => {
    setTaskTitle(event.currentTarget.value)
  }

  function pushSet(){
    prop.setArr(taskTitle, "", 1, "high")
  }





  return (
    <Box>
      <TextField
        margin="normal"
        sx={{ m: 1, width: '11cm',height:'1cm'}}
        id="task-title"
        label="Task Title"
        onChange={getInputVal}
      />
      <Button onClick={pushSet}>
        <AddCircleIcon  sx = {{fontSize: 30}}/>
      </Button>
      <Button>
        <MoreHorizIcon/>
      </Button>
    </Box>
  )
}
