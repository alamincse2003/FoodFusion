import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../Home/Home/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 px-4 md:px-8 lg:px-16">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="mt-4 uppercase border-b-4  border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black">
          View All Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
