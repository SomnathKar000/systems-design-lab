import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";

const PROTO_PATH = path.join(import.meta.dirname, "../customers.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  arrays: true,
  longs: String,
  enums: String,
});

const customers = [
  {
    id: "1",
    name: "Test 1",
    age: 23,
    address: "Kolkata",
  },
  {
    id: "2",
    name: "Test 2",
    age: 24,
    address: "Delhi",
  },
];

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(customersProto.CustomerService.service, {
  getAll: (call, callBack) => {
    callBack(null, { customers });
  },
  get: (call, callBack) => {},
  insert: (call, callBack) => {},
  update: (call, callBack) => {},
  remove: (call, callBack) => {},
});

server.bindAsync(
  "127.0.0.1:4001",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.log("Got an error while starting the server ", error);
      return;
    }
    console.log("Server is running on port: ", port);
  }
);
