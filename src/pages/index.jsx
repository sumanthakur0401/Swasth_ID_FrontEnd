import { Signin } from "@/components/Authentication/Signin";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import WelcomePage from "@/components/Welcome/WelcomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swast Id</title>
      </Head>
      <AuthLayout>
        <WelcomePage />
      </AuthLayout>
    </>
  );
}
