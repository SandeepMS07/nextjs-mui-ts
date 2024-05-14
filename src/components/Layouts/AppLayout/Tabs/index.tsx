import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useStyles } from "../styles.module";
import routes from "@/helpers/routes/routes";
interface SideNavProps {
  handleListClick: (link: string, index: number) => void;
}

const SideNavTabs: React.FunctionComponent<SideNavProps> = ({
  handleListClick,
}) => {
  const classes = useStyles();
  // const getFirstPath = pathname.split('/').filter((items: string) => {
  //   return items && items !== '';
  // });

  const sideNavContents = [
    {
      icon: (isActive: boolean) => {
        return (
          <HomeOutlinedIcon
            className={
              isActive ? classes.listItemIconActive : classes.listItemIcon
            }
          />
        );
      },
      label: "Interview",
      link: routes.interview,
      name: "interview",
    },
  ];

  return sideNavContents?.map((items, index) => {
    return (
      <ListItemButton
        onClick={() => {
          handleListClick(items.link, index);
        }}
        key={index}
        style={{ marginTop: index === 0 ? "15px" : "2px" }}
        className={`${classes.listItemButton} ${classes.listItemButtonActive}`}
      >
        <ListItemIcon sx={{ minWidth: { xs: "10px", lg: "40px" } }}>
          {items.icon(true)}
        </ListItemIcon>
        <ListItemText
          className={`${classes.listItemText} ${classes.listItemTextActive}`}
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        >
          {items.label}
        </ListItemText>
      </ListItemButton>
    );
  });
};

export default SideNavTabs;
