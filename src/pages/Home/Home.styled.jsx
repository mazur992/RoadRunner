import styled from 'styled-components';

export const HomeStyle = styled.div`
  position: relative;
  height: 95vh;
  background-image: url('https://cdn.pixabay.com/photo/2017/05/02/15/30/streets-2278471_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: rgba(255, 255, 255, 0.8);
  & .companyName {
    font-size: 180px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
