import { useState } from "react";

function ModalEdit({visible, handleEdit, item, setShowModalEdit}) {

    if (!visible) return null;

    const [newObj, setNewObj] = useState({id: item.id, username: item.username, email:item.email})

    const handleChange = (key, value) => {
        const newFormData = {...newObj}
        newFormData[key] = value
        setNewObj(newFormData)
    }

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-xl bold pb-4">Edit Data</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input onChange={(e) => handleChange('username', e.target.value)} 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" 
                                    type="text" placeholder="Username" value={newObj.username} />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input onChange={(e) => handleChange('email', e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="email" placeholder="Email" value={newObj.email}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <button onClick={() => handleEdit(newObj)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Save
                                </button>
                                <button onClick={(e) => {e.preventDefault(); setShowModalEdit(false)}} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEdit