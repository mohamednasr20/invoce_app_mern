import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 103;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#252945',
  },

  logoDiv: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 103,
    height: 103,
    background: theme.palette.primary.main,
    borderRadius: ' 0 20px 20px 0',
    marginBottom: 'auto',
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 40,
    height: 37,
  },

  icons: {
    width: 20,
    height: 20,
    marginBottom: 20,
    display: 'block',
    margin: 'auto',
    cursor: 'pointer',
  },

  avatar: {
    margin: '20px auto',
    background: '#ffffff',
    color: theme.palette.primary.main,
  },
  logout: {
    margin: 20,
    fontSize: 10,
  },
}));

export default useStyles;
