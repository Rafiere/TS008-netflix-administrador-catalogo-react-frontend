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
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Category, selectCategoryById } from "../categorySlice";

/**
 * Essas propriedades definirão as propriedades dos
 * componentes que estamos reutilizando.
 */
type Props = {
  category: Category;
  isDisabled?: boolean;
  isLoading?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CategoryFrom({
  category,
  isDisabled = false,
  isLoading = false,
  onSubmit,
  handleChange,
  handleToggle,
}: Props) {
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>

        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    value={category.name}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />

                  <TextField
                    required
                    name="description"
                    label="Description"
                    value={category.description}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_active}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label={"Active"}
                  />
                </FormGroup>
              </Grid>

              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <Button variant="contained" component={Link} to="/categories">
                    Back
                  </Button>

                  <Button variant="contained" component={Link} to="/categories">
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
