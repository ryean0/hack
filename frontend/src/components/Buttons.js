import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Note from './Note';

export default class CreateNoteButton extends React.Component {
    constructor() {
        super();
        this.state = { showNote: false, showButton: true }
    }
    
    _showNote = (bool) => {
        this.setState({
            showNote: bool
        });
    }
    //{this._showNote.bind(null, true)}
    toggleButton = () => {
        this.setState({ showNote: true, showButton: false });
    };

    render() {
        return (
            <Stack spacing={2} direction="row">
                { this.state.showButton ? <Button variant="contained" onClick={() => this.toggleButton()}>Send a Note</Button> : null }
                { this.state.showNote && (<Note />)}
            </Stack>
        )
    }
}