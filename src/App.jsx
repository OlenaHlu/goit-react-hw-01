import Profile from "../src/components/Profile/Profile";
import userData from "./userData.json";

import FriendList from "../src/components/FriendList/FriendList";
import friends from "./friends.json";

import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
