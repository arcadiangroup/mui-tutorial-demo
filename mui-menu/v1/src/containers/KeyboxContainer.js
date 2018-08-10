import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectKey, addKey } from "../actions";
import Picker from "../components/Picker";

import compose from "recompose/compose";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import withRoot from "./../withRoot";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class KeyboxContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nextDatadir) {
    const { selectKey } = this.props;
    selectKey(nextDatadir);
  }

  render() {
    const { classes, keys, selectedKey, addKey } = this.props;

    let input;
    return (
      <div>
        <Picker
          value={selectedKey}
          onChange={this.handleChange}
          options={keys}
        />
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addKey(input.value);
              input.value = "";
            }}
          >
            <input ref={node => (input = node)} />

            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add Chapter
            </Button>

            <button type="submit">Add Chapter</button>

          </form>
        </div>
      </div>
    );
  }
}

KeyboxContainer.propTypes = {
  keys: PropTypes.array.isRequired,
  selectedKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  const { keys, selectedKey } = state;
  return {
    keys,
    selectedKey
  };
}

// If you don't have any styles you can do it this way !
// export default connect(mapStateToProps, { addKey, selectKey })(KeyboxContainer);

const part = compose(
  withStyles(styles, {
    name: "KeyboxContainer"
  }),
  connect(mapStateToProps, {addKey, selectKey})
)(KeyboxContainer);

export default withRoot(part);
