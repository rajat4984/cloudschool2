import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import data from "../../data/staff.json";
import BookIcon from "@mui/icons-material/Book";

import StaffNew from "./StaffNew";

function Staff() {
  const cardFlex = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const [open, setOpen] = React.useState(false);
  const [staffData, setStaffData] = React.useState(data);
  const [dialogState, setDialogState] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (index) => {
    const deletedArray = staffData.filter((item, i) => {
      return index != i;
    });
    setStaffData(deletedArray);
  };

  return (
    <Box sx={{ padding:"2em"}}>
      <Typography variant="h4" sx={{ margin: "1em 0" }}>
        Staff <BookIcon />
      </Typography>
      <Grid container spacing={3}>
        {staffData.map((item, index) => (
          <Grid id={index} item xs={3} key={index}>
            <Card sx={{ maxWidth: 345 ,borderRadius:"20px"}}>
              {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Contact No. :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.contact}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Adress :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.adress}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Joining Date :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.joinDate}
                  </Typography>
                </Box>
                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Salary :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.salary}
                  </Typography>
                </Box>

                <Box sx={cardFlex}>
                  <Typography variant="body2" color="text.secondary">
                    Staff type :
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.type}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    handleClickOpen();
                    setDialogState("Edit");
                  }}
                >
                  Edit
                </Button>
                <Button size="small" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <StaffNew
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        dialogState={dialogState}
        setDialogState={setDialogState}
      />
    </Box>
  );
}

export default Staff;
