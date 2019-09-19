import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocalizationContext from './LocalizationContext';
import { LanguageIcon } from './icons/SvgIcons'
import { SvgIcon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

export default function SecondaryMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const localizationContext = useContext(LocalizationContext)
    const strings = localizationContext.strings


    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose(e) {
        setAnchorEl(null);
        let lang = e.target.attributes.lang !== undefined ? e.target.attributes.lang.nodeValue : null;
        if (lang != null && lang.length === 2) {
            localizationContext.setLanguage(lang)
        }
    }

    return (
        <div>
            <IconButton color="inherit" aria-controls="lang_select_popup-" aria-haspopup="true" onClick={handleClick}>
                {LanguageIcon}
            </IconButton>

            <Menu
                id="lang_select_popup"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem lang="en" onClick={handleClose}>English</MenuItem>
                <MenuItem lang="tr" onClick={handleClose}>Türkçe</MenuItem>
            </Menu>
        </div>
    );
}