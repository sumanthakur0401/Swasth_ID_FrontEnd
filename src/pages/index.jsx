import { Signin } from "@/components/Authentication/Signin";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swast Id</title>
      </Head>
      <AuthLayout>
        <Signin />
      </AuthLayout>
    </>
  );
}
