import { ACTIVITY_STATUS_CANCELLED, ACTIVITY_STATUS_PENDING, ACTIVITY_STATUS_SUCCESSFUL, ACTIVITY_STATUS_UNSUCCESSFUL } from "../enums";
import { TransactionStatus } from "../Transaction/ITransactionController";

export const getTxStatusText = (txStatus: TransactionStatus): string => {
  switch (txStatus) {
    case "rejected":
    case "unapproved":
    case "failed":
      return ACTIVITY_STATUS_UNSUCCESSFUL;
    case "confirmed":
      return ACTIVITY_STATUS_SUCCESSFUL;
    case "submitted":
      return ACTIVITY_STATUS_PENDING;
    case "cancelled":
      return ACTIVITY_STATUS_CANCELLED;
    default:
      return "";
  }
};
