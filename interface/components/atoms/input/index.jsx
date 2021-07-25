import React from 'react'
import {
    css
} from '@emotion/css'
import {
    TextField,
    FormControl
} from '@material-ui/core'

const style = css`
`;

export const Input = (props) => {
    const handlerChanges = event => {
        if (!props.onChange) {
            return;
        }
        props.onChange(event.target.value);
    }
    return (
        <FormControl className="form-control" fullWidth>
            <TextField onChange={handlerChanges} {...props} onChange={handlerChanges} />
        </FormControl>
    );
}
