import PageLogo from "./PageLogo";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import NavBar from "./NavBar";
import NavBarToggle from "./NavBarToggle";

const PageHeader = () => {
  return (
    <div className="flex bg-purple-300 items-center justify-between">
      <div className="flex">
        <NavBarToggle />
        <PageLogo />
        <NavBar />
      </div>
      <SearchBar />
      <UserButton className="" circleFill="#F9FAFB" pathStroke="black" />
    </div>
  );
};

export default PageHeader;
