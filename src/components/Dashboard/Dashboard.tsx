import { DashboardContainer } from "./Dashboard.styles";
import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionsTable />
    </DashboardContainer>
  );
}
