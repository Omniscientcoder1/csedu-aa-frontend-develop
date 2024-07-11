import {
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import TableWithFilter from 'src/components/tables/TableWithFilter';
import FormModalButton from 'src/components/tables/FormModalButton';
import {
  CheckboxInput,
  FormBuilder,
  Input,
  Select,
  Textarea,
} from 'src/components/forms/FormBuilder';
import { getMyMails, userSendMail } from 'src/services/query/mails';
import { formatDateTime, getFullName, getFullNameAlt } from 'src/views/utilities/utils';
import { Close, Done } from '@mui/icons-material';
import { getUsers } from 'src/services/query/user';
import { toast } from 'react-toastify';
import { Row } from 'react-bootstrap';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';

const Payments = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [selectedMail, setSelectedMail] = useState(null);

  const columns = [
    { id: 'event', label: 'Event' },
    { id: 'deadline', label: 'Deadline' },
    { id: 'payslip', label: 'Payslip' },
    { id: 'refund', label: 'Refund' },
  ];

  const filterFields = [];

  const getAllUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader title="Payments" titleTypographyProps={{ variant: 'h6' }} />
        <TableWithFilter columns={columns} filterFields={filterFields} fetchData={getMyMails} />
      </Card>
    </div>
  );
};

export default Payments;
