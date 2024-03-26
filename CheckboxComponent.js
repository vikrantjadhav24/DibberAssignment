const CheckboxComponent = ({ label }) => {
    return (
      <div className="checkboxDivHolder">
        <label className="checkAndLableHolder">
          <input type="checkbox"  className="checkBoxHolder"/>
          <span className="checkBoxLabelHolder">{label}</span>
        </label>
      </div>
    );
  };
  export default CheckboxComponent;