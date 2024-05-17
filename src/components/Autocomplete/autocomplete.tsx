import {
  CircularProgress,
  Autocomplete as MuiAutocomplete,
  TextField,
} from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { getDropdownList } from "./../../mock";
import { autocompleteStyles } from "./../../styles";

const Autocomplete = () => {
  const [inputText, setInputText] = useState("");
  const [options, setOptions] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setData = async () => {
      if (inputText.split("").length > 1) {
        setLoading(true);
        const options: any = await getDropdownList(3);
        setOptions(options);
        setLoading(false);
      }
    };
    setData();
  }, [inputText]);

  const handleChange = async (
    _event: SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setInputText(value);
    if (value.split("").length === 0) {
      if (open) setOpen(false);
    } else {
      if (!open) setOpen(true);
    }
  };

  return (
    <MuiAutocomplete
      data-testid={"autocomplete"}
      disablePortal
      filterOptions={(options) => options}
      options={Array.isArray(options) ? options : []}
      multiple={false}
      loading={loading}
      onClose={() => setOpen(false)}
      openOnFocus={false}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={autocompleteStyles.inputFieldRoot}
          label="Expense Category"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onInputChange={handleChange}
      open={open}
    />
  );
};

export default Autocomplete;
