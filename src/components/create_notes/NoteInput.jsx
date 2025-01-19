import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      createdAt: new Date().toISOString(),
      maxTitleLimit: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState({
      title: '',
      body: '',
      createdAt: new Date().toISOString(),
      maxTitleLimit: 50,
    });
  }

  render() {
    const limitTitle = this.state.maxTitleLimit - this.state.title.length;

    return (
      <div className="note-input">
        <h2>Create Your Note</h2>
        <form action="" onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            sisa karakter: {limitTitle}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Masukkan Judul..."
            value={this.state.title}
            onChange={this.onTitleChangeHandler}
            required
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Masukkan Isi..."
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
            required
          />
          <button type="submit">Buat Catatan</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
