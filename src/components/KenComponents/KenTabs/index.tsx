"use client";
import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabInfo<T> {
  label: string;
  content: React.ReactElement<T>;
}

interface ReusableTabsProps<T> {
  tabs: TabInfo<T>[];
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const KenTabs = <T extends {}>({ tabs }: ReusableTabsProps<T>) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "10px" }} component={"div"}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#2C58E8",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            {...a11yProps(index)}
            sx={{
              fontSize: "20px",
              textTransform: "capitalize",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#373A45",
              "&.Mui-selected": {
                fontWeight: "500",
                color: "#373A45",
              },
            }}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
export default KenTabs;
