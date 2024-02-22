import { expect } from "chai";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("DataPage", async () => {
  it("should get Data from api", async () => {
    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet("/api/directories").reply(200, fakeData);

    const res = await axios.get(`/api/directories`);

    expect(res.data).to.deep.equal(fakeData);
  });

  it("should request data that matches a search criteria", async () => {
    const mockAxios = new MockAdapter(axios);

    mockAxios.onGet(`/api/directories`).reply(200, fakeData);

    const res = await axios.get(`/api/directories`);

    if (res.data) {
      const searchCriteria = "employee";
      const filteredData: DataType = res.data.filter((item: File | Folder) =>
        item.name.toLowerCase().includes(searchCriteria)
      );

      expect(filteredData).to.deep.equal([
        {
          type: "pdf",
          name: "Employee Handbook",
          added: "2017-01-06",
          size: 100,
        },
      ]);
    }
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
    size: 100,
  },
  {
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
    size: 200,
  },
  {
    type: "folder",
    name: "Expenses",
    files: [
      {
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
        size: 300,
      },
      {
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
        size: 400,
      },
    ],
  },
  {
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
    size: 500,
  },
  {
    type: "folder",
    name: "Misc",
    files: [
      {
        type: "doc",
        name: "Christmas party",
        added: "2017-12-01",
        size: 600,
      },
      {
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
        size: 700,
      },
    ],
  },
];
