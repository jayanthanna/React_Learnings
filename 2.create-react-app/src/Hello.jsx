function Hello() {
  let myName = "Jayanth";

  function fullName() {
    return "Jay";
  }

  let number = 3202;

  return (
    <div>
      <p>Number: {number}</p>
      <p>
        {/* Hello this is the future speaking. I am your master <b>{myName}</b> */}
        Hello this is the future speaking. I am your master <b>{fullName()}</b>
      </p>
    </div>
  );
}

export default Hello;
