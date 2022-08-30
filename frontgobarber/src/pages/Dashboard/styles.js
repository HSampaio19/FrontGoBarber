import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 600px; */
  width: 600px;
  margin: 50px 0;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  opacity: ${props => (props.past ? '0.1' : '1')};
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  strong {
    display: block;
    font-size: 20px;
    color: ${props => (props.available ? '#999' : 'normal')};
    font-weight: bold;
  }
  span {
    display: block;
    color: ${props => (props.available ? '#999' : '#666')};
    margin-top: 3px;
  }
`;
