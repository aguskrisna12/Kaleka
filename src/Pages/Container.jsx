import { useEffect, useState } from "react"
import Modal from "../Components/Modal"
import List from "../Components/List"
import ModalEdit from '../Components/ModalEdit'


function Container() {

    const [showModal, setShowModal] = useState(false)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [activeItem, setActiveItem] = useState({})
    const [dataApi, setDataApi] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const api = "https://run.mocky.io/v3/db7714b9-4225-4441-8688-a30661ffa83c"

    const fetchApi = () => {
        fetch(api)
        .then(res => res.json())
        .then(result => {
            setDataApi(result.data)
            localStorage.setItem('dataPengguna', JSON.stringify(result.data))
        } )
    }


    useEffect(() => {
        let dataPenggunaFromStorage = localStorage.getItem('dataPengguna')
        if(dataPenggunaFromStorage){
            dataPenggunaFromStorage = JSON.parse(dataPenggunaFromStorage)
        }

        if(dataPenggunaFromStorage && dataPenggunaFromStorage.length > 0){
            setDataApi(dataPenggunaFromStorage)
        } else {
            fetchApi()
        }
    },[])

    const handleDelete = (id) => {
        const filterData = dataApi.filter(item => item.id !== id)
        setDataApi(filterData)
        localStorage.setItem('dataPengguna', JSON.stringify(filterData))
    }

    const validateData = (data) => {
        let valid = true
        if(!data || !data.username || !data.email){
            valid = false
        }

        return valid
    }
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = dataApi.length + 1
        const newData = {id: newId, username: name, email: email};

        const valid = validateData(newData)

        if(!valid){
            return alert('username atau email tidak boleh kosong')
        }

        dataApi.push(newData)
        setName('')
        setEmail('')
        localStorage.setItem('dataPengguna', JSON.stringify(dataApi))
        setShowModal(false)
    }

    const handleEdit = (newItem) => {
        const newListData = [...dataApi];
        const indexToUpdate = newListData.findIndex((data) => data.id === newItem.id);
        newListData[indexToUpdate] = newItem;
        const valid = validateData(newItem)

        if(!valid){
            return alert('username atau email tidak boleh kosong')
        }
        setDataApi(newListData)
        localStorage.setItem('dataPengguna', JSON.stringify(newListData))
        setShowModalEdit(false)
    }

    let dataLength = dataApi.length

  return (
    <>
        <div className="w-full bg-white px-5">
            <div className="flex justify-between pt-5">
                <h1 className="text-black text-xl font-bold fontInter pt-4">DATA PENGGUNA</h1>
                <button onClick={() => setShowModal(true)} className="py-2 px-5 bg-[#538600] shadow-md rounded-lg text-white"><div className="text-white text-lg font-bold fontInter">Tambah</div></button>
            </div>
            <div className="w-full h-px relative bg-black bg-opacity-20 my-4" />
            {dataApi.map((item) => (
                <List item={item} handleDelete={handleDelete} setActiveItem={setActiveItem} showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit}/>
            ))}
            <div className="pt-2 pb-5 text-black text-lg font-bold fontInter">Jumlah data {dataLength}</div>
            <Modal handleSubmit={handleSubmit} setName={setName} setEmail={setEmail} visible={showModal} setShowModal={setShowModal}/>
            <ModalEdit visible={showModalEdit} handleEdit={handleEdit} setShowModalEdit={setShowModalEdit} dataApi={dataApi} item={activeItem} />
        </div>
    </>
  )
}

export default Container