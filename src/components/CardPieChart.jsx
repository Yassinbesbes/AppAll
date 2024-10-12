import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";

const CardPieChart = ({
  title,

  percentage,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        height: 100,
        borderRadius: "15px",
        marginBottom:"10px"
      }}
    >
      <CardContent>
        {/* Top Section: Title, Number, Image */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h4" color="textSecondary">
              {title}
            </Typography>

            <Typography variant="body2">{percentage}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardPieChart;
