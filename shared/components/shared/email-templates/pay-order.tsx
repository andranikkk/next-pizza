import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Props> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Your order: {orderId}</h1>

    <p>
      Total amount for your order: <b>{totalAmount} $.</b>{" "}
      <a href={paymentUrl}>Click here</a> to pay
    </p>
  </div>
);
