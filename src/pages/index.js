import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../containers/HomeContainer";
import HomePage from "./components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
