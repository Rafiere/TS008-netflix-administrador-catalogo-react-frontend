import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridRowEditStartReasons,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import DeleteIcon from "@mui/icons-material/Delete";

export const CategoryList = () => {
  const categories = useAppSelector(selectCategories);

  const componentProps = {
    toolbar: {
      showQuickFilter: true,
      quickFilterProps: { debounceMs: 500 },
    },
  };

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    is_active: category.is_active,
    created_at: new Date(category.created_at).toLocaleDateString("pt-BR"),
  }));

  /**
   * O campo "field" deve ser completamente igual ao nome que
   * está sendo mapeado das linhas.
   */

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      renderCell: (row) => renderNameCell(row),
    },
    {
      field: "is_active",
      headerName: "Is Active",
      flex: 1,
      type: "boolean",
      renderCell: (row) => renderIsActiveCell(row),
    },
    {
      field: "created_at",
      headerName: "Created at",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (row) => renderActionsCell(row),
    },
  ];

  /**
   * A função abaixo servirá para renderizarmos o campo "is_active"
   * dessa tabela.
   */
  function renderIsActiveCell(row: GridRenderCellParams) {
    return (
      <Typography color={row.value ? "primary" : "secondary"}>
        {row.value ? "Active" : "Inactive"}
      </Typography>
    );
  }

  /**
   * Essa função renderizará a célula "Actions", ou seja, carregará
   * o ícone de lixeira para essa célula. Como esse ícone não fará parte
   * da categoria, ele não precisou ser carregado no mapeamento.
   */
  function renderActionsCell(row: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log("clicked")}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    );
  }

  function renderNameCell(rowData: GridRenderCellParams) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/categories/edit/${rowData.id}`}
      >
        <Typography color="primary">{rowData.value}</Typography>
      </Link>
    );
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>
      <Typography variant="h3" component="h1">
        <Box sx={{ display: "flex", height: 600 }}>
          <DataGrid
            components={{ Toolbar: GridToolbar }}
            rowsPerPageOptions={[2, 20, 50, 100]}
            disableColumnSelector={true}
            disableColumnFilter={true}
            disableDensitySelector={true}
            checkboxSelection={true}
            rows={rows}
            columns={columns}
            componentsProps={componentProps}
          />
        </Box>

        {/* {categories.map((category) => (
          <Typography key={category.id}>{category.name}</Typography>
        ))} */}
      </Typography>
    </Box>
  );
};
