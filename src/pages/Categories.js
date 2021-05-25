import React, { useState } from 'react';
import '../css/Tabs.css';
import { FaLayerGroup, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillFolderAdd } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import EditModal from './EditCategoryModal';

export default function Categories() {
    const [categoryTab, setCategoryTab] = useState("category-tab-active-div");
    const [locationTab, setLocationTab] = useState("location-tab-div");
    const [showEditModal, setShowEditModal] = useState(false);
    const [addNewCategory, setAddNewCategory] = useState(false);
    const [editCategory, setEditCategory] = useState("");
    const history = useHistory();

    //expression to make category tab active
    const categoryTabFunc = () => {
        setCategoryTab("category-tab-active-div");
        setLocationTab("location-tab-div");
    }

    //expression to make location tab active
    const locationTabFunc = () => {
        setCategoryTab("category-tab-div");
        setLocationTab("location-tab-active-div");
        history.push('/location');
    }

    //handle editing a category
    const handleEdit = (name) => {
        setAddNewCategory(false);
        setShowEditModal(true);
    }

    //handle deleting a category
    const handleDelete = (name) => {
        console.log('Delete' + name);
    }

    //expression to handle closing the edit modal
    const closeTempModal = () => {
        setShowEditModal(false);
    }

    const openAddNewCategoryFunc = () => {
        setEditCategory("");
        setAddNewCategory(true);
        setShowEditModal(true);
    }

    return (
        <div className="tabs-container">
            <header className="main-header">
                <div className="category-title-text">Categories</div>
                <div className="add-category-icon" onClick={() => openAddNewCategoryFunc()}><AiFillFolderAdd color="white" size={35} /></div>
            </header>
            <div className="category-body">
            <EditModal show={showEditModal} newCategoryAdd={addNewCategory} cEditCategory={editCategory} handleClose={() => closeTempModal()} />
                {/**table div */}
                <div className="category-table-div">
                    <table className="category-table" rules="all">
                        <thead className="category-table-thread">
                            <tr className="category-table-thread-tr">
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Name</div></th>
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Action</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="category-table-tbody-tr" key={null}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">Ghana</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span onClick={() => handleEdit('ghana')} id="edit-icon"><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
                            </tr>
                            <tr className="category-table-tbody-tr" key={null}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">USA</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span id="edit-icon" onClick={() => handleEdit('ghana')}><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
                            </tr>
                            <tr className="category-table-tbody-tr" key={null}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">Spain</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span id="edit-icon" onClick={() => handleEdit('ghana')}><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*<div>Location: <span>{location}</span></div>*/}
            </div>
            <div className="tabs-div">
                <div onClick={() => categoryTabFunc()} className={categoryTab}><FaLayerGroup color="#387C44" /></div>
                <div onClick={() => locationTabFunc()} className={locationTab}><IoLocationSharp color="#387C44" /></div>
            </div>

        </div>

    );
}
