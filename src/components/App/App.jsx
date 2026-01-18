import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.page}>
      <h1 className={css.title}>Topic #2. Homework</h1>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Task 1 — Profile</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Task 2 — Friend List</h2>
        <FriendList friends={friends} />
      </section>

      <section className={css.section}>
        <h2 className={css.sectionTitle}>Task 3 — Transactions</h2>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
}

