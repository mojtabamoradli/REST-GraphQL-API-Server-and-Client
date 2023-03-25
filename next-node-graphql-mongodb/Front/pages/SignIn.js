import React, { useEffect, useState } from "react";
import { FormProvider, useForm, Controller, set, useWatch, useFieldArray, useFormContext } from "react-hook-form";
import { gql, useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { getCookies, setCookies, removeCookies } from "cookies-next";
import { useRouter } from "next/router";

const SignIn = () => {
  const router = useRouter();
  const defaultValues = { email: "", password: "" };

  const { register, getValues, handleSubmit } = useForm({ defaultValues: defaultValues });

  //   const QUERY_USER = gql`
  //     query user($email: String!) {
  //       user(email: $email) {
  //         id
  //         firstName
  //         lastName
  //         email
  //         password
  //         createdAt
  //         updatedAt
  //       }
  //     }
  //   `;
  //   const [findUser, {data: response, error}] = useLazyQuery(QUERY_USER, {
  //     variables: {
  //       email: getValues("email"),
  //     },
  //   });

  const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(email: $email, password: $password) {
        id
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
    }
  `;
  const [signIn, response] = useMutation(SIGNIN_USER, {
    errorPolicy: "all", // this resolves unhandeled runtime error
    variables: {
      email: getValues("email"),
      password: getValues("password"),
    },
  });

  const VERIFY_AUTH_TOKEN = gql`
    query verifyAuthToken($token: String!) {
      verifyAuthToken(token: $token)
    }
  `;
  const [verify, { data, loading, error }] = useLazyQuery(VERIFY_AUTH_TOKEN, {
    // errorPolicy: "all", // this resolves unhandeled runtime error
    variables: {
      token: getCookies().token,
    },
  });

  useEffect(() => {
    if (getCookies().token) {
      verify();
      if (data?.verifyAuthToken == true) {
        router.replace("/Dashboard");
      }
    }
  }, []);

  const Submithandler = (data) => {
    signIn();

    console.log("response", response?.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Submithandler)}>
        <input {...register("email")} placeholder="Email" />
        <input {...register("password")} placeholder="Password" />

        <button type="submit">Sign Up</button>
      </form>
      <p>{response?.error?.message}</p>
      {/* {response.error && Object.values(response.error?.graphQLErrors[0].extensions.exception.errors).map((item, index) => <p key={index}>{item.message}</p>)} */}
      {/* <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.lastName?.message}</p>
      <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.email?.message}</p>
      <p>{response.error?.graphQLErrors[0].extensions.exception.errors?.password?.message}</p> */}
    </div>
  );
};

export default SignIn;
