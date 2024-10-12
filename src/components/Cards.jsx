import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // For percentage arrow
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"; // For percentage arrow

const Cards = ({
  title,
  number,
  percentage,
  backgroundColor,
  icon,
  isIncrease,
}) => {
  const theme = useTheme();
  const percentageColor = isIncrease
    ? theme.palette.success.main
    : theme.palette.error.main;

  return (
    <Card
      sx={{
        maxWidth: 340, // Changed to camelCase
        width: "100%", // Added quotes for percentage value
        height: 150,
        borderRadius: "15px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardContent>
        {/* Top Section: Title, Number, Image */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* Title and Number */}
          <Box>
            <Typography variant="h4" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {number}
            </Typography>
          </Box>

          {/* Image in a rectangle with dynamic background color */}
          <Box
            sx={{
              backgroundColor: backgroundColor || theme.palette.primary.light,
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              src={icon}
              alt="icon"
              style={{
                position: "absolute",
              }}
            />
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
