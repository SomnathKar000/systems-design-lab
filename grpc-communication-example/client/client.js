import path from "path";
import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const PROTO_PATH = path.join(import.meta.dirname, "../customers.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  arrays: true,
  keepCase: true,
  enums: String,
  longs: String,
});

const CustomerService =
  grpc.loadPackageDefinition(packageDefinition).CustomerService;

const client = new CustomerService(
  "127.0.0.1:4001",
  grpc.credentials.createInsecure()
);

export { client };
