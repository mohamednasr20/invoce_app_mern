import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
  },

  modalBox: {
    position: 'absolute',
    width: '480px',
    height: '250px',
    padding: theme.spacing(4),
  },
  warning: {
    marginBottom: '20px',
    marginTop: '20px',
  },
  btn: {
    marginRight: '15px',
  },
}));