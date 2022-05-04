import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const EditInfo = (props) => {
  const { populate, handleSubmit, id } = props;
  const [data, setData] = useState(populate);
  const[btnDisabled,setBtnDisabled]=useState(true)
  // console.log("populate", populate);
  return (
    <Paper align="center">
      <Typography variant="h3"> Edit form </Typography>
      <form onSubmit={handleSubmit(id, data)}>
        <Stack>
          {/* <Grid container>
            <Grid xs={3}>
              {" "}
              <TextField
                id="standard-basic"
                label="Notification Id"
                variant="standard"
                value={data.notificationId}
                type="text"
              />{" "}
            </Grid>

            <Grid xs={3}>
              
              <TextField
                id="standard-basic"
                label="senderUid"
                variant="standard"
                value={data.senderUid}
                type="text"
              />
            </Grid>

            <Grid xs={3}>
              <TextField
                id="standard-basic"
                label="receiverUid"
                variant="standard"
                type="text"
                value={data.receiverUid}
              />
            </Grid>
          </Grid> */}
          <Grid container>

          <Grid xs={6}>
             
              <TextField
                id="standard-basic"
                label="oneLiner"
                disabled="true"
                variant="standard"
                value={data.oneLiner}
                type="text"
              />
            </Grid>

            {/* <Grid xs={6}>
              
              <TextField
                id="standard-basic"
                label="notificationType"
                variant="standard"
                value={data.notificationType}
                type="text"
              />
            </Grid> */}
            </Grid>

          <Grid container>
            <Grid xs={3}>
              <TextField
                id="standard-basic"
                label="Message"
                disabled="true"
                variant="standard"
                value={data.message}
                onChange={(
                  e //console.log(e.target.value)
                ) => setData({ ...data, [data.message]: e.target.value })}
              />
            </Grid>
            
          </Grid>
          <Grid xs={3}>
             
              <TextField
                id="standard-basic"
                label="Text editor"
                
                variant="standard"
                
                type="text"
                onChange={(text)=>
                setBtnDisabled(!text.target.value)}
              />
            </Grid>
          <Button disabled={btnDisabled} type="submit">Submit</Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default EditInfo;
