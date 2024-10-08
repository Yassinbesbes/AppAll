import { Box, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Patients from "../../data/patients.js"; // Import the patients data
import doctors from "../../data/doctors.js"; // Import the doctors data
import { Dicone, Picone, ActivateS } from "../../Images/Images.js"; // Assuming this is the path to your doctor image

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const totalDoctors = doctors.length;

  const totalPatients = Patients.length;

  const totalActiveDoctors = doctors.filter((doctor) => doctor.isActive).length;

  const totalActivePatients = Patients.filter(
    (patient) => patient.isActive
  ).length;

  const totalActiveSessions = totalActivePatients + totalActiveDoctors;

  return (
    <Box m="10px">
      <Box display="flex" alignItems="center">
        <Header
          title="Dashboard"
          subtitle="Bienvenue dans votre tableau de bord"
        />
      </Box>

      <Grid container spacing={0} ml="20px">
        {/* Total Doctors Card */}
        <Grid item xs={12} md={3}>
          <Cards
            title="Total Doctor's"
            number={totalDoctors}
            percentage={((totalActiveDoctors / totalDoctors) * 100).toFixed(2)}
            backgroundColor="#ffccd7"
            icon={Dicone}
            isIncrease={totalActiveDoctors > totalDoctors - totalActiveDoctors}
          />
        </Grid>

        {/* Total Patients Card */}
        <Grid item xs={12} md={3}>
          <Cards
            title="Total Patients"
            number={totalPatients}
            percentage={((totalActivePatients / totalPatients) * 100).toFixed(
              2
            )}
            backgroundColor="#d9d8fb"
            icon={Picone}
            isIncrease={
              totalActivePatients > totalPatients - totalActivePatients
            }
          />
        </Grid>

        {/* Active Sessions Card */}
        <Grid item xs={12} md={3}>
          <Cards
            title="Active Sessions"
            number={totalActiveSessions}
            percentage={(
              (totalActiveSessions / (totalPatients + totalDoctors)) *
              100
            ).toFixed(2)}
            backgroundColor="#c6f9df"
            icon={ActivateS}
            isIncrease={totalActiveSessions > 0} // Active sessions exist
          />
        </Grid>

        <Grid item xs={12} md={8} style={{ height: "400px" }}></Grid>
        <Grid item xs={12} md={4} style={{ height: "400px" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
