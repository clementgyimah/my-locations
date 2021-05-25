//Calling all necessary packages and libraries
import React, { useState, useEffect } from 'react';
import { /*useSelector,*/ useDispatch } from 'react-redux';
import { /*selectCategory,*/ saveNewCategory, updateCategory } from '../features/categoriesSplice';
import '../css/Modal.css';

export default function Locations(props) {
    //declaration of state variables
    const showEditModal = props.show ? 'modal display-block' : 'modal display-none';
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [editLocation, setEditLocation] = useState("");
    const [editAddress, setEditAddress] = useState("");
    const [editCoordinates, setEditCoordinates] = useState("");
    const [editCategory, setEditCategory] = useState("");
    //const category = useSelector(selectCategory);
    const dispatch = useDispatch();
    //const location = useSelector((state) => state.location.value)

    //react hook that starts first when component mounts or any of the varibales in the array changes
    useEffect(() => {
        var isSubscribed = true;
        if (isSubscribed) {
            setEditCategory(props.cEditCategory);
            setIsNewCategory(props.newCategoryAdd);
        }
        return () => isSubscribed = false;
    }, [props.cEditCategory, props.newCategoryAdd])

    //expression to take care of editing location
    const handleEditDetails = () => {
        return (
            isNewCategory ?
                dispatch(saveNewCategory(editCategory)) :
                dispatch(updateCategory(editCategory))
        );
    }

    //expression used to close modal
    const handleCloseModal = () => {
        console.log('close');
        console.log('show: ' + props.show);
        return props.handleClose();
    }

    //expressions to monitor input values during the editing
    const editLocationFunc = (e) => {
        setEditLocation(e.target.value);
    }
    const editAddressFunc = (e) => {
        setEditAddress(e.target.value);
    }
    const editCoordinatesFunc = (e) => {
        setEditCoordinates(e.target.value);
    }
    const editCategoryFunc = (e) => {
        setEditCategory(e.target.value);
    }

    return (
        <div className={showEditModal}>
            <div className="modal-main">
                <div className="modal-title">{isNewCategory ? <span>New Location</span> : <span>Edit Location</span>}</div>
                <div className="category-info-div">
                    <div className="details-div">
                        <label htmlFor="label-for-location-name" className="label-span">Name: </label>
                        <input type="text" id="label-for-location-name" className="edit-category-input-text" placeholder="Location" value={editLocation} onChange={editLocationFunc} />
                    </div>
                    <div className="details-div">
                        <label htmlFor="label-for-location-address" className="label-span">Address: </label>
                        <input type="text" id="label-for-location-address" className="edit-category-input-text" placeholder="Address" value={editAddress} onChange={editAddressFunc} />
                    </div>
                    <div className="details-div">
                        <label htmlFor="label-for-location-coordinates" className="label-span">Coordinates: </label>
                        <input type="text" id="label-for-location-coordinates" className="edit-category-input-text" placeholder="Coordinates" value={editCoordinates} onChange={editCoordinatesFunc} />
                    </div>
                    <div className="details-div">
                        <label htmlFor="label-for-location-category" className="label-span">Category: </label>
                        <input type="text" id="label-for-location-category" className="edit-category-input-text" placeholder="Category" value={editCategory} onChange={editCategoryFunc} />
                    </div>
                </div>
                <div className="buttons-div">
                    {/**"Save" and "Close" buttons for the modal */}
                    <span className="save-button" onClick={() => handleEditDetails()}>Save</span><span className="close-button" onClick={() => handleCloseModal()}>Close</span>
                </div>

            </div>
        </div>
    );
}
