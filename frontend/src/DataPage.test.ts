import { expect } from "chai";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("DataPage", async () => {
  it("should get Data from api", async () => {
    const mockAxios = new MockAdapter(axios);

    const res = await mockAxios.onGet("/api/absences").reply(200, fakeData);

    expect(res).to.equal(fakeData);
  });

  it("should request data that matches a search criteria", async () => {
    const mockAxios = new MockAdapter(axios);

    let res = await mockAxios.onGet(`/api/directories`);
    if (res.data) {
      const searchCriteria = "employee";

      const filteredData: DataType = res.data.filter((item: File | Folder) =>
        item.name.toLowerCase().includes(searchCriteria)
      );

      res = filteredData;
    }

    expect(res).to.equal({
      type: "pdf",
      name: "Employee Handbook",
      added: "2017-01-06",
      size: Math.floor(Math.random() * (900 - 300) + 300),
    });
  });
});

type File = {
  type: string;
  name: string;
  added: string;
  size: number;
};

type Folder = {
  type: string;
  name: string;
  files: File[];
};

type DataType = (File | Folder)[];

const fakeData = [
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
