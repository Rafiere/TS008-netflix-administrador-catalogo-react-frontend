import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategoryById } from "./categorySlice";
import { CategoryFrom } from "./components/CategoryFrom";

export const CategoryEdit = () => {
  const id = useParams().id || ""; //Esse hook permitirá que tenhamos acesso ao atributo "ID" da categoria.
  const category = useAppSelector((state) => selectCategoryById(state, id));
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e: any) => {};

  /**
   * Essa função realizará as ações quando o "toggle button" for
   * clicado.
   */
  const handleToggle = (e: any) => {};

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <CategoryFrom
          category={category}
          isDisabled={isDisabled}
          isLoading={false}
          onSubmit={() => {}}
          handleChange={handleChange}
          handleToggle={handleToggle}
        ></CategoryFrom>
      </Paper>
    </Box>
  );
};
