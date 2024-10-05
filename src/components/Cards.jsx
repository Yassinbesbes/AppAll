import React from "react";
import { Box, Typography, Card, CardContent, Icon, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // For percentage arrow
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // For percentage arrow
import PeopleIcon from "@mui/icons-material/People"; // Example icon for doctors

const Cards = ({ title, number, percentage, icon, isIncrease }) => {
  const theme = useTheme();
  const percentageColor = isIncrease ? theme.palette.success.main : theme.palette.error.main;

  return (
    <Card sx={{ minWidth: 275, borderRadius: "15px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
      <CardContent>
        {/* Top Section: Title, Number, Icon */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Title and Number */}
          <Box>
            <Typography variant="body2" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {number}
            </Typography>
          </Box>

          {/* Icon in a rounded background */}
          <Box
            sx={{
              backgroundColor: theme.palette.primary.light,
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <Icon sx={{ fontSize: 40, color: theme.palette.primary.main }}>
              {icon}
            </Icon>
          </Box>
        </Box>

        {/* Bottom Section: Percentage and Trend */}
        <Box display="flex" alignItems="center" mt={2}>
          {isIncrease ? (
            <ArrowUpwardIcon sx={{ color: percentageColor, mr: 0.5 }} />
          ) : (
            <ArrowDownwardIcon sx={{ color: percentageColor, mr: 0.5 }} />
          )}
          <Typography variant="body2" sx={{ color: percentageColor }}>
            {percentage}% {isIncrease ? "Up" : "Down"} from yesterday
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;
