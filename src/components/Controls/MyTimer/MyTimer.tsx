import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import useLocalAudioToggle from '../../../hooks/useLocalAudioToggle/useLocalAudioToggle';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    },
  })
);

export default function MyTimer(props: { disabled?: boolean }) {
  const classes = useStyles();

  return (
    <Tooltip title={'Timer Placeholder'} placement="top" PopperProps={{ disablePortal: true }}>
      <Fab className={classes.fab}></Fab>
    </Tooltip>
  );
}
