export const TransactionHistory = (transactions) => {
    return (
        <>
            {transactions.map((tran) => {
                return (
                    <table>
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Amount</th>
                                <th>Currency</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>{tran.type}</td>
                                <td>{tran.amount}</td>
                                <td>USD</td>
                            </tr>
                            <tr>
                                <td>Withdrawal</td>
                                <td>85</td>
                                <td>USD</td>
                            </tr>
                        </tbody>
                    </table>
                )
            })}
        </>
    )
}
