import { Box, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import PeopleIcon from "@mui/icons-material/People"; // Example icon for doctors
import doctors from "../../data/doctors.js"; // Import the doctors data

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Get the total number of doctors dynamically
  const totalDoctors = doctors.length;

  return (
    <Box m="10px">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Header
          title="Dashboard"
          subtitle="Bienvenue dans votre tableau de bord"
        />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Cards
            title="Total Doctor's"
            number={totalDoctors}
            percentage={8.5}
            icon={<PeopleIcon />}
            isIncrease={false}
          />
        </Grid>

        <Grid item xs={12} md={4}>
        </Grid>

        <Grid item xs={12} md={4}>
        </Grid>

        <Grid item xs={12} md={8} style={{ height: "400px" }}>
        </Grid>
        <Grid item xs={12} md={4} style={{ height: "400px" }}>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
