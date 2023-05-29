import { List, ListItem, Popover } from "konsta/react";
import { useEffect, useState } from "react";

export default function PopoverCategories({
    popoverOpened,
    setPopoverOpened,
    popoverTargetRef,
    initPopover,
    children
}) {



    useEffect(() => {
        setPopoverOpened(false)
    }, []);



    return (
        <Popover
            opened={popoverOpened}
            target={popoverTargetRef.current}
            onBackdropClick={() => initPopover}
            onClick={() => setPopoverOpened(false)}
        >
            <List nested>
                {children}
            </List>
        </Popover>
    );
}