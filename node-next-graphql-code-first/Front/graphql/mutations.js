import { gql } from "@apollo/client";

const ADD_DUMMY_DATA = gql`
  mutation addData($dummy: String!) {
    addData(dummy: $dummy) {
      id
      dummy
    }
  }
`;

const UPDATE_DUMMY_DATA = gql`
  mutation updateData($id: Int!, $dummy: String!) {
    updateData(id: $id, dummy: $dummy) {
      id
      dummy
    }
  }
`;

const DELETE_DUMMY_DATA = gql`
  mutation deleteData($id: Int!) {
    deleteData(id: $id) {
      id
    }
  }
`;

export { ADD_DUMMY_DATA, UPDATE_DUMMY_DATA, DELETE_DUMMY_DATA };
