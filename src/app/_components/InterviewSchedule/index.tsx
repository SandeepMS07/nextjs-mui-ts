"use client";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../styles.module";
import { AppButton } from "@/components/AppButton";
import KenColors from "@/helpers/themes/kenColors";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import routes from "@/helpers/routes/routes";
import { rowData } from "@/interfaces/Interview";
import { useRouter } from "next/navigation";
interface Column {
  id:
    | "studentName"
    | "program"
    | "date"
    | "time"
    | "round"
    | "link"
    | "scoresheet"
    | "status";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "studentName", label: "Student name", minWidth: 170 },
  { id: "program", label: "Program", minWidth: 170 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "time",
    label: "Time",
    minWidth: 170,
    align: "left",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "round",
    label: "Round",
    minWidth: 150,
    align: "left",
  },
  {
    id: "link",
    label: "Link",
    minWidth: 170,
    align: "left",
  },
  {
    id: "scoresheet",
    label: "Scoresheet",
    minWidth: 170,
    align: "left",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "left",
  },
];

function createData(
  studentName: string,
  program: string,
  date: string,
  time: string,
  round: number,
  link: string | any,
  scoresheet: string | any,
  status: string | any
): rowData {
  return { studentName, program, date, time, round, link, scoresheet, status };
}

const rows = [
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
  createData(
    "Aarav Patel",
    "Global MBA",
    "30-04-2024",
    "04:30 PM",
    1,
    <AppButton
      width="100px"
      variant="contained"
      size="small"
      sx={{ paddingInline: "25px" }}
      startIcon={<VideocamOutlinedIcon />}
    >
      Join
    </AppButton>,

    <CreateOutlinedIcon sx={{ fontSize: { xs: "20px", lg: "24px" } }} />,

    <FormControlLabel
      control={
        <Checkbox
          defaultChecked
          sx={{
            color: "#5981FF",
            "&.Mui-checked": {
              color: "#5981FF",
            },
          }}
        />
      }
      label="Present"
    />
  ),
];

const InterViewSchedule:React.FunctionComponent = () => {
  const router = useRouter();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      sx={{
        height: "700px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TableContainer sx={{ flex: "1" }} className="scrollbar-cus">
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.tableHeadCell}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className={classes.tableBodyCell}
                        >
                          {column.id === "scoresheet" ? (
                            <IconButton
                              sx={{ marginLeft: { xs: "1px", lg: "24px" } }}
                              onClick={() =>
                                router.push(`${routes.interview}Scoresheet`)
                              }
                            >
                              {value}
                            </IconButton>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className={classes.pagination}
      />
    </Box>
  );
};

export default InterViewSchedule;
