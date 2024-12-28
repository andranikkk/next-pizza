import React from "react";

interface Props {
  code: string;
}

export const VerificationTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <p>
      Verification code: <h2>{code}</h2>
    </p>

    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
        Verify registration
      </a>
    </p>
  </div>
);
