import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useSidebarMenuStyles } from './sidebar';
import Mobile from '../mobile/main'

function SidebarMenu({ open, setOpen }) {
    const classes = useSidebarMenuStyles();

    if (open) {
        document.body.style.overflow = " hidden"
    }
    else {
        document.body.style.overflow = "unset"

    }
    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <>
                    <Mobile />
                </>
            </Drawer>
        </div>
    );
}
export default SidebarMenu