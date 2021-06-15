import classes from './NewDevice.module.css';
import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import axios from 'axios';
import IncidentTable from '../../components/UI/IncidentTable/IncidentTable';

const NewDevice = (props) => {

    const [device, setDevice] = useState({
        type: 'Breaker',
        name: '1',
        address: '',
        coordinates: ''
    })

    const [filter, setFilter] = useState({
        type: '',
        name: '',
        address: '',
        coordinates: '',
        id: ''
    })


    const [filteredDevices, setFilteredDevices] = useState([]);
    const [devices, setDevices] = useState([])
    const [showfilter, setFilterShow] = useState(false);

    const columns = [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'Coordinates',
            accessor: 'coordinates'
        },
        {
            Header: 'Address',
            accessor: 'address'
        },
    ]

    useEffect(() => {
        axios.get('http://localhost:60259/api/Devices').then(response => {
            console.log(response);
            setDevices(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const handleChange = (event) => {

        setDevice(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const addDeviceHandler = () => {

        console.log(device);

        axios.post('http://localhost:60259/api/Devices', device)
            .then(function (response) {
                console.log(response);
                setDevices(prevState => {
                    return [...prevState, response.data]
                })
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    const showFilterHandler = () => {
        setFilterShow(prevState => {
            return !prevState;
        });
    }

    const onFilterHandler = () => {


        setFilteredDevices([]);

        devices.map(device => {
            if (filter.id ? filter.id == device.id : true
                && filter.name ? filter.name === device.name : true
                    && filter.address ? filter.address === device.address : true
                        && filter.coordinates ? filter.coordinates === device.coordinates : true
                        && filter.type !== 'All' && filter.type === device.type
            ) {
                setFilteredDevices(prevState => {
                    return [...prevState, device]
                })
            }
        })
    }

    const onFilterChange = (event) => {
        setFilter(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <DashboardLayout title="Device - new">
            <div className={classes.NewDevice}>
                <form className={classes.Form}>
                    <div className={classes.Container}>
                        <label>Type:</label>
                        <select onChange={handleChange} value={device.type} name="type">
                            <option>Breaker</option>
                            <option>Fuse</option>
                        </select>
                    </div>

                    {/* <div className={classes.Container}>
                        <label>Name:</label>
                        <p>Name + id</p>
                    </div> */}
                    <div className={classes.Container}>
                        <label>Address:</label>
                        <input type="text" onChange={handleChange} value={device.address} name="address"></input>
                    </div>
                    <div className={classes.Container}>
                        <label>Coordinates:</label>
                        <input type="text" onChange={handleChange} value={device.coordinates} name="coordinates"></input>
                    </div>
                </form>
                <button onClick={addDeviceHandler} type="submit"
                    disabled={!device.coordinates.length || !device.address.length}
                >Add</button>
            </div>
            {devices.length > 0 ?
                <IncidentTable tableColumns={columns} tableData={filteredDevices.length > 0 ? filteredDevices : devices} />
                : null}

            <button onClick={showFilterHandler}>Filter</button>
            {showfilter ?

                <div className={classes.Filter}>
                    <div className={classes.FilterContainer}>
                        <label>Id:</label>
                        <input type="text" onChange={onFilterChange} value={filter.id} name="id"></input>
                    </div>
                    <div className={classes.FilterContainer}>
                        <label>Name:</label>
                        <input type="text" onChange={onFilterChange} value={filter.name} name="name"></input>
                    </div>
                    <div className={classes.FilterContainer}>
                        <label>Address:</label>
                        <input type="text" onChange={onFilterChange} value={filter.address} name="address"></input>
                    </div>
                    <div className={classes.FilterContainer}>
                        <label>Coordinates:</label>
                        <input type="text" onChange={onFilterChange} value={filter.coordinates} name="coordinates"></input>
                    </div>
                    <div className={classes.FilterContainer}>
                        <label>Type:</label>
                        <select onChange={onFilterChange} value={filter.type} name="type">
                            <option>All</option>
                            <option>Breaker</option>
                            <option>Fuse</option>
                        </select>
                    </div>
                    <button className={classes.FilterButton} onClick={onFilterHandler}>Filter</button>
                </div>
                : null}

        </DashboardLayout>
    )
}


export default NewDevice;