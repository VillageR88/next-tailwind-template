const Table = () => {
  interface dataJSON {
    notes: {
      id: number;
      title: string;
      description: string;
    }[];
    tasks: {
      id: number;
      title: string;
      description: string;
    }[];
  }
  const mockupJSON = {
    notes: [
      {
        id: 1,
        title: 'Note 1',
        description: 'Description 1',
      },
      {
        id: 2,
        title: 'Note 2',
        description: 'Description 2',
      },
    ],
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'Description 2',
      },
    ],
  };
  return (
    <table>
      <caption>Notes</caption>
      <tbody className="">
        {mockupJSON.notes.map((note) => (
          <tr key={note.id}>
            <td>{note.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
