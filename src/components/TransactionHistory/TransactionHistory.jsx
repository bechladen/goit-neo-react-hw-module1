import css from './TransactionHistory.module.css';

function capitalize(value) {
  if (!value) return '';
  return value[0].toUpperCase() + value.slice(1);
}

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css.tr}>
            <td className={css.td}>{capitalize(item.type)}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

