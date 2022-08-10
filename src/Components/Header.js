import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="/logo.svg" />
      </Link>

      <NavMenu>
        <a>
          <img src="home-icon.svg" />
          <span>HOME</span>
        </a>

        <a>
          <img src="search-icon.svg" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="original-icon.svg" />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src="movie-icon.svg" />
          <span>MOVIES</span>
        </a>

        <a>
          <img src="series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Link to="/login">
        <UserImage src="/86.jpg" />
      </Link>
    </Nav>
  );
}

export default Header;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid white;
  filter: opacity(90%);

  &:hover {
    filter: opacity(100%);
  }
`;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  // justify-content: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 3px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
