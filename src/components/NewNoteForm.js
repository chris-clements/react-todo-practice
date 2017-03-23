import React from "react";

export default class NewNoteForm extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			noteTitle: ""
			, noteContent: ""
		};

	}

	handleChange( field, event ) {
		this.setState( {
			[ field ]: event.target.value
		} );
	}

	saveNewNote() {
		if(this.state.noteContent === ''){
           return alert('please enter content before adding note')
        }
        if(this.state.noteTitle === ''){
           return alert('please enter content before adding note')
        }
        this.props.saveNewNote( this.state.noteTitle, this.state.noteContent )
	}

	render() {
		return (
			<div className="new-note-wrapper">
        <div className="new-note">
          <input
          onChange={ this.handleChange.bind( this, "noteTitle" ) }
          type="text"
          value={ this.state.noteTitle }
          placeholder="I'm a title"
          />

          <textarea
          cols="30"
          onChange={ this.handleChange.bind( this, "noteContent" ) }
          rows="10"
          value={ this.state.noteContent }
          placeholder="Say something..."
          className="margin-bottom-10"
          />

          <button className="btn--newpost margin-bottom-10" onClick={ this.saveNewNote.bind( this ) }>Save</button>
        </div>
			</div>
		);
	}
}