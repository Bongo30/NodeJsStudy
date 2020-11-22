import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
//import HomeIcon from '@material-ui/icons/Home';
//import WhatshotIcon from '@material-ui/icons/Whatshot';
//import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

 function Navigation() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
        {/* <HomeIcon className={classes.icon} /> */}
        Home
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
        className={classes.link}
      >
        {/* <WhatshotIcon className={classes.icon} /> */}
        ...
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        {/* <GrainIcon className={classes.icon} /> */}
        About
      </Typography>
    </Breadcrumbs>
  );
}

export default Navigation;