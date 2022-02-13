import React from "react";
import styled from "styled-components";
import tucker from "../_assets/tucker.jpeg";
const NewsThumbContainer = styled.div`
  margin: 3.2rem 0;
  display: flex;
  justify-content: center;
`;

const NewsThumbImg = styled.div`
  margin: 0 1.6rem;
  max-width: 150px;
  height: auto;
`;
const NewsThumbDesc = styled.p``;

const NewsThumbs = () => {
  return (
    <div className="thumbs-container">
      <NewsThumbContainer>
        <NewsThumbImg>
          <img src={tucker} alt="#" />
        </NewsThumbImg>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbImg>
          <img src={tucker} alt="#" />
        </NewsThumbImg>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
      </NewsThumbContainer>
      <NewsThumbContainer>
        <NewsThumbDesc>
          asdkfjadskfahskjdfhaksjdfhkasjdhfkasjdhfkajsdhfkjashdkjfhaskj
        </NewsThumbDesc>
        <NewsThumbImg>
          <img src="adfadf" alt="#" />
        </NewsThumbImg>
      </NewsThumbContainer>
    </div>
  );
};

export default NewsThumbs;
