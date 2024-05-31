const Education = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="flex w-1/5 m-4 text-lg">EDUCATION</div>
      <div className="flex w-4/5 flex-col">
        <a
          href="/user/settings/user-guides"
          className="my-4 hover:underline
        "
        >
          User Guides
        </a>
        <a
          href="/user/settings/trading-manuals"
          className="my-4 hover:underline"
        >
          Trading Manuals
        </a>
      </div>
    </div>
  );
};

export default Education;
