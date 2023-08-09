import { ChakraProvider } from "@chakra-ui/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../services/Services/reducer";

import "@/styles/globals.css";
import "@/styles/Header.css";
import "@/styles/Home.css";
import "@/styles/Posts.css";
import "@/styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const store = createStore(rootReducer);
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}
