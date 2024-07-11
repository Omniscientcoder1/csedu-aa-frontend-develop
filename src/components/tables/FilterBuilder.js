import { Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { SelectWithFilter } from './SelectWithFilter';

const FilterBuilder = ({ filterFields, handleFilterSubmit }) => {
  const { register, handleSubmit, reset, control, setValue } = useForm();
  return (
    <FormProvider setValue={setValue}>
    <form onSubmit={handleSubmit(handleFilterSubmit)}>
      <Row className="m-2">
        {filterFields.map((filter) => (
          <Col md={4} sm={12}>
            {filter.type === 'string' && (
              <TextField
                key={filter.field}
                fullWidth
                margin="normal"
                variant="outlined"
                label={`Filter by ${filter.label}`}
                {...register(filter.field)}
              />
            )}
            {filter.type === 'select' && (
              <SelectWithFilter
                name={filter.field}
                label={`Filter by ${filter.label}`}
                options={filter?.options}
                control={control}
              />
            )}
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-end m-4">
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {
            reset();
          }}
          className="me-2"
        >
          Reset
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Filter
        </Button>
      </div>
    </form>
    </FormProvider>
  );
};

export default FilterBuilder;
