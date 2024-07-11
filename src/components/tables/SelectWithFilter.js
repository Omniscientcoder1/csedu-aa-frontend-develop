import { TextField, Autocomplete } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export function SelectWithFilter({
    name,
    label,
    options,
    defaultValue,
    control,
  }) {
    const { setValue } = useFormContext();
    const [filteredOptions, setFilteredOptions] = useState(options);
  
    useEffect(() => {
      setValue(name, defaultValue);
    }, [defaultValue]);
  
    const handleInputChange = (event, value) => {
      if (!value) {
        setFilteredOptions(options);
        return;
      }
      const inputValue = value.trim().toLowerCase();
      setFilteredOptions(
        options.filter((option) =>
          option.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    };
  
    return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Autocomplete
              {...field}
              options={filteredOptions}
              onChange={(event, value) => {
                setValue(name, value ? value.value : '');
              }}
              inputValue={field.value}
              onInputChange={handleInputChange}
              renderInput={(params) => (
                <TextField {...params} label={label} variant="outlined" margin="normal"/>
              )}
              getOptionLabel={(option) => option.name}
              getOptionSelected={(option, value) => option.value === value.value}
            />
          )}
        />
    );
  }