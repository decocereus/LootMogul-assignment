import { fetchDataFromEndpoint } from "@/utils/apiCalls";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

export default function Home({ colleges, students }) {
  return (
    <main className="flex flex-col min-h-screen min-w-screen items-center bg-[#a1fcff]">
      <Provider store={store}>
        <Header />
        <Body colleges={colleges} students={students} />
        <Footer />
      </Provider>
    </main>
  );
}

export async function getStaticProps() {
  let colleges = await fetchDataFromEndpoint("/api/colleges");
  let students = await fetchDataFromEndpoint("/api/students");
  return {
    props: { colleges: colleges, students: students },
  };
}
