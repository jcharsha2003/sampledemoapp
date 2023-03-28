import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type} :</strong> {props.alert.msg}
  <CloseButton  onClick={()=>props.setBoth(null)}/>;
</div>
  )
}

export default Alert