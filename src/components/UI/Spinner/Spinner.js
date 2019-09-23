import React from 'react';
import classes from './Spinner.module.scss';

// Спиннер, который никто и никогда не увидит, потому что апи довольно быстрое.

const Spinner = () => (
    <div className={classes.loader}>Loading...</div>
);

export default Spinner;