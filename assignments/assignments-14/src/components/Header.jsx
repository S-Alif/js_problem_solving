/* eslint-disable react/prop-types */


const Header = ({ appName }) => {
  return (
    <>
      <header className="mt-5 pt-4 text-center">
        <h1 className="text-capitalize fw-bolder">{appName}</h1>
      </header>
    </>
  );
};

export default Header;