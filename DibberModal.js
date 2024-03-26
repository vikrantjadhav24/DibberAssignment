import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modals.css"
import CheckboxComponent from "./CheckboxComponent";
import Select from "react-select";

const DibberModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    const customStylesForTypes = {
        control: (base, state) => ({
          ...base,
          borderRadius: state.isFocused ? "5px 5px 0 0" : 5,
          borderColor: state.isFocused ? "#80808054" : "#80808054",
          borderWidth: state.isFocused ? "1px" : "1px",
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            borderColor: state.isFocused ? "#2F991E" : "#2F991E",
            borderWidth: state.isFocused ? "2px" : "2px"
          }
        }),
        menu: (base) => ({
          ...base,
          borderRadius: 10,
          marginTop: 0
        }),
        menuList: (base) => ({
          ...base,
          padding: 0
        })
      };
      
      const options = [
        { label: "Other", value: "Other" },
        { label: "Event", value: "event" },
        { label: "Celebration", value: "celebration" },
        { label: "Trip", value: "trip" },
        { label: "With caregiver(s)", value: "withcaregiver(s)" },
        { label: "Meal", value: "meal" },
        { label: "Playtime", value: "playtime" }
      ];

    function handleAdd (e) {
        e.preventDefault();
        if(title.length <= 3){
            setError("Enter Proper Title");
        }
    }

    const customStylesForFromDate = {
        control: (base, state) => ({
          ...base,
        //   background: "#fffff",
          borderRadius: state.isFocused ? "5px 5px 0 0" : 5,
          borderColor: state.isFocused ? "#80808054" : "#80808054",
          borderWidth: state.isFocused ? "1px" : "1px",
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            borderColor: state.isFocused ? "#2F991E" : "#2F991E",
            borderWidth: state.isFocused ? "2px" : "2px"
          }
        }),
        menu: (base) => ({
          ...base,
          borderRadius: 10,
          marginTop: 0
        }),
        menuList: (base) => ({
          ...base,
          padding: 0
        })
      };
      
      const optionsTime = [
        { label: "10:30", value: "10:30" },
        { label: "10:45", value: "10:45" },
        { label: "11:00", value: "11:00" },
        { label: "11:30", value: "11:30" },
        { label: "11:45", value: "11:45" },
        { label: "12:00", value: "12:00" }
      ];

      const customStylesForToDates = {
        control: (base, state) => ({
          ...base,
          borderRadius: state.isFocused ? "5px 5px 0 0" : 5,
          borderColor: state.isFocused ? "#80808054" : "#80808054",
          borderWidth: state.isFocused ? "1px" : "1px",
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            borderColor: state.isFocused ? "#2F991E" : "#2F991E",
            borderWidth: state.isFocused ? "2px" : "2px"
          }
        }),
        menu: (base) => ({
          ...base,
          borderRadius: 10,
          marginTop: 0
        }),
        menuList: (base) => ({
          ...base,
          padding: 0
        })
      };
      
      const optionsTimeTo = [
        { label: "13:00", value: "13:00" },
        { label: "13:15", value: "13:15" },
        { label: "13:30", value: "13:30" },
        { label: "13:45", value: "13:45" },
        { label: "14:00", value: "14:00" },
        { label: "14:15", value: "14:15" }
      ];
      

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>Open Modal</Button>

            <Modal show={show} >
                <Modal.Header closeButton className="closeButton ModalHeaderHolder" onHide={handleClose}>
                    <Modal.Title>New recurring Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form> 
                        <div className="titleAndTypeDiv">
                            <div className="titleAndInputHolder">
                                <label className="titleHolder titleLabelHolder">Title</label>
                                <input className="inputHolder" value={title} placeholder="E.g. Breakfast, playTime" onChange={(e) => setTitle(e.target.value)}/>
                                {error && <p style={{fontSize:"14px", fontWeight:"400"}}>{error}</p>}
                            </div>
                            <div className="typeAndInputHolder arrowHolder">
                                <label className="titleHolder typelabelHolder">Type</label>
                                <Select styles={customStylesForTypes} options={options} />
                            </div>
                        </div>
                        <div className="titleAndDivHolder">
                            <label className="titleHolder descLabelHolder">Description</label>
                            <input className="inputHolder" placeholder="Optional description" />
                        </div>
                        <div className="titleAndDivHolder">
                            <label className="titleHolder descLabelHolder">Time</label>
                            <div className="timeSlotsHolder">
                                <div className="widthForTimeSlotsHolder">
                                    <Select styles={customStylesForFromDate} options={optionsTime} />
                                </div>
                                <div className="toTextHolder">to</div>
                                <div  className="widthForTimeSlotsHolder">
                                    < Select styles={customStylesForToDates} options={optionsTimeTo} />
                                </div>
                            </div>
                                
                        </div>
                        <div className="checkBoxAndDivHolder">
                            <CheckboxComponent label="All day" />
                            <div className="titleAndDivHolder">
                            <label className="titleHolder descLabelHolder">Repeat every</label>   
                        </div>
                        </div>
                        <div>
                            <span>
                                <button>M</button>
                            </span>
                            <span>
                                <button>T</button>
                            </span>
                            <span>
                                <button>W</button>
                            </span>
                            <span>
                                <button>T</button>
                            </span>
                            <span>
                                <button>F</button>
                            </span>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="cancelButton" onClick={handleClose}>Cancel</Button>
                    <Button  className="addButton" onClick={handleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DibberModal;