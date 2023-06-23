import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostManager from "../../repositories/PostManager";

export default function UserProfileContainer() {
  const { posts } = useSelector(state => state);
  const { posts: defaultRenderData } = useDispatch()

  const [deleteModal, setDeleteModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [editId, setEditId] = useState(null)
  const [editedPostData, setEditedPostData] = useState({})


  const reRender = () => {
    defaultRenderData.get()
  }

  const handleDelete = (id) => {
    setDeleteId(id)
    setDeleteModal(true)
  }

  const handleEdit = async (id) => {
    await setEditId(id)
    const data = await PostManager.getOnePost(id)
    setEditedPostData(data)
    setEditModal(true)
  }

  const sureDelete = () => {
    setDeleteModal(false)
    defaultRenderData.delete(deleteId)
  }

  const newValueImgUrl = useRef('')
  const newValueTitle = useRef('')

  const sureEdit = async (e) => {
    e.preventDefault()
    defaultRenderData.edit({ editId, title: newValueTitle.current.value, imgUrl: newValueImgUrl.current.value })
    setEditModal(false)
  }

  useEffect(() => {
    reRender()
  }, [])

  return (
    <div>
      <div className="px-5 py-4 d-flex">
        {
          posts.current ? (
            posts.current.map((e) => {
              return (
                <div className="card col-2 p-2 m-2" key={e.id}>
                  <img src={e.imgUrl} alt="profil picture" height={300} className="card-img object-fit-cover" />
                  <div className="card-content py-2">
                    <p className="card-title text-capitalize fs-4">{e.title}</p>
                    <button className="btn btn-warning ms-auto me-2" onClick={() => handleEdit(e.id)}>Edit</button>
                    <button onClick={() => handleDelete(e.id)} className="btn btn-danger">Delete</button>
                  </div>
                </div>
              )
            })
          ) : ""
        }
      </div>

      {
        deleteModal || editModal ? (
          <div className="flex position-absolute top-0 start-0 end-0 bottom-0 m-auto" style={{ backgroundColor: 'rgba(0,0,0,0.7)', }}>
            <div className="modal-dialog bg-light w-50 p-5 rounded-3 mt-100">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    {
                      deleteModal ? "Delete post?" : "Edit modal"
                    }
                  </h1>
                  <button type="button" className="btn-close" onClick={() => deleteModal ? setDeleteModal(false) : setEditModal(false)}></button>
                </div>
                <div className="modal-body py-2">
                  {
                    editModal ? (
                      <form onSubmit={sureEdit}>
                        <input ref={newValueTitle} className="form-control mb-3 " type="text" defaultValue={editedPostData.title} />
                        <input ref={newValueImgUrl} className="form-control mb-3 " type="text" defaultValue={editedPostData.imgUrl} />

                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" onClick={() => deleteModal ? setDeleteModal(false) : setEditModal(false)} >Cancel</button>
                          <button type="button" className="btn btn-primary" onClick={deleteModal ? sureDelete : sureEdit}>{deleteModal ? "Yes delete" : "Save"}</button>
                        </div>
                      </form>
                    ) : ""
                  }
                </div>
                {
                  deleteModal ? (
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={() => deleteModal ? setDeleteModal(false) : setEditModal(false)} >Cancel</button>
                      <button type="button" className="btn btn-primary" onClick={deleteModal ? sureDelete : sureEdit}>{deleteModal ? "Yes delete" : "Save"}</button>
                    </div>
                  ) : ""
                }
              </div>
            </div>
          </div>
        ) : ""
      }


    </div>
  );
}
