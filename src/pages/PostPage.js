import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import http from "../utils/http";

const columns = [
  { field: "title", headerName: "Title", width: 150 },
  { field: "content", headerName: "Content", width: 150 },
  { field: "published", headerName: "Published", width: 150 },
  {
    field: "author",
    valueGetter: ({ value }) => value.username,
    headerName: "Author Username",
    width: 150,
  },
];

export default function PostPage() {
  const [rows, setRows] = useState([]);

  const fetchPosts = () => {
    return http({
      url: "/post",
      success: function (response) {
        setRows(response.data);
      },
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="post-page">
      <h1>Post page</h1>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}
