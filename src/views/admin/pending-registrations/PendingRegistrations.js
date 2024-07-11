// ** MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

// ** Demo Components Imports
import TableWithFilter from 'src/components/tables/TableWithFilter';
import {  getPendingUsers, acceptOrDeclineUser } from 'src/services/query/user';
import { Button } from '@mui/material';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import ViewPendingPopup from 'src/components/popup/ViewPendingPopup';
import { AuthContext } from 'src/context/AuthContext';

const generateBatchOptions = () => {
  const options = [];

  // Loop for BSc batches
  for (let i = 1; i <= 30; i++) {
    options.push({ name: `BSc - ${i.toString().padStart(2, '0')}`, value: `BSc - ${i.toString().padStart(2, '0')}` });
  }

  // Loop for MSc batches
  for (let i = 1; i <= 30; i++) {
    options.push({ name: `MSc - ${i.toString().padStart(2, '0')}`, value: `MSc - ${i.toString().padStart(2, '0')}` });
  }
  
  options.push({ name: `PHD`, value: `PHD` });

  return options;
};

const filterFields = [
  { label: 'Name', field: 'name', type: 'string' },
  { label: 'Username', field: 'username', type: 'string' },
  { label: 'Batch', field: 'batch', type: 'select', options: generateBatchOptions() },
];

const PendingRegistrations = () => {

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [forceReload, setForceReload] = useState(false);

  const onselectionchange = (users) => {
    setSelectedUsers(users);
  };

  const handleAccept = async (username) => {
    try {
      await acceptOrDeclineUser(username, true);      
      setForceReload((state) => !state);
      toast.success(`${username} has been accepted`);
    } catch (error) {
      toast.error('Error accepting user!');
    }
  };

  const handleDecline = async (username) => {
    try {
      await acceptOrDeclineUser(username, false);
      setForceReload((state) => !state);
      toast.warning(`${username} has been declined`);
    } catch (error) {
      toast.error('Error declining user!');
    }
  };


  const columns = [
    
    { id: 'username', label: 'Name' },
    { id: 'first_name', label: 'First Name' },
    { id: 'last_name', label: 'Last Name' },
    { id: 'email_address', label: 'Email' },
    { id: 'batch_number', label: 'Batch' },
    {
      id: 'admin',
      label: 'Actions',
      render: (_, row) =>
            
              <ViewPendingPopup userData={row} size="small" onConfirm={() => handleAccept(row.username)} onDecline={() => handleDecline(row.username)}>
                <Button type='contained'>View</Button>
              </ViewPendingPopup>

    },
  ];

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Pending Registrations" titleTypographyProps={{ variant: 'h6' }} />
          <TableWithFilter
            forceReload={forceReload}
            columns={columns}
            filterFields={filterFields}
            fetchData={getPendingUsers}
            onSelectionChange={onselectionchange}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PendingRegistrations;
