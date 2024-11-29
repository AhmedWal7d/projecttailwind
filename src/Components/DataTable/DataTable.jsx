import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const MyDataTable = () => {
  // بيانات ثابتة
  const [data] = useState([
    { id: 1, title: 'عنوان 1', body: 'هذا هو النص الخاص بالمقالة 1' },
    { id: 2, title: 'عنوان 2', body: 'هذا هو النص الخاص بالمقالة 2' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    { id: 3, title: 'عنوان 3', body: 'هذا هو النص الخاص بالمقالة 3' },
    // يمكنك إضافة المزيد من البيانات هنا
  ]);

  // تعريف الأعمدة
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Body',
      selector: row => row.body,
      sortable: true,
    },
  ];

  return (
    <div>
      <h2>My Data Table</h2>
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        highlightOnHover
      />
    </div>
  );
};

export default MyDataTable;
