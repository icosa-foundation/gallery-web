import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { UserInfo } from '../../stores/index'
import { useRecoilState } from 'recoil'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
  }),
);

export function Bar() {
    const classes = useStyles();
    const [ userInfo, _ ] = useRecoilState(UserInfo)
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit">{ userInfo.userName }</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}