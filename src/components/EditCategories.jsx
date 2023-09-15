import axios from "axios";
import React, { useState } from "react";
import { onSubmitReload } from "../utils/utils";
import { Toaster, toast } from "sonner";

const EditCategories = ({ categories }) => {
  const [newCategory, setNewCategory] = useState("");
  const [editingCategoryIndex, setEditingCategoryIndex] = useState(-1);
  
  
  const handleSubmit = () => {
    if (!newCategory) return toast.error("Debe ingregar una categoria");
    axios
      .post(`/api/categories/create`, {
        type: newCategory,
      })
      .then(() => {
        toast.success("Categoria creada!");
        // onSubmitReload();
        setTimeout(() => {
          onSubmitReload();
        }, 1500);
      });
  };

  const handleDelete = (category) => {
    axios.delete(`/api/categories/${category.id}`).then(() => {
      toast.success("Categoria eliminada!");
      setTimeout(() => {
        onSubmitReload();
      }, 1500);
    });
  };

  const handleEditClick = (index) => {
    setEditingCategoryIndex(index);
    setNewCategory(categories[index].type);
  };

  const handleSaveClick = (category) => {
    axios
      .put(`/api/categories/${category.id}`, {
        type: newCategory,
      })
      .then(() => {
        toast.success("Categoría actualizada!");
        setEditingCategoryIndex(-1);
        setTimeout(() => {
          onSubmitReload();
        }, 1500);
      });
  };

  const handleCancelClick = () => {
    setEditingCategoryIndex(-1);
    setNewCategory("");
  };

  return (
    <div style={{ textAlign: "center", margin: "2%" }}>
      <Toaster richColors position="top-center" />
      <h1>Categorías</h1>
      <div
        className="input-group mb-3"
        style={{ width: "60%", margin: "2% auto" }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Nueva Categoría"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={() => handleSubmit()}
        >
          Agregar
        </button>
      </div>

      <ul
        className="list-group"
        style={{ justifyContent: "center", margin: "2% auto", width: "60%" }}
      >
        {categories.map((category, index) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={category.id}
            >
              {editingCategoryIndex === index ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <div style={{ width: "30%" }}>
                    <button
                      style={{ marginLeft: "2%" }}
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={() => {
                        if (!newCategory)
                          return alert("Debe agregar un nombre de categoría");
                        handleSaveClick(category);
                      }}
                    >
                      Guardar
                    </button>
                    <button
                      style={{ marginLeft: "2%" }}
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={handleCancelClick}
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {category.type}
                  <div style={{ width: "20%" }}>
                    <button
                      style={{ marginLeft: "2%" }}
                      type="button"
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEditClick(index)}
                    >
                      Editar
                    </button>
                    <button
                      style={{ marginLeft: "2%" }}
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(category)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EditCategories;
