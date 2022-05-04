import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomTable from "./component/CustomTable";
import EditInfo from "./Pages/EditInfo";
import { Modal } from "@mui/material";

const data = [
  {
    sno: 1,
    sender: "Azar",
    email: "azar@g.com",
    contact: "123456789",
    action: "done",
  },
  {
    sno: 2,
    sender: "Prashant",
    email: "pras@g.com",
    contact: "123456789",
    action: "done",
  },
  {
    sno: 3,
    sender: "Ahmed",
    email: "ahamad@g.com",
    contact: "123456789",
    action: "done",
  },
];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [id, setId] = useState(0);
  const [populate, setpopulate] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const displaydata = (id) => {
    setId(id);
    setpopulate(apiData[id]);
    handleOpen();
  };
  const handleSubmit = (id, data) => {
    let arr = apiData;
    arr[id] = data;
    setApiData(arr);
    // console.log("submit", data, id);
  };
  useEffect(() => {
    fetch(
      "http://api-dev.wuelev8.tech:8080/internity/api/v1/notification/?messageType=GENERAL"
    )
      .then((response) => response.json())
      .then((json) => {
        setApiData(json);
      });
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Guest queries" {...a11yProps(0)} />
          <Tab label="User queries" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        existing table
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomTable rows={data} apiData={apiData} displaydata={displaydata} />
      </TabPanel>

      {/* <EditInfo populate={populate} /> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditInfo populate={populate} id={id} handleSubmit={handleSubmit} />
        </Box>
      </Modal>
    </Box>
  );
}
// export default App;
