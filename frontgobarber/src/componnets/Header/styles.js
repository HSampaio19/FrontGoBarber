import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  height: 64px;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }
  img:nth-child(1) {
    height: 50px;
    width: 50px;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #222;
  }
  a {
    font-weight: bold;
    color: #fff;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  height: 50px;
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #444;
  div {
    text-align: center;
    align-self: center;

    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }
  img {
    align-self: center;
    height: 42px;
    width: 42px;
    border-radius: 50%;
    border: 3px solid #eee;
  }
`;
