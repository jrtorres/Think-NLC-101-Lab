import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Input extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  }

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  }

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  }

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <h2 className="base--h2">
          Input
        </h2>
        <p className="base--p">
          Watch the Natural Language Classifier
          categorize your sample text. The output includes the top classification and a confidence score.
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter some sample text to classify *"
              className="base--input question-input--input"
              required
            />
          </div>
          <div className="question-input--button-container">
            <button
              type="button"
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Ask
            </button>
          </div>
          <div className="disclaimer--message">
            <h6 className="base--h6">
              * This system is for demonstration purposes only and is not intended to process
              Personal Data. No Personal Data is to be entered into this system as it may not
              have the necessary controls in place to meet the requirements of the General Data
              Protection Regulation (EU) 2016/679.
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  data: PropTypes.object, // eslint-disable-line
  onClassify: PropTypes.func.isRequired,
};

export default Input;
