import React, { useState } from "react";
import { FormProvider, useForm, Controller, set, useWatch, useFieldArray, useFormContext } from "react-hook-form";
import { gql, useMutation, useQuery } from "@apollo/client";

const SignUp = () => {
  const defaultValues = { firstName: "", lastName: "", email: "", password: "" };

  const { register, getValues, handleSubmit } = useForm({ defaultValues: defaultValues });



  const INSERT_USER = gql`
    mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
      createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        id
        firstName
        lastName
        email
        password
        createdAt
        updatedAt
      }
    }
  `;

  const [createUser, response] = useMutation(INSERT_USER, {
    errorPolicy: "all", // this resolves unhandeled runtime error
    variables: {
      firstName: getValues("firstName"),
      lastName: getValues("lastName"),
      email: getValues("email"),
      password: getValues("password"),
    },
  });

  console.log(response);

  const Submithandler = (data) => {
    createUser();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Submithandler)}>
        <input {...register("firstName")} style={{ border: Boolean(response.error?.graphQLErrors[0].extensions.exception.errors?.firstName) && "1px solid #f34335" }} placeholder="First Name" />
        <input {...register("lastName")} style={{ border: Boolean(response.error?.graphQLErrors[0].extensions.exception.errors?.lastName) && "1px solid #f34335" }} placeholder="Last Name" />
        <input {...register("email")} style={{ border: Boolean(response.error?.graphQLErrors[0].extensions.exception.errors?.email || response.error?.message.includes("E11000")) && "1px solid #f34335" }} placeholder="Email" />
        <input {...register("password")} style={{ border: Boolean(response.error?.graphQLErrors[0].extensions.exception.errors?.password) && "1px solid #f34335" }} placeholder="Password" />

        <button type="submit">Sign Up</button>
      </form>
      <p>{response.error?.message}</p>
      {/* {response.error && Object.values(response.error?.graphQLErrors[0].extensions.exception.errors).map((item, index) => <p key={index}>{item.message}</p>)} */}
      {/* <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.lastName?.message}</p>
      <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.email?.message}</p>
      <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.password?.message}</p> */}
    </div>
  );
};

export default SignUp;
