import React, { PropTypes, Component } from "react";
import FormattedDate from "../utils/FormattedDate";
import FormattedRelative from "../utils/FormattedRelative";

class PhotoCreatedAt extends Component {

  static propTypes = {
    date: PropTypes.string.isRequired
  }

  render() {
    const { date } = this.props;

    return (
      <div>
        <FormattedDate value={new Date(date)} year="numeric" month="long" day="numeric" />
        { ' ' } (<FormattedRelative value={new Date(date)} />)
      </div>
    );
  }

}

export default PhotoCreatedAt;
