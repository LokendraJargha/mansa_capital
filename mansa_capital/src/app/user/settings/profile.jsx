const Profile = () => {
  return (
    <div className="m-4 p-4">
      <div className="flex flex-row border">
        <div className="flex w-1/5 text-lg">
          <img src="https://placehold.co/200x200" alt="Profile" />
        </div>
        <div className="flex w-4/5">
          <ul className="w-full">
            <li className="m-4 text-2xl font-bold">Adil Khan</li>
            <li className="flex flex-row m-4 text-xl text-muted-foreground">
              Investor in FinTech, EdTech, HealthTech
            </li>
            <li className="m-4 text-base text-red-500">
              $12,335.00 in last 30 days
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
