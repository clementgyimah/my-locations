//Calling all necessary packages and libraries
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, saveNewCategory, updateCategory } from '../features/categoriesSplice';
import '../css/Modal.css';

export default function Locations(props) {
    //declaration of state variables
    const showEditModal = props.show ? 'modal display-block' : 'modal display-none';
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [editCategory, setEditCategory] = useState("");
    const category = useSelector(selectCategory);
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

    //expression to take care of editing category
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

    //expression to monitor input values during the editing
    const editCategoryFunc = (e) => {
        setEditCategory(e.target.value);
    }

    return (
        <div className={showEditModal}>
            <div className="modal-main">
                <div className="modal-title">{isNewCategory ? <span>New Category</span> : <span>Edit Category</span>}</div>
                <div className="category-info-div">
                    <div className="details-div">
                        <label htmlFor="label-for-category" className="label-span">Name: </label>
                        <input type="text" id="label-for-category" className="edit-category-input-text" placeholder="Category" value={editCategory} onChange={editCategoryFunc} />
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
