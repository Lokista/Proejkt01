import AdminPanel from "../../components/AdminPanel/AdminPanel";
import AdminPanel2 from "../../components/AdminPanel/AdminPanel2";

function Admin({ products }) {
  return (
    <div className="  text-center">
      <div className="mb-[200px] mt-[50px]">
        Realtime database
        <AdminPanel products={products}></AdminPanel>
      </div>
      <div>
        Firestore database
        <AdminPanel2 products={products}></AdminPanel2>
      </div>
    </div>
  );
}
export default Admin;
export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000/localDB/MOCK_DATA.json");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}
