import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { axiosInstance } from "../../api calls/api";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";

const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  border: transparent;
  background-color: transparent;
  border: transparent;
`;
const TableHeader = styled.h1`
  color: #373b61;
  padding: 0px 0 15px 15px;
`;

const BasicTable = () => {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const adminOptions = [
    { label: "True", value: true },
    { label: "False", value: false },
  ];

  const [users, setUsers] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState(null);

  const [isAdmin, setIsAdmin] = useState(Boolean);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notify = (notify) => {
    toast(notify, {
      position: "top-center",
    });
  };

  // function to update User
  const updateUser = (userId, email, username, isAdmin) => {
    const body = {
      email: email,
      username: username,
      isAdmin: isAdmin,
    };

    axiosInstance
      .put(`/api/v1/users/update/${userId}`, body)
      .then((res) => {
        console.log("user Updated successfully", res.data);
        notify("User Updated");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
      .catch((err) => {
        console.log("error updating user", err);
      });
  };

  // function to delete a User
  const deleteUser = (id) => {
    try {
      const res = axiosInstance.delete(`/api/v1/${id}`);
      notify("User Deleted");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosInstance.get(`/api/v1/users`);
        const updatedUsers = res.data.map((users) => ({
          id: users._id,
          name: users.username,
          email: users.email,
          admin: users.isAdmin,
          created: users.createdAt,
          updated: users.updatedAt,
        }));
        setUsers(updatedUsers);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "USERNAME", width: 200 },
    { field: "email", headerName: "EMAIL", width: 200 },
    { field: "admin", headerName: "IS ADMIN", width: 150 },
    { field: "created", headerName: "CREATED AT", width: 200 },
    { field: "updated", headerName: "UPDATED AT", width: 180 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,

      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        const inModalUser = params.row;
        const userIsAdmin = params.row.admin;

        const buttonText = userIsAdmin ? (
          <Tooltip title="Cannot Delete another admin" arrow>
            <span>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            </span>
          </Tooltip>
        ) : (
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              deleteUser(params.id);
            }}
          >
            Delete User
          </Button>
        );
        const editButton = userIsAdmin ? (
          <Tooltip title="Cannot Edit another admin" arrow>
            <span>
              <Button variant="outlined" disabled>
                Disabled
              </Button>
            </span>
          </Tooltip>
        ) : (
          <>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                handleOpen();
                setSelectedUserId(params.id);
                // console.log(inModalUser);
              }}
            >
              edit user
            </Button>
            <Modal
              open={selectedUserId === params.id && open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  edit user "{inModalUser.name}"
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <UserForm>
                    <div className="addProductItem">
                      <label>Username:</label>
                      <input
                        type="text"
                        value={username}
                        required
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        placeholder={inModalUser.name}
                      />
                    </div>
                    <div className="addProductItem">
                      <label>email: </label>
                      <input
                        value={email}
                        name="title"
                        type="text"
                        required
                        placeholder={inModalUser.email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="addProductItem">
                      <label>isAdmin: </label>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={adminOptions}
                        sx={{ width: 250 }}
                        renderInput={(params) => (
                          <TextField {...params} label="Admin" />
                        )}
                        onChange={(event, newValue) => {
                          setIsAdmin(newValue.value);
                        }}
                      />
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        updateUser(inModalUser.id, email, username, isAdmin);
                      }}
                    >
                      edit user
                    </Button>
                  </UserForm>
                </Typography>
              </Box>
            </Modal>
          </>
        );

        return (
          <ButtonDiv>
            {buttonText}
            {editButton}
          </ButtonDiv>
        );
      },
    },
  ];

  return (
    <>
      <TableHeader>List of Active Users</TableHeader>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          sx={"padding-left: 15px"}
          rows={users}
          columns={columns}
          pageSize={1}
          rowsPerPageOptions={[1]}
        />
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343434",
          color: "#fff",
          fontSize: "18px",
        }}
      />
    </>
  );
};

export default BasicTable;
