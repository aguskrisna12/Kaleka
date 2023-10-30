function List({item, handleDelete, setActiveItem, setShowModalEdit}) {

  return (
    <>
        <div className="w-full rounded-[3px] bg-zinc-100 px-[48px] mb-[6px]">
            <div className="flex flex-col md:flex-row md:justify-between md:py-2 pb-5">
                <div className="flex py-3 grow">
                    <div className="min-w-[30%] md:w-[100px]">
                        <p className="text-stone-500 text-sm font-bold fontInter">Username</p>
                        <p className="text-black text-lg font-bold fontInter pr-3">{item.username}</p>
                    </div>
                    <div>
                        <p className="text-stone-500 text-sm font-bold fontInter">Email</p>
                        <p className="text-black text-lg font-bold fontInter">{item.email}</p>
                    </div>
                </div>
                <div className="flex gap-x-4">
                    <div className="flex items-center">
                        <button onClick={() => {setShowModalEdit(true); setActiveItem(item)}} className="px-6 py-2 bg-lime-700 text-white shadow-md rounded-[10px]"><div className="text-white text-lg font-bold fontInter">Ubah</div></button>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => handleDelete(item.id)} className="px-6 py-2 bg-red-700 text-white shadow-md rounded-[10px]"><div className="text-white text-lg font-bold fontInter">Hapus</div></button>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default List