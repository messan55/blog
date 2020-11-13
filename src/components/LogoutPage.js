import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

function LogoutPage(props) {
  console.log(props);
  useEffect(() => {
    props.signOut();
  });

  return (
    <div>
      Aurevoir !
    </div>
  );
};

export default connect(null, actions)(LogoutPage);
