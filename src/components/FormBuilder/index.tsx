"use client";
import { FormBuilderProps } from "@/interfaces/Common";
import { Divider, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles.module";
import RowContent from "./RowContent";

const FormBuilder: React.FunctionComponent<FormBuilderProps> = (props) => {
  const classes = useStyles();
  const { formJson } = props;
  return formJson.map((items) => {
    return (
      <>
        <Grid
          item
          xs={items.grid.xs}
          sm={items.grid.sm}
          md={items.grid.md}
          lg={items.grid.lg}
        >
          <Grid container spacing={2} width={"100%"}>
            {items.rows.map((row) => {
              return (
                <>
                  {row.title && (
                    <Typography className={classes.rowHeader}>
                      {row.title?.heading}
                    </Typography>
                  )}
                  <Grid item xs={row.grid.xs} md={row.grid.md} lg={row.grid.lg}>
                    {row.fields.map((fields) => {
                      return <RowContent fields={fields} key={fields.id} />;
                    })}
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
        {items.divider && (
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
        )}
      </>
    );
  });
};

export default FormBuilder;
