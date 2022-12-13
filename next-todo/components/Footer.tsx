import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 53px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Footer: React.FC = () => {
  const router = useRouter();
  const isMain = router.pathname === "/";

  return (
    <Container>
      <button
        type="button"
        onClick={() => router.push(isMain ? "/todo/add" : "/")}
      >
        {isMain ? "+" : "-"}
      </button>
    </Container>
  );
};

export default Footer;
