"use client";

import { styled } from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { Search_searchIcon } from "./search";
import { CartControl } from "./cart_control";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});
interface HeaderProps {}
const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const Logo = styled.a`
color = var(--logo-color);
font-weight: 400;
font-size: 40px ;
line-height: 60px`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <Search_searchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHeader>
  );
}
