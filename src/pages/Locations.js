import React, { useState } from 'react';
import '../css/Tabs.css';
import { FaLayerGroup, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillFileAdd } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import EditLocationModal from './EditLocationModal';

export default function Locations(props) {
    const [categoryTab, setCategoryTab] = useState("category-tab-div");
    const [locationTab, setLocationTab] = useState("location-tab-active-div");
    const [showEditLocationModal, setShowEditLocationModal] = useState(false);
    const [addNewLocation, setAddNewLocation] = useState(false);
    const [editLocation, setEditLocation] = useState("");
    const [editAddress, setEditAddress] = useState("");
    const [editCoordinates, setEditCoordinates] = useState("");
    const [editCategory, setEditCategory] = useState("");
    const history = useHistory();

    //expression to make category tab active
    const categoryTabFunc = () => {
        setCategoryTab("category-tab-active-div");
        setLocationTab("location-tab-div");
        history.push('/');
    }

    //expression to make location tab active
    const locationTabFunc = () => {
        setCategoryTab("category-tab-div");
        setLocationTab("location-tab-active-div");
    }

    //handle editing a location
    const handleEdit = (name) => {
        setAddNewLocation(false);
        setShowEditLocationModal(true);
    }

    //handle deleting a location
    const handleDelete = (name) => {
        console.log('Delete' + name);
    }

    //expression to handle closing the edit modal
    const closeTempModal = () => {
        setShowEditLocationModal(false);
    }

    const openAddNewCategoryFunc = () => {
        setEditLocation("");
        setEditAddress("");
        setEditCoordinates("");
        setEditCategory("");
        setAddNewLocation(true);
        setShowEditLocationModal(true);
    }

    return (
        <div className="tabs-container">
            <header className="main-header">
                <div className="category-title-text">Locations</div>
                <div className="add-category-icon" onClick={() => openAddNewCategoryFunc()}><AiFillFileAdd color="white" size={35} /></div>
            </header>
            <div className="category-body">
                <EditLocationModal
                    show={showEditLocationModal}
                    newLocationAdd={addNewLocation}
                    cEditLocation={editLocation}
                    cEditAddress={editAddress}
                    cEditCoordinates={editCoordinates}
                    cEditCategory={editCategory}
                    handleClose={() => closeTempModal()}
                />
                {/**table div */}
                <div className="category-table-div">
                    <table className="category-table" rules="all">
                        <thead className="category-table-thread">
                            <tr className="category-table-thread-tr">
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Name</div></th>
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Address</div></th>
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Coordinates</div></th>
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Category</div></th>
                                <th className="category-table-thread-tr-th" scope="col"><div className="table-cells-div">Action</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="category-table-tbody-tr" key={1}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">Kumasi</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">LVB 6, BLK 6</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">E 70</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">Ghana</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span onClick={() => handleEdit('Kumasi')} id="edit-icon"><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
                            </tr>
                            <tr className="category-table-tbody-tr" key={2}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">California</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">LVB 6, BLK 6</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">N 60</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">USA</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span id="edit-icon" onClick={() => handleEdit('California')}><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
                            </tr>
                            <tr className="category-table-tbody-tr" key={3}>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">London</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">LVB 6, BLK 6</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">S 80</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div">England</div></td>
                                <td className="category-table-tbody-tr-td"><div className="table-cells-div"><span id="edit-icon" onClick={() => handleEdit('London')}><FaEdit color="#387C44" size={15} /></span><span onClick={() => handleDelete('ghana')} id="delete-icon"><FaTrashAlt color="#387C44" size={15} /></span></div></td>
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
