import React from "react";
import styled from "styled-components";
const NewsContainer = styled.div`
  margin: auto;
  width: 75%;
  background-color: black;
  min-height: 500px;
`;

const NewsTitle = styled.h2`
  color: white;
  text-align: center;
  padding: 1.6rem;
`;
const NewsModule = () => {
  return (
    <NewsContainer>
      <NewsTitle>News Headline</NewsTitle>
    </NewsContainer>
  );
};

export default NewsModule;
