import React, { FC } from 'react';
import { IPost } from '../../types/posts/post';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

type PropsTypePost = {
  post: IPost;
};

const Post: FC<PropsTypePost> = ({ post }) => {
  const accordionHandle = () => {
    console.log('handle');
  };

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton onClick={accordionHandle}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
            >
              {post.title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Post;
