import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, Label } from "recharts";

const CardPieChart = ({ title, percentage }) => {
  const data = [
    { name: "Completed", value: percentage },
    { name: "Remaining", value: 100 - percentage },
  ];

  const COLORS = ["#7456d3", "#e0e0e0"]; // Colors for the pie segments

  return (
    <Card
      sx={{
        width: "100%",
        height: 100,
        borderRadius: "15px",
        marginBottom: "10px",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" color="textSecondary">
            {title}
          </Typography>

          <Box>
            <PieChart width={60} height={60}>
              <Pie
                data={data}
                cx={30}
                cy={30}
                innerRadius={20}
                outerRadius={25}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <Label
                  value={`${percentage}%`}
                  position="center"
                  fill="#000"
                  fontSize={12}
                />
              </Pie>
              <Tooltip />
            </PieChart>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardPieChart;
