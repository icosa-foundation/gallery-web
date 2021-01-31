import React from "react";
import {
  makeStyles,
  createStyles,
  useTheme,
  useMediaQuery,
  Box,
  Container,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Icon,
} from "@material-ui/core";
import IcosaLogo from "../Images/icosa-logo.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    logoHeader: {
      backgroundColor: "rgba(0,0,0,0.8)",
      position: "relative",
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
      height: "16rem",
      padding: "5rem 0",
      alignItems: "center",
      justifyContent: "start",
      flexDirection: "column",
      backgroundImage: 'url("https://www.gstatic.com/vr/poly/background1.png")',
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    logo: {
      width: "6rem",
      height: "6rem",
      [theme.breakpoints.up("md")]: {
        width: "16rem",
        height: "16rem",
      },
      zIndex: 2,
      marginTop: "-5rem",
    },
    gridListContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "100%",
      padding: "2rem 0",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    tile: {
      borderRadius: "10px",
      transition: "box-shadow 0.2s",
      "&:hover": {
        boxShadow: "4px 4px 5px darkgrey",
      },
    },
  })
);

function FeaturedPage() {
  const theme = useTheme();
  const classes = useStyles();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const tileData = [
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
    { img: "http://placekitten.com/400/300", title: "Cat", author: "Icosa" },
  ];

  return (
    <>
      <Box className={classes.logoHeader}>
        <img src={IcosaLogo} className={classes.logo} />
      </Box>
      <Container style={{ marginTop: "1rem" }}>
        <Typography
          variant="h5"
          align="left"
          style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
        >
          Featured
        </Typography>
        <div className={classes.gridListContainer}>
          <GridList
            cellHeight={300}
            cols={isLargeScreen ? 3 : 1}
            spacing={32}
            className={classes.gridList}
          >
            {tileData.map((tile, i) => (
              <GridListTile key={i} classes={{ tile: classes.tile }}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.author}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                    >
                      <Icon>info</Icon>
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </>
  );
}

export default FeaturedPage;
