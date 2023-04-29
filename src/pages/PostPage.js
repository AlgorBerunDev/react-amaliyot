import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import http from "../utils/http";
import PostCreateModal from "../modules/post/post-create-modal";
import Button from "@mui/material/Button";

const getColumns = ({ handleDelete }) => {
  return [
    { field: "title", headerName: "Title", width: 150 },
    { field: "content", headerName: "Content", width: 150 },
    { field: "published", headerName: "Published", width: 150 },
    {
      field: "author",
      valueGetter: ({ value }) => value.username,
      headerName: "Author Username",
      width: 150,
    },
    {
      field: "id",
      renderCell: params => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>Delete</Button>
          </>
        );
      },
    },
  ];
};

export default function PostPage() {
  const [rows, setRows] = useState([]);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  const fetchPosts = () => {
    return http({
      url: `/post?page=${paginationModel.page}&pageSize=${paginationModel.pageSize}`,
      success: function (response) {
        setRows(response.data);
      },
    });
  };

  const handleDelete = id => {
    return http({
      url: "/post/" + id,
      method: "DELETE",
      success: function (response) {
        fetchPosts();
      },
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-page">
      <h1>Post page</h1>
      <PostCreateModal onSuccess={() => fetchPosts()} />
      <div style={{ width: "90%", margin: "0 auto" }}>
        <DataGrid
          rows={rows}
          columns={getColumns({ handleDelete })}
          initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
          pageSizeOptions={[5, 10, 25]}
          autoHeight={true}
          onPaginationModelChange={pagination => {
            setPaginationModel(pagination);
          }}
        />
      </div>
    </div>
  );
}
