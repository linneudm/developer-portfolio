import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { makeStyles } from '@material-ui/core/styles'

function Footer() {

    const useStyles = makeStyles((t) => ({
        linkFooter : {
            color: theme.primary,
        },
    }));

    const { theme }  = useContext(ThemeContext)

    const classes = useStyles();

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                 by <a className={classes.linkFooter} rel="noopener noreferrer" href="https://github.com/hhhrrrttt222111" target="_blank">Hemanth R</a>
            </p>
        </div>
    )
}

export default Footer

