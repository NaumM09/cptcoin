import { useEffect, useState } from "react";
import "./Cpt.css";

const CptLeaderboard = () => {
    const [topHolders, setTopHolders] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const mockData = [
                { address: "3zX...A1B2C", balance: 5000000 },
                { address: "9YT...B3E8F", balance: 4200000 },
                { address: "XKJ...C7H6D", balance: 3100000 },
                { address: "MTQ...E4J9G", balance: 2800000 },
                { address: "WPL...D8M2L", balance: 2500000 },
            ];
            setTopHolders(mockData);
        };
        fetchLeaderboard();
    }, []);

    return (
        <div className="leaderboard-section">
            <h2>🏆 CPT Token Leaderboard</h2>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Wallet</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {topHolders.map((holder, index) => (
                        <tr key={index}>
                            <td>#{index + 1}</td>
                            <td>{holder.address}</td>
                            <td>{holder.balance.toLocaleString()} CPT</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CptLeaderboard;