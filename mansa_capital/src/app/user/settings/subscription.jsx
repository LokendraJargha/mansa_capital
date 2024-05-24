const Subscription = () => {
  return (
    <div className="flex flex-row p-4">
      <div className="flex w-1/5 m-4 text-lg">SUBSCRIPTIONS</div>
      <div className="flex w-4/5">
        <ul className="text-sm w-full text-muted-foreground">
          <li className="m-4">
            1 Account connected x USD 100 - renewed Automatically on [dd] of
            every month
          </li>
          <li className="flex flex-row m-4">
            <div className="flex w-1/2">Customer Agreement</div>
            <div className="flex w-1/2">User Feedback</div>
          </li>
          <li className="m-4">Risk Disclosure</li>
          <li className="m-4">Cancel Subscription</li>
        </ul>
      </div>
    </div>
  );
};

export default Subscription;
