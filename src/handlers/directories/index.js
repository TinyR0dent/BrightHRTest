const data = [
  {
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
    size: Math.floor(Math.random() * (900 - 300) + 300),
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
    size: Math.floor(Math.random() * (900 - 300) + 300),
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
        size: Math.floor(Math.random() * (900 - 300) + 300),
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
        size: Math.floor(Math.random() * (900 - 300) + 300),
      },
    ],
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
    size: Math.floor(Math.random() * (900 - 300) + 300),
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
        size: Math.floor(Math.random() * (900 - 300) + 300),
      },
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
        size: Math.floor(Math.random() * (900 - 300) + 300),
      },
    ],
  },
];

const Directories = () => {
  const body = JSON.stringify(data);

  console.log("get Directories data");

  return new Response(body, {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Max-Age": "86400",
    },
  });
};

export default Directories;
