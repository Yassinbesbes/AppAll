import { Box, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Patients from "../../data/patients.js"; // Import the patients data
import doctors from "../../data/doctors.js"; // Import the doctors data
import { Dicone, Picone, ActivateS } from "../../Images/Images.js"; // Assuming this is the path to your doctor image
import BarChart from "../../components/BarChart.jsx";
import CardPieChart from "../../components/CardPieChart.jsx"; // Adjust the path as needed

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
      <Box>
        <Header title="Dashboard" subtitle="" />
      </Box>
      <Grid container xs={12} sm={6} md={12}>
        <Grid container spacing={2} xs={12} sm={6} md={9}>
          {/* Total Doctors Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Cards
              title="Total Doctor's"
              number={totalDoctors}
              percentage={((totalActiveDoctors / totalDoctors) * 100).toFixed(
                2
              )}
              backgroundColor="#ffccd7"
              icon={Dicone}
              isIncrease={
                totalActiveDoctors > totalDoctors - totalActiveDoctors
              }
            />
          </Grid>

          {/* Total Patients Card */}
          <Grid item xs={12} sm={6} md={4}>
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
          <Grid item xs={12} sm={6} md={4}>
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

          {/* Bar Chart */}
          <Grid item xs={12} md={12}>
            <Box
              style={{
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <BarChart />
            </Box>
          </Grid>
        </Grid>
        <Grid item spacing={2} xs={12} md={3}>
          <Box
            style={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "20px",
              padding: "10px",
              marginLeft: "10px",
            }}
          >
            <h4> </h4>

            <Typography
              variant="h4"
              color={colors.grey[100]}
              fontWeight="bold"
              sx={{ m: "-5px 0 10px 0" }}
            >
              Statistiques Allergies
            </Typography>
            <Grid>
              <CardPieChart title="Pollen Allergies" percentage={80} />
            </Grid>
            <Grid>
              <CardPieChart title="Food Allergies" percentage={50} />
            </Grid>
            <Grid>
              <CardPieChart title="Dust Mite Allergies" percentage={20} />
            </Grid>
            <Grid>
              <CardPieChart title="Pet Allergies" percentage={5} />
            </Grid>
            <Grid>
              <CardPieChart title="Mold Allergies" percentage={2} />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
