import css from './TransactionHistory.module.css'

export const TransactionHistory = (transactions) => {
    console.log();
    return (
        <>

            <table>
                <thead>
                    <tr>
                        <th className={css.header}>Type</th>
                        <th className={css.header}>Amount</th>
                        <th className={css.header}>Currency</th>
                    </tr>
                </thead>
                {transactions.items.map((tran) => {
                    return (
                        <tbody key={tran.id}>
                            <tr>
                                <td className={css.white}>{tran.type}</td>
                                <td className={css.white}>{tran.amount}</td>
                                <td className={css.white}>{tran.currency}</td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>


        </>
    )
}
